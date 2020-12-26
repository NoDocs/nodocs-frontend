import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createEditor } from 'slate'
import { withReact } from 'slate-react'

import * as componentServices from 'services/component'
import { componentActions } from 'logic/component'

const useComponent = ({ componentId }) => {
  const params = useParams()
  const dispatch = useDispatch()
  const content = useSelector(state => state.getIn(['components', componentId, 'content']))
  const rootDocumentId = useSelector(state => state.getIn(['components', componentId, 'rootDocument', 'id']))
  const [editorState, updateEditorState] = React.useState(content
    ? JSON.parse(content)
    : null)

  React.useEffect(
    () => {
      if (!content) {
        componentServices
          .getComponent(componentId)
          .then(({ data }) => {
            dispatch(componentActions.putComponent(data))
            updateEditorState(JSON.parse(data.content))
          })
      }
    },
    []
  )

  const editor = React.useMemo(
    () => withReact(createEditor()),
    []
  )

  const isImported = React.useMemo(
    () => parseInt(params.documentId, 10) === rootDocumentId,
    []
  )

  return {
    editorState,
    isImported,
    rootDocumentId,
    editor,
    updateEditorState,
  }
}

export default useComponent
