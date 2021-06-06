import React from 'react'
import styled from 'styled-components'

import LoadingTeamMembers from 'loadings/LoadingTeamMembers'
import TeamMembers from './TeamMembers'
import TeamGroupByAction from './TeamGroupByAction'
import TeamPropertiesAction from './TeamPropertiesAction'
import DeleteTeamAction from './DeleteTeamAction'

const StyledTeamConfigurationBarContainer = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #CFD8DC;
  margin: 0px -50px;
  padding: 0px 50px;
`

const LeftContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 6px;
  align-items: center;
`

const StyledSeparator = styled.div`
  height: 22px;
  width: 1px;
  background-color: #9FB0B8;
`

const TeamConfigurationBar = () => {
  return (
    <StyledTeamConfigurationBarContainer>
      <LeftContainer>
        <React.Suspense fallback={<LoadingTeamMembers />}>
          <TeamMembers />
        </React.Suspense>

        <StyledSeparator />

        <TeamGroupByAction />
        <TeamPropertiesAction />

        <StyledSeparator />

        <DeleteTeamAction />
      </LeftContainer>
    </StyledTeamConfigurationBarContainer>
  )
}

export default TeamConfigurationBar
