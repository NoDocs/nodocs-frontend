import React from 'react'
import { createEditor } from 'slate'
import { withReact } from 'slate-react'
import shortid from 'shortid'

import withEditableComponentVoid from '../plugins/withEditableComponentVoid'

const usePage = () => {
  const [editorState, updateEditorState] = React.useState([
    { type: 'paragraph', id: shortid.generate(), children: [{ text: '' }] },
  ])

  const editor = React.useMemo(
    () => withReact(withEditableComponentVoid(createEditor())),
    []
  )

  const onEditorStateChange = (newEditorState) => {
    updateEditorState(newEditorState)
  }

  return {
    editorState,
    onEditorStateChange,
    editor,
  }
}

export default usePage
