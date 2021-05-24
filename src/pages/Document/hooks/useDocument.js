import { graphql } from 'graphql'
import React from 'react'
import { useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router-dom'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { withReact } from 'slate-react'
import * as Yjs from 'yjs'
import { toSharedType, withCursor, withYjs } from 'slate-yjs'
import { WebsocketProvider } from 'y-websocket'
import { useDispatch } from 'react-redux'

import { documentActions } from 'logic/document'
import withNodeId from '../plugins/withNodeId'
import withDetectNeuronInsert from '../plugins/withDetectNeuronInsert'
import withEditableNeuronVoid from '../plugins/withEditableNeuronVoid'
import withInsertImage from '../plugins/withInsertImage'
import useIsMounted from 'hooks/useIsMounted'

const query = graphql`
  query useDocumentQuery ($id: String!) {
    document(id: $id) {
      id
      name
      pages {
        id
        title
        pageId
        content
      }
    }

    me {
      color
      fullName
    }
  }
`

const getFirstPageId = document => document
  .pages[0]
  .id

const getEditorContent = ({ document, activePageId }) => JSON.parse(
  document
    .pages
    .find(page => page.id === activePageId)
    .content
)

const useDocument = () => {
  const { documentId } = useParams()
  const { me, document } = useLazyLoadQuery(query, { id: documentId })
  const { isMounted } = useIsMounted()
  const [activePageId, updateActivePageId] = React.useState(getFirstPageId(document))
  const [editorState, updateEditorState] = React.useState(getEditorContent({ document, activePageId }))

  const [isOnline, toggleIsOnline] = React.useState(false)
  const dispatch = useDispatch()

  const [sharedType, provider] = React.useMemo(
    () => {
      const doc = new Yjs.Doc()
      const newSharedType = doc.getArray('content')
      const newProvider = new WebsocketProvider(
        process.env.BASE_SHAREDB_WS,
        activePageId,
        doc,
        { connect: false }
      )

      return [newSharedType, newProvider]
    },
    [activePageId]
  )

  React.useEffect(
    () => { updateEditorState(getEditorContent({ document, activePageId })) },
    [activePageId]
  )

  const editor = React.useMemo(
    () => {
      const enhancedEditor = withDetectNeuronInsert(
        withEditableNeuronVoid(
          withInsertImage(
            withNodeId(
              withReact(
                withHistory(
                  createEditor()
                )
              )
            )
          )
        )
      )

      return withCursor(withYjs(enhancedEditor, sharedType), provider.awareness)
    },
    [provider]
  )

  React.useEffect(
    () => {
      dispatch(documentActions.setActiveDocumentId({ documentId }))
      dispatch(documentActions.setActivePageId({ activePageId }))
    },
    [documentId]
  )

  React.useEffect(
    () => {
      const sync = (synced) => {
        if (synced && sharedType.length === 0) {
          toSharedType(sharedType, editorState)
        }
      }

      provider.on('status', ({ status }) => { if (isMounted) toggleIsOnline(status === 'connected') })
      provider.on('sync', sync)

      provider.awareness.setLocalState({
        alphaColor: me.color,
        color: me.color,
        name: me.fullName
      })
      provider.connect()

      return () => provider.disconnect()
    },
    [provider, activePageId, isMounted]
  )

  return {
    editor,
    editorState,
    updateEditorState,
    activePageId,
    updateActivePageId,
    isOnline,
  }
}

export default useDocument
