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

import withNodeId from '../plugins/withNodeId'
const WEBSOCKET_ENDPOINT = process.env.BASE_SHAREDB_WS

const query = graphql`
  query useDocumentQuery ($documentId: String!) {
    document(documentId: $documentId) {
      id
      sections {
        id
        pages {
          id
          title
          pageId
          content
        }
      }
    }

    me {
      color
      fullName
    }
  }
`

const getFirstSectionId = document => document
  .sections[0]
  .id

const getFirstPageId = document => document
  .sections[0]
  .pages[0]
  .id

const getEditorContent = ({ document, activeSectionId, activePageId }) => JSON.parse(
  document
    .sections
    .find(section => section.id === activeSectionId)
    .pages
    .find(page => page.id === activePageId)
    .content
)

const useDocument = () => {
  const { documentId } = useParams()
  const { me, document } = useLazyLoadQuery(query, { documentId })
  const [activeSectionId] = React.useState(getFirstSectionId(document))
  const [activePageId] = React.useState(getFirstPageId(document))

  const [isOnline, toggleIsOnline] = React.useState(false)
  const [editorState, updateEditorState] = React.useState(getEditorContent({ document, activeSectionId, activePageId }))

  const [sharedType, provider] = React.useMemo(
    () => {
      const doc = new Yjs.Doc()
      const sharedType = doc.getArray('content')
      const provider = new WebsocketProvider(
        WEBSOCKET_ENDPOINT,
        document.id,
        doc,
        { connect: false }
      )

      return [sharedType, provider]
    },
    [document]
  )

  const editor = React.useMemo(
    () => {
      const enhancedEditor = withNodeId(withReact(withHistory(createEditor())))

      return !provider
        ? enhancedEditor
        : withCursor(withYjs(enhancedEditor, sharedType), provider.awareness)
    },
    [sharedType, provider]
  )

  React.useEffect(
    () => {
      provider.on('status', ({ status }) => { toggleIsOnline(status === 'connected') })
      provider.on('sync', (isSynced) => {
        if (isSynced && sharedType.length === 0) {
          toSharedType(sharedType, [
            { type: 'paragraph', children: [{ text: 'Hello world!' }] },
          ])
        }
      })

      provider.awareness.setLocalState({
        alphaColor: me.color,
        color: me.color,
        name: me.fullName
      })
      provider.connect()

      return () => provider.disconnect()
    },
    [provider]
  )

  return {
    editor,
    editorState,
    updateEditorState,
    activeSectionId,
    activePageId,
    isOnline,
  }
}

export default useDocument
