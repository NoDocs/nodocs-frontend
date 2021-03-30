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

const query = graphql`
  query useDocumentQuery ($id: String!) {
    document(id: $id) {
      id
      name
      sections {
        id
        title
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
  const { me, document } = useLazyLoadQuery(query, { id: documentId })
  const [activeSectionId] = React.useState(getFirstSectionId(document))
  const [activePageId] = React.useState(getFirstPageId(document))

  const [isOnline, toggleIsOnline] = React.useState(false)
  const [editorState, updateEditorState] = React.useState(getEditorContent({ document, activeSectionId, activePageId }))
  const dispatch = useDispatch()

  const [sharedType, provider] = React.useMemo(
    () => {
      const doc = new Yjs.Doc()
      const sharedType = doc.getArray('content')
      const provider = new WebsocketProvider(
        process.env.BASE_SHAREDB_WS,
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
      const enhancedEditor = withDetectNeuronInsert(
        withEditableNeuronVoid(
          withNodeId(
            withReact(
              withHistory(
                createEditor()
              )
            )
          )
        )
      )

      return !provider
        ? enhancedEditor
        : withCursor(withYjs(enhancedEditor, sharedType), provider.awareness)
    },
    [sharedType, provider]
  )

  React.useEffect(
    () => {
      dispatch(documentActions.setActivePageId({ activePageId }))
      dispatch(documentActions.setActiveSectionId({ activeSectionId }))
    },
    [documentId]
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
