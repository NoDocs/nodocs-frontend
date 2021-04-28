import React from 'react'
import { withReact } from 'slate-react'
import { createEditor } from 'slate'
import * as Yjs from 'yjs'
import { toSharedType, withCursor, withYjs } from 'slate-yjs'
import { WebsocketProvider } from 'y-websocket'
import { withHistory } from 'slate-history'

import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'graphql'
import { useLocation } from 'react-router'
import useIsMounted from './useIsMounted'

const WEBSOCKET_ENDPOINT = process.env.BASE_SHAREDB_WS

const query = graphql`
  query useNeuronModalQuery ($neuronId: String!) {
    neuron(neuronId: $neuronId) {
      id
      content
      neuronId
      name
      file {
        url
      }
    }
    me {
      color
      fullName
    }
  }
`

const useNeuronModal = () => {
  const { search } = useLocation()
  const params = new URLSearchParams(search)

  const { isMounted } = useIsMounted()
  const { neuron, me } = useLazyLoadQuery(query, { neuronId: params.get('neuronId') })
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

      return !provider
        ? enhancedEditor
        : withCursor(withYjs(enhancedEditor, sharedType), provider.awareness)
    },
    [sharedType, provider]
  )

  React.useEffect(() => {
    const sync = (synced) => {
      if (synced && sharedType.length === 0) {
        toSharedType(sharedType, editorState)
      }
    }

    provider.on('status', ({ status }) => { if (isMounted) toggleIsOnline(status === 'connected') })
    provider.awareness.setLocalState({ alphaColor: me.color, color: me.color, name: me.fullName })
    provider.on('sync', sync)

    provider.connect()

    return () => provider.disconnect()
  }, [provider, isMounted])

  return {
    editor,
    editorState,
    updateEditorState,
    isOnline,
    neuron,
  }
}

export default useNeuronModal
