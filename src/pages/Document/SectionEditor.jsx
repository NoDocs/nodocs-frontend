import React from 'react'
import styled from 'styled-components'
import { Slate, Editable } from 'slate-react'

import useDocument from './hooks/useDocument'
import DocumentPanel from './DocumentPanel'
import Page from './Page'
import DocumentLeftPanel from './DocumentLeftPanel'
import Component from './Component'
import Leaf from './components/Leaf'
import InlineToolbar from './components/InlineToolbar'
import useCollaborative from './hooks/useCollaborative'

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
  const { editor, editorState, updateEditorState, activeSectionId } = useDocument()
  const { onEditorStateChange, decorate } = useCollaborative({
    namespace: 'sections',
    docId: activeSectionId,
    updateEditorState,
    editor,
    editorState,
  })

  const renderElement = React.useCallback(
    ({ attributes: { ref, ...otherAttributes }, element, children }) => {
      if (element.type === 'page') {
        return (
          <Page
            id={element.id}
            content={children}
            attributes={otherAttributes}
            ref={ref}
          />
        )
      }

      if (element.type === 'component') {
        return (
          <Component
            id={element.id}
            componentId={element.componentId}
            content={children}
            attributes={otherAttributes}
            ref={ref}
          />
        )
      }

      return (
        <p
          data-node-id={element.id}
          style={{ position: 'relative', margin: 0 }}
          ref={ref}
          {...otherAttributes}
        >
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
    <StyledDocumentContainer>
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

        <InlineToolbar />
      </Slate>
    </StyledDocumentContainer>
  )
}

export default React.memo(SectionEditor)
