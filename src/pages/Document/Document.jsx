import React from 'react'
import shortid from 'shortid'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import styled, { createGlobalStyle } from 'styled-components'

import withRectangleSelect from './plugins/withRectangleSelect'
import withNodeId from './plugins/withNodeId'

const GlobalStyles = createGlobalStyle`
  .selection-area {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

const StyledEditorContainer = styled.div`
  margin: 50px;
  border: 1px solid gray;
  padding: 50px;

  & .selected {
    background-color: green;
  }
`

const initialEditorState = [{
  type: 'paragraph',
  id: shortid.generate(),
  children: [{ text: '' }],
}]

const Document = () => {
  const [editorState, updateEditorState] = React.useState(initialEditorState)

  const editor = React.useMemo(
    () => withRectangleSelect(withNodeId(withReact(createEditor()))),
    []
  )

  const onEditorChange = (newEditorState) => {
    updateEditorState(newEditorState)
  }

  return (
    <React.Fragment>
      <GlobalStyles />
      <StyledEditorContainer data-start="selection">
        <Slate
          editor={editor}
          value={editorState}
          onChange={onEditorChange}
        >
          <Editable />
        </Slate>
      </StyledEditorContainer>
    </React.Fragment>
  )
}

export default Document
