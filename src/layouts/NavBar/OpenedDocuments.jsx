import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import history from 'utils/history'
import { documentSelectors } from 'logic/document'
import Label from 'atoms/Label'
import HoverableContainer from 'atoms/HoverableContainer'

const StyledContainer = styled.div`
  margin-left: 25px;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 5px;
`

const OpenedDocuments = () => {
  const openedDocumentIds = useSelector(documentSelectors.selectOpenedDocuments)
  const activeDocumentId = useSelector(documentSelectors.selectActiveDocumentId)

  return (
    <StyledContainer>
      {openedDocumentIds.map(document => (
        <HoverableContainer
          key={document.get('id')}
          active={activeDocumentId === document.get('id')}
          onClick={() => history.push(`/d/${document.get('id')}`)}
        >
          <Label>{document.get('title')}</Label>
        </HoverableContainer>
      ))}
    </StyledContainer>
  )
}

export default OpenedDocuments
