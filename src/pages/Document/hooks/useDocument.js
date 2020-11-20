import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { createEditor } from 'slate'
import { withReact } from 'slate-react'

import * as documentServices from 'services/document'

import withNodeId from '../plugins/withNodeId'
import withEditablePageVoid from '../plugins/withEditablePageVoid'

const useDocument = () => {
  const params = useParams()
  const content = useSelector(state => state.getIn([
    'documents',
    parseInt(params.documentId),
    'content'
  ]))

  /**
   * Document
   *    id
   *    section
   *      id
   *      content: [
   *         { type: 'Page', id: pageId, children: [{ type: paragraph, children: [{ text: "asdasdasdad" }] }] },
   *         { type: 'Page', id: pageId, children: [{ type: paragraph, children: [{ text: "asdasdasdad" }] }] },
   *         { type: 'Page', id: pageId, children: [{ type: paragraph, children: [{ text: "asdasdasdad" }] }] },
   *      ]
   *
   */

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

  const editor = React.useMemo(
    () => withEditablePageVoid(withNodeId(withReact(createEditor()))),
    []
  )

  const onEditorChange = (newEditorState) => {
    updateEditorState(newEditorState)
  }

  return {
    editorState,
    editor,
    onEditorChange,
  }
}

export default useDocument
