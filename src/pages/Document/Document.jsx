import React from 'react'
import styled from 'styled-components'
import { Slate, Editable } from 'slate-react'
import { useCursors } from 'slate-yjs'

import Leaf from 'shared/Leaf'
import useDocument from './hooks/useDocument'
import DocumentPanel from './DocumentPanel'
import DocumentLeftPanel from './DocumentLeftPanel'
import Neuron from './Neuron'
import InlineToolbar from 'shared/plugins/InlineToolbar'
import { DocumentContext } from 'contexts'

const StyledDocumentContainer = styled.div`
  display: grid;
  grid-template-areas:
    "document-panel document-panel"
    "document-left-panel document-content";
  grid-template-rows: 45px;
  grid-template-columns: 250px auto;
  grid-row-gap: 20px;
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

const Document = () => {
  const {
    editor,
    activePageId,
    updateActivePageId,
    editorState,
    updateEditorState,
  } = useDocument()
  const { decorate } = useCursors(editor)

  const renderElement = React.useCallback(
    ({ attributes: { ref, ...otherAttributes }, element, children }) => {
      if (element.type === 'neuron') {
        return (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Neuron
              id={element.id}
              attributes={otherAttributes}
              ref={ref}
            />
          </React.Suspense>
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
    []
  )

  return (
    <DocumentContext.Provider value={{ activePageId, updateActivePageId }}>
      <StyledDocumentContainer key={activePageId}>
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

          <InlineToolbar />
        </Slate>
      </StyledDocumentContainer>
    </DocumentContext.Provider>
  )
}

export default React.memo(Document)
