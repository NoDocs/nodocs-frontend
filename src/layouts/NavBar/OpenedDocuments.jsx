import React from 'react'
import styled from 'styled-components'
import { graphql, useLazyLoadQuery, useMutation } from 'react-relay'
import { useParams } from 'react-router-dom'

import CloseIcon from 'assets/close.svg'
import history from 'utils/history'
import HoverableContainer from 'atoms/HoverableContainer'
import AutoSizeInput from 'atoms/AutoSizeInput'

const StyledContainer = styled.div`
  margin-left: 10px;
  margin-right: 5px;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 5px;
`

const StyledCloseIcon = styled(CloseIcon)`
  position: relative;
  top: 1px;
  left: 5px;
`

const query = graphql`
  query OpenedDocumentsQuery ($id: String!) {
    document(id: $id) {
      id
      name
    }
  }
`

const updateDocumentMutation = graphql`
  mutation OpenedDocumentsMutation ($input: UpdateDocumentInput!) {
    updateDocument(input: $input) {
      document {
        name
      }
    }
  }
`

const OpenedDocuments = () => {
  const params = useParams()
  const { document } = useLazyLoadQuery(query, { id: params.documentId }, { fetchPolicy: 'store-only' })
  const [documentName, updateDocumentName] = React.useState('')
  const [updateDocument] = useMutation(updateDocumentMutation)

  React.useEffect(
    () => { if (document) updateDocumentName(document.name) },
    [document]
  )

  const saveDocumentTitle = () => {
    updateDocument({
      variables: {
        input: {
          name: documentName,
          id: params.documentId,
        },
      }
    })
  }

  return (
    <StyledContainer>
      <HoverableContainer active>
        <AutoSizeInput
          value={documentName}
          onChange={event => updateDocumentName(event.target.value)}
          onBlur={saveDocumentTitle}
        />

        <StyledCloseIcon
          color="white"
          size={10}
          onClick={() => history.push('/')}
        />
      </HoverableContainer>
    </StyledContainer>
  )
}

export default OpenedDocuments
