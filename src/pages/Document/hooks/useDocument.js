import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { withReact } from 'slate-react'

import * as documentServices from 'services/document'

import withRectangleSelect from '../plugins/withRectangleSelect'
import withNodeId from '../plugins/withNodeId'
import withEditableVoid from '../plugins/withEditableVoid'
import withDetectComponentInsert from '../plugins/withDetectComponentInsert'
import { withIOCollaboration, useCursor } from '@slate-collaborative/client'

const useDocument = () => {
  const params = useParams()
  const content = useSelector(state => state.getIn([
    'documents',
    parseInt(params.documentId),
    'content'
  ]))
  const userName = useSelector(state => state.getIn(['auth', 'fullName']))
  const color = useSelector(state => state.getIn(['auth', 'color'])) || ''

  const [editorState, updateEditorState] = React.useState(content
    ? JSON.parse(content)
    : null
  )

  React.useEffect(
    () => {
      if (!content) {
        documentServices
          .getDocument(params.documentId)
          .then(({ data }) => updateEditorState(JSON.parse(data.content)))
      }
    },
    []
  )

  React.useEffect(
    () => {
      editor.connect()
      return editor.destroy
    },
    []
  )


  const editor = React.useMemo(() => {
    const slateEditor = withRectangleSelect(
      withDetectComponentInsert(
        withEditableVoid(
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

    const origin =
      process.env.NODE_ENV === 'production'
        ? window.location.origin
        : 'http://localhost:8000'

    const options = {
      docId: '/' + params.documentId,
      cursorData: {
        name: userName,
        color,
        alphaColor: color.slice(0, -2) + '0.2)'
      },
      url: `${origin}/${params.documentId}`,
      connectOpts: {
        query: {
          name: userName,
          token: 'id',
          type: 'document',
          slug: params.documentId
        }
      },
    }

    return withIOCollaboration(slateEditor, options)
  }, [])

  const { decorate } = useCursor(editor)

  const onEditorChange = (newEditorState) => {
    updateEditorState(newEditorState)
  }

  return {
    editorState,
    editor,
    decorate,
    onEditorChange,
  }
}

export default useDocument
