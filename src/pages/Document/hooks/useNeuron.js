import React from 'react'
import { withReact } from 'slate-react'
import { createEditor } from 'slate'
import { toSharedType, withCursor, withYjs } from 'slate-yjs'
import { WebsocketProvider } from 'y-websocket'
import { withHistory } from 'slate-history'
import { useLazyLoadQuery, useMutation, useSubscription } from 'react-relay'
import { graphql } from 'graphql'
import * as Yjs from 'yjs'

import withEditableNeuronVoid from '../plugins/withEditableNeuronVoid'

const WEBSOCKET_ENDPOINT = process.env.BASE_SHAREDB_WS

const query = graphql`
  query useNeuronQuery ($neuronId: String!) {
    neuron(neuronId: $neuronId) {
      id
      type
      content
      live
      neuronId
      name
      file {
        id
        url
      }
    }
    me {
      color
      fullName
    }
  }
`

const subscription = graphql`
  subscription useNeuronSubscription($input: SwitchAssetSubscriptionInput!) {
    switchAsset(input: $input) {
      neuron {
        file {
          id
          url
        }
      }
      clientSubscriptionId
    }
  }
`

const mutation = graphql`
  mutation useNeuronMutation ($input: SwitchAssetInput!) {
    switchAsset(input: $input) {
      neuron {
        id
        file {
          url
        }
      }
    }
  }
`

const constructNeuronContent = neuron => {
  if (neuron.type === 'image') {
    return [{ type: 'image', src: neuron.file.url, children: [{ text: '' }] }]
  }

  return JSON.parse(neuron.content)
}

const useNeuron = ({ neuronId }) => {
  const { neuron, me } = useLazyLoadQuery(query, { neuronId })
  const [editorState, updateEditorState] = React.useState(constructNeuronContent(neuron))
  const [isOnline, toggleIsOnline] = React.useState(false)
  const [switchAsset] = useMutation(mutation)

  useSubscription({
    subscription,
    variables: { input: {} },
    updater: store => {
      console.log('update locally too !!')
      const newFileUrl = store
        .getRootField('switchAsset')
        .getLinkedRecord('neuron')
        .getLinkedRecord('file')
        .getValue('url')

      const file = store.get(neuron.file.id)
      file.setValue('url', newFileUrl)
    }
  })

  const [sharedType, provider] = React.useMemo(
    () => {
      const doc = new Yjs.Doc()
      const sharedType = doc.getArray('content')
      const provider = new WebsocketProvider(WEBSOCKET_ENDPOINT, neuron.id, doc, { connect: true })

      return neuron.type === 'image'
        ? []
        : [sharedType, provider]
    },
    [neuron]
  )

  const editor = React.useMemo(
    () => {
      const enhancedEditor = withEditableNeuronVoid(withReact(withHistory(createEditor())))

      enhancedEditor.awareness = {
        on: () => {},
      }

      return provider
        ? withCursor(withYjs(enhancedEditor, sharedType), provider.awareness)
        : enhancedEditor
    },
    [sharedType, provider]
  )

  React.useEffect(() => {
    if (neuron.type === 'image') return

    const sync = (synced) => {
      if (synced && sharedType.length === 0) {
        toSharedType(sharedType, editorState)
      }
    }

    provider.on('status', ({ status }) => toggleIsOnline(status === 'connected'))
    provider.awareness.setLocalState({ alphaColor: me.color, color: me.color, name: me.fullName })
    provider.on('sync', sync)

    console.log('connect !!')
    provider.connect()

    return () => provider.disconnect()
  }, [provider])

  const switchImage = (event) => {
    const [file] = event.target.files

    switchAsset({
      variables: { input: { neuronId: neuron.id } },
      uploadables: { file },
    })
  }

  return {
    editor,
    editorState,
    updateEditorState,
    neuron,
    isOnline,
    switchImage,
  }
}

export default useNeuron
