import React from 'react'
import styled from 'styled-components'
import { graphql } from 'relay-runtime'
import { useParams } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay'

import PlusIcon from 'assets/components/PlusIcon'
import IconButton from 'atoms/IconButton'
import Label from 'atoms/Label'
import SectionElements from './components/SectionElements'
import PageItem from './components/PageItem'
import CreatePage from './components/CreatePage'

const StyledLeftPanelContainer = styled.div`
  margin-left: 20px;
`

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledPagesContainer = styled.div`
  display: grid;
  align-items: start;
  grid-row-gap: 5px;
  margin-top: 15px;
`

const StyledSeparator = styled.div`
  height: 1px;
  background-color: #DDE3E8;
  margin-top: 30px;
  margin-bottom: 30px;
`

const StyledElementsLabel = styled(Label)`
  color: #67697C;
  margin-bottom: 15px;
`

const query = graphql`
  query DocumentLeftPanelQuery ($id: String!) {
    document(id: $id) {
      pages {
        id
        title
      }
    }
  }
`

const DocumentLeftPanel = () => {
  const [newPage, toggleNewPage] = React.useState(false)
  const params = useParams()
  const { document } = useLazyLoadQuery(
    query,
    { id: params.documentId },
    { fetchPolicy: 'store-only' }
  )

  return (
    <StyledLeftPanelContainer>
      <StyledFlexContainer>
        <Label weight={500} color="black">Pages</Label>

        <IconButton onClick={() => toggleNewPage(true)} variant="inverted">
          <PlusIcon variant="inverted" />
        </IconButton>
      </StyledFlexContainer>

      <StyledPagesContainer>
        {document
          .pages
          .map(page => <PageItem key={page.id} page={page} />)}

        {newPage && <CreatePage />}
      </StyledPagesContainer>

      <StyledSeparator />

      <StyledElementsLabel weight={500}>Elements</StyledElementsLabel>
      <SectionElements />
    </StyledLeftPanelContainer>
  )
}

export default DocumentLeftPanel
