import React from 'react'
import styled from 'styled-components'
import { useLazyLoadQuery, graphql } from 'react-relay'

const StyledTeamGroupContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
`

// const query = graphql`
//   query TeamGroupContentQuery($tagId: String, $teamId: String) {
//     documents(first: 2147483647, tagId: $tagId, teamId: $teamId) @connection(key: "Team_groupContent") {
//       __id
//       edges {
//         node {
//           id
//           name
//           createdAt (format: "MMM D")
//           neurons {
//             id
//             name
//           }
//           owner {
//             id
//             avatar
//             color
//             fullName
//           }
//         }
//       }
//     }
//   }
// `

const TeamGroupContent = ({ groupId }) => {
  return (
    <StyledTeamGroupContentContainer>
      
    </StyledTeamGroupContentContainer>
  )
}

export default TeamGroupContent
