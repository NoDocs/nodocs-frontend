import React from 'react'
import styled from 'styled-components'
import { graphql, useLazyLoadQuery } from 'react-relay'

import DocumentCard from './components/DocumentCard'
import TeamBox from './TeamBox'

const StyledContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 16px;
  margin-top: 24px;
`

const meQuery = graphql`
  query TeamContentMeQuery {
    me {
      currentTeam {
        id
      }
    }
  }
`

const query = graphql`
  query TeamContentQuery ($teamId: String) {
    teamTags (teamId: $teamId) {
      id
      name
      relations {
        __typename
        ... on Document {
          id
          name
          shortDescription
          owner {
            fullName
            color
          }
          createdAt (format: "MMM D")
        }

        ... on Neuron {
          id
          name
          neuronId
          shortDescription
          owner {
            fullName
            color
          }
          createdAt (format: "MMM D")
        }
      }
    }
  }
`

const TeamContent = () => {
  const { me } = useLazyLoadQuery(meQuery, null, { fetchPolicy: 'store-only' })
  const { teamTags } = useLazyLoadQuery(query, { teamId: me.currentTeam.id })

  return (
    <StyledContentContainer>
      {teamTags.map(tag => (
        <TeamBox key={tag.id} data={tag}>
          {tag.relations.map(relation => (
            <DocumentCard
              key={relation.id}
              data={relation}
            />
          ))}
        </TeamBox>
      ))}
    </StyledContentContainer>
  )
}

export default TeamContent
