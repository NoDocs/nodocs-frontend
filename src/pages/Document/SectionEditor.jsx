import React from 'react'
import styled from 'styled-components'
import { Slate, Editable } from 'slate-react'
import { useCursor } from '@slate-collaborative/client'

import useDocument from './hooks/useDocument'
// import useCollaborative from './hooks/useCollaborative'
import DocumentPanel from './DocumentPanel'
import Page from './Page'
import DocumentLeftPanel from './DocumentLeftPanel'
import Component from './Component'
import Leaf from './components/Leaf'

const StyledDocumentContainer = styled.div`
  display: grid;
  grid-template-areas:
    "document-panel document-panel"
    "document-left-panel document-content"
  ;
  grid-template-rows: 45px;
  grid-template-columns: 250px auto;
`

const SectionEditor = () => {
  const { editor, editorState, onEditorStateChange, decorate } = useDocument()

  const renderElement = React.useCallback(
    ({ attributes, element, children }) => {
      if (element.type === 'page') {
        return <Page id={element.id} content={children} attributes={attributes} />
      }

      if (element.type === 'component') {
        return <Component id={element.id} />
      }

      return (
        <p style={{ position: 'relative', margin: 0 }} {...attributes}>
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

  return (
    <StyledDocumentContainer data-start="selection">
      <Slate
        editor={editor}
        value={editorState}
        onChange={onEditorStateChange}
      >
        <DocumentPanel />
        <DocumentLeftPanel />

        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          decorate={decorate}
        />
      </Slate>
    </StyledDocumentContainer>
  )
}

export default React.memo(SectionEditor)
