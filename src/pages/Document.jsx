import React from 'react'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import styled from 'styled-components'

const StyledEditorContainer = styled.div`
  margin: 50px;
  border: 1px solid gray;
  padding: 20px;
`

const Document = () => {
  const [editorState, updateEditorState] = React.useState([
    { type: 'paragraph', children: [{ text: '' }] }
  ])
  const editor = React.useMemo(
    () => withReact(createEditor()),
    []
  )

  return (
    <StyledEditorContainer>
      <Slate
        editor={editor}
        value={editorState}
        onChange={updateEditorState}
      >
        <Editable />
      </Slate>
    </StyledEditorContainer>
  )
}

export default Document
