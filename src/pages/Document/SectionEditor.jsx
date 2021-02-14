import React from 'react'
import styled from 'styled-components'
import { Slate, Editable } from 'slate-react'
import { useCursor } from '@slate-collaborative/client'

import useDocument from './hooks/useDocument'
import DocumentPanel from './DocumentPanel'
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
  grid-row-gap: 25px;
  grid-column-gap: 25px;
`

const StyledEditable = styled(Editable)`
  grid-area: document-content;
  margin-right: 20px;
  background: #FFFFFF;
  min-height: 540px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 20px 30px;
  border-left: 0px;
`

const SectionEditor = () => {
  const { editor, editorState, updateEditorState } = useDocument()
  const { decorate } = useCursor(editor)

  const renderElement = React.useCallback(
    ({ attributes: { ref, ...otherAttributes }, element, children }) => {
      if (element.type === 'component') {
        return (
          <Component
            id={element.id}
            componentId={element.componentId}
            attributes={otherAttributes}
            ref={ref}
          />
        )
      }

      return (
        <div
          data-node-id={element.id}
          style={{ position: 'relative', margin: 0 }}
          ref={ref}
          {...otherAttributes}
        >
          {children}
        </div>
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
        onChange={updateEditorState}
      >
        <DocumentPanel />
        <DocumentLeftPanel />

        <StyledEditable
          data-start="selection"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          decorate={decorate}
        />
      </Slate>
    </StyledDocumentContainer>
  )
}

export default React.memo(SectionEditor)
