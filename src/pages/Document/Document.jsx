import React from 'react'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import styled, { createGlobalStyle } from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import * as documentServices from 'services/document'
import withRectangleSelect from './plugins/withRectangleSelect'
import withNodeId from './plugins/withNodeId'
import withEditableVoid from './plugins/withEditableVoid'
import CustomComponent from './CustomComponent'
import CreateComponentButton from './CreateComponentButton'

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

const Document = () => {
  const params = useParams()
  const content = useSelector(state => state.getIn([
    'documents',
    parseInt(params.documentId),
    'content'
  ]))

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
    () => withRectangleSelect(withEditableVoid(withNodeId(withReact(createEditor())))),
    []
  )

  const onEditorChange = (newEditorState) => {
    const { operations, children } = editor

    if (!Boolean(operations.find(curr => curr.type === 'set_selection'))) {
      operations
        .forEach(({ path }) => {
          console.log(operations)
          const [blockIndex] = path

          if (!children[blockIndex]) return
          if (children[blockIndex].type !== 'component') return

          console.log('change inside a component')
          console.log('sync to server !!')
        })
    }

    updateEditorState(newEditorState)
    // documentServices
    //   .updateDocument(params.documentId, { content: JSON.stringify(newEditorState) })
  }

  const renderElement = React.useCallback(
    ({ attributes, children, element }) => {
      if (element.type === 'component') {
        return <CustomComponent id={element.id} content={children} />
      }

      return (
        <p data-node-id={element.id} {...attributes}>
          {children}
        </p>
      )
    },
    []
  )

  if (!editorState) return <div>Getting a document...</div>

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
            renderElement={renderElement}
            placeholder="Document..."
          />

          <CreateComponentButton />
        </Slate>
      </StyledEditorContainer>
    </React.Fragment>
  )
}

export default Document
