import React from 'react'
import styled from 'styled-components'
import { Slate, Editable } from 'slate-react'

import CustomComponent from './CustomComponent'
import DocumentPanel from './DocumentPanel'
import Leaf from './components/Leaf'
import useDocument from './hooks/useDocument'

const StyledEditorContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin-top: 25px;
  margin-left: 20px;
  margin-right: 20px;
  min-height: calc(100vh - 190px);
  padding: 20px;
`

const Document = () => {
  const { editorState, onEditorChange, decorate, editor } = useDocument()

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

  const renderLeaf = React.useCallback((props) => <Leaf {...props} />, [decorate])

  if (!editorState) return <div>Getting a document...</div>

  return (
    <div data-start="selection">
      <Slate
        editor={editor}
        value={editorState}
        onChange={onEditorChange}
      >
        <DocumentPanel />

        <StyledEditorContainer>
          <Editable
            decorate={decorate}
            renderLeaf={renderLeaf}
            renderElement={renderElement}
          />
        </StyledEditorContainer>
      </Slate>
    </div>
  )
}

export default Document
