import React from 'react'
import styled from 'styled-components'
import { Slate, Editable } from 'slate-react'
import { useCursor } from '@slate-collaborative/client'

import useDocument from './hooks/useDocument'
import DocumentPanel from './DocumentPanel'
import Leaf from './components/Leaf'
import Page from './Page'
import Component from './Component'
import DocumentLeftPanel from './DocumentLeftPanel'

const StyledDocumentContainer = styled.div`
  display: grid;
  grid-template-areas:
    "document-panel document-panel"
    "document-left-panel document-content"
  ;
  grid-template-rows: 45px;
  grid-template-columns: 250px auto;
`

const Document = () => {
  const { editor, editorState, onEditorChange } = useDocument()
  const { decorate } = useCursor(editor)

  const renderElement = React.useCallback(
    ({ element, attributes, children }) => {
      if (element.type === 'component') {
        return <Component id={element.id} />
      }

      if (element.type === 'page') {
        return <Page id={element.id}>{children}</Page>
      }

      return (
        <p data-node-id={element.id} {...attributes}>
          {children}
        </p>
      )
    },
    []
  )

  const renderLeaf = React.useCallback(
    (props) => <Leaf {...props} />,
    [decorate]
  )

  if (!editorState) {
    return <div>Getting a document...</div>
  }

  return (
    <StyledDocumentContainer data-start="selection">
      <Slate
        editor={editor}
        value={editorState}
        onChange={onEditorChange}
      >
        <DocumentPanel />
        <DocumentLeftPanel />

        <Editable
          decorate={decorate}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
        />
      </Slate>
    </StyledDocumentContainer>
  )
}

export default Document
