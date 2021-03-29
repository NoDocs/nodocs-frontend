import React from 'react'
import styled from 'styled-components'

import LoadingTeamDocuments from 'loadings/LoadingTeamDocuments'
import TeamDocuments from './TeamDocuments'
import TeamNeurons from './TeamNeurons'

const StyledTeamContentContainer = styled.div`
  margin-top: 24px;
`

const TeamContent = () => {
  return (
    <StyledTeamContentContainer>
      <React.Suspense fallback={<LoadingTeamDocuments />}>
        <TeamDocuments />
      </React.Suspense>

      <TeamNeurons />
    </StyledTeamContentContainer>
  )
}

export default TeamContent
