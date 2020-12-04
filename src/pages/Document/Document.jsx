import React from 'react'
import styled from 'styled-components'
import { Slate, Editable } from 'slate-react'
import { useCursor } from '@slate-collaborative/client'

import useDocument from './hooks/useDocument'
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
  const { editor, sectionState, updateSectionState } = useDocument()

  const renderElement = React.useCallback(
    ({ attributes, element }) => {
      return element.type === 'page'
        ? <Page id={element.id} attributes={attributes} />
        : null
    },
    []
  )

  if (!sectionState) {
    return <div>Getting a document...</div>
  }

  return (
    <StyledDocumentContainer data-start="selection">
      <Slate
        editor={editor}
        value={sectionState}
        onChange={updateSectionState}
      >
        <DocumentPanel />
        <DocumentLeftPanel />

        <Editable renderElement={renderElement} />
      </Slate>
    </StyledDocumentContainer>
  )
}

export default Document
