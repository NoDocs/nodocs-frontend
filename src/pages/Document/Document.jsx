import React from 'react'
import shortid from 'shortid'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor, Transforms } from 'slate'
import styled, { createGlobalStyle } from 'styled-components'

import withRectangleSelect from './plugins/withRectangleSelect'
import withNodeId from './plugins/withNodeId'
import CustomComponent from './CustomComponent'

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

  const handleCreateComponent = () => {
    const blocks = editor
      .children
      .filter(curr => editor.selectedNodeIds.indexOf(curr.id) !== -1)

    const startingNodeId = blocks[0].id
    const endingNodeId = blocks[blocks.length - 1].id

    const startIndex = editor
      .children
      .findIndex(curr => curr.id === startingNodeId)

    const endIndex = editor
      .children
      .findIndex(curr => curr.id === endingNodeId)

    editor.apply({
      type: 'set_selection',
      properties: {
        anchor: { path: [startIndex, 0], offset: 0 },
      },
      newProperties: {
        anchor: { path: [startIndex, 0], offset: 0 },
        focus: { path: [endIndex, 0], offset: 3 },
      },
    })
    Transforms.wrapNodes(editor, { type: 'component', id: shortid.generate() })
  }

  console.log(editor.children)

  return (
    <React.Fragment>
      <GlobalStyles />
      <StyledEditorContainer data-start="selection">
        <Slate
          editor={editor}
          value={editorState}
          onChange={onEditorChange}
        >
          <Editable
            renderElement={({ attributes, children, element }) => {
              if (element.type === 'component') {
                return <CustomComponent id={element.id} content={children} />
              }

              return (
                <p data-node-id={element.id} {...attributes}>
                  {children}
                </p>
              )
            }}
          />
        </Slate>

        <button onClick={handleCreateComponent}>create component</button>
      </StyledEditorContainer>
    </React.Fragment>
  )
}

export default Document
