import React from 'react'
import styled from 'styled-components'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router-dom'

import Typography from 'molecules/Typography'

const StyledTagsContainer = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-row-gap: 4px;
`

const StyledListContainer = styled.div`
  display: flex;
`

const query = graphql`
  query TagsQuery($documentId: String!) {
    documentTags(documentId: $documentId) {
      id
      name
    }
  }
`

const Tags = () => {
  const { documentId } = useParams()
  const { documentTags } = useLazyLoadQuery(query, { documentId })

  console.log(documentTags)

  return (
    <StyledTagsContainer>
      <Typography variant="caption" color="#333">#</Typography>
      <StyledListContainer>
        {documentTags.map((tag, index) => (
          <Typography
            color="#333"
            variant="caption"
            key={tag.id}
          >
            {tag.name}{index < documentTags.length - 1 && ','}
          </Typography>
        ))}
      </StyledListContainer>
    </StyledTagsContainer>
  )
}

export default Tags
