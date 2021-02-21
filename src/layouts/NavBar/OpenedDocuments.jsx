import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import * as documentServices from 'services/document'
import history from 'utils/history'
import { documentActions, documentSelectors } from 'logic/document'
import HoverableContainer from 'atoms/HoverableContainer'
import AutoSizeInput from 'atoms/AutoSizeInput'

const StyledContainer = styled.div`
  margin-left: 25px;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 5px;
`

const OpenedDocuments = () => {
  const openedDocumentIds = useSelector(documentSelectors.selectOpenedDocuments)
  const activeDocumentId = useSelector(documentSelectors.selectActiveDocumentId)
  const dispatch = useDispatch()

  const changeDocumentName = (documentId) => event => {
    dispatch(documentActions.updateDocument({ documentId, title: event.target.value }))
  }

  const saveDocumentTitle = (documentId) => event => {
    documentServices.updateDocument(documentId, {
      title: event.target.value,
    })
  }

  return (
    <StyledContainer>
      {openedDocumentIds.map(document => (
        <HoverableContainer
          key={document.get('id')}
          active={activeDocumentId === document.get('id')}
          onClick={() => history.push(`/d/${document.get('id')}`)}
        >
          <AutoSizeInput
            value={document.get('title')}
            onChange={changeDocumentName(document.get('id'))}
            onBlur={saveDocumentTitle(document.get('id'))}
          />
        </HoverableContainer>
      ))}
    </StyledContainer>
  )
}

export default OpenedDocuments
