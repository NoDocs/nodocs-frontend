import React from 'react'
import styled from 'styled-components'

import TeamConfigurationBar from './TeamConfigurationBar'
import TeamContent from './TeamContent'

const StyledContentContainer = styled.div`
  margin: 0px 50px;
`

const Team = () => (
  <React.Fragment>
    <StyledContentContainer>
      <TeamConfigurationBar />
      <TeamContent />
    </StyledContentContainer>
  </React.Fragment>
)

export default Team
