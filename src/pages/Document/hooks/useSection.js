import React from 'react'
import { useSelector } from 'react-redux'
import { createEditor } from 'slate'
import { withReact } from 'slate-react'

import { documentSelectors } from 'logic/document'

import withNodeId from '../plugins/withNodeId'
import withEditablePageVoid from '../plugins/withEditablePageVoid'

const useSection = () => {
  const activeSectionId = useSelector(documentSelectors.selectActiveSectionId)
  const content = useSelector(documentSelectors.selectSectionProperty('content'))

  const [editorState, updateEditorState] = React.useState(content
    ? JSON.parse(content)
    : null
  )

  React.useEffect(
    () => {
      if (activeSectionId) {
        const parsed = JSON.parse(content)
        updateEditorState(parsed)
      }
    },
    [activeSectionId]
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

export default useSection
