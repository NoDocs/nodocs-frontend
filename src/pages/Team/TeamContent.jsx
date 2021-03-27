import React from 'react'
import styled from 'styled-components'

import TeamDocuments from './TeamDocuments'
import TeamNeurons from './TeamNeurons'

const StyledTeamContentContainer = styled.div`
  margin-top: 24px;
`

const TeamContent = () => {
  return (
    <StyledTeamContentContainer>
      <TeamDocuments />
      <TeamNeurons />
    </StyledTeamContentContainer>
  )
}

export default TeamContent
