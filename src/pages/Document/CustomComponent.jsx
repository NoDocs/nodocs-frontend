import React from 'react'
import styled from 'styled-components'
import { Editable, withReact, Slate } from 'slate-react'
import { createEditor } from 'slate'
import { useSelector } from 'react-redux'

const StyledComponentContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
`

const CustomComponent = ({ id }) => {
  const content = useSelector(state => state.getIn(['components', id, 'content']))
  const [editorState, updateEditorState] = React.useState(content)

  const editor = React.useMemo(() => withReact(createEditor()), [])

  return (
    <StyledComponentContainer contentEditable={false} data-component-id={id}>
      <Slate editor={editor} value={editorState} onChange={updateEditorState}>
        <Editable autoFocus />
      </Slate>
    </StyledComponentContainer>
  )
}

export default CustomComponent
