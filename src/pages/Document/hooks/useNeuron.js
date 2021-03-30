import React from 'react'
import { withReact } from 'slate-react'
import { createEditor } from 'slate'
import * as Yjs from 'yjs'
import { toSharedType, withCursor, withYjs } from 'slate-yjs'
import { WebsocketProvider } from 'y-websocket'
import { withHistory } from 'slate-history'

import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'graphql'

const WEBSOCKET_ENDPOINT = process.env.BASE_SHAREDB_WS

const query = graphql`
  query useNeuronQuery ($neuronId: String!) {
    neuron(neuronId: $neuronId) {
      id
      content
      neuronId
      name
    }
    me {
      color
      fullName
    }
  }
`

const useNeuron = ({ neuronId }) => {
  const { neuron, me } = useLazyLoadQuery(query, { neuronId })
  const [editorState, updateEditorState] = React.useState(JSON.parse(neuron.content))
  const [isOnline, toggleIsOnline] = React.useState(false)

  const [sharedType, provider] = React.useMemo(
    () => {
      const doc = new Yjs.Doc()
      const sharedType = doc.getArray('content')
      const provider = new WebsocketProvider(WEBSOCKET_ENDPOINT, neuron.id, doc, { connect: true })

      return [sharedType, provider]
    },
    [neuron]
  )

  const editor = React.useMemo(
    () => {
      const enhancedEditor = withReact(withHistory(createEditor()))

      return provider
        ? withCursor(withYjs(enhancedEditor, sharedType), provider.awareness)
        : enhancedEditor
    },
    [sharedType, provider]
  )

  React.useEffect(() => {
    provider.on('status', ({ status }) => { toggleIsOnline(status === 'connected') })

    provider.awareness.setLocalState({ alphaColor: me.color, color: me.color, name: me.fullName })
    provider.on('sync', (isSynced, ...rest) => {
      console.log(isSynced, rest)
      if (isSynced && sharedType.length === 0) {
        toSharedType(sharedType, [
          { type: 'paragraph', children: [{ text: 'Hello world!' }] },
        ])
      }
    })

    provider.connect()

    return provider.disconnect
  }, [provider])

  return {
    editor,
    editorState,
    updateEditorState,
    isOnline,
  }
}

export default useNeuron
