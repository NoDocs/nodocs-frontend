import React from 'react'
import styled from 'styled-components'
import { Slate } from 'slate-react'

import useDocument from './hooks/useDocument'
import usePage from './hooks/usePage'
import DocumentPanel from './DocumentPanel'
import Page from './Page'
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
  const { pages } = useDocument()
  const { editor, editorState, onEditorChange } = usePage()

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

        {pages.map(pageId => <Page key={pageId} id={pageId} />)}
      </Slate>
    </StyledDocumentContainer>
  )
}

export default Document
