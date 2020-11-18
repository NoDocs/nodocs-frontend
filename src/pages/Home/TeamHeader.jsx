import React from 'react'
import styled from 'styled-components'

import defaultBackgroundImage from 'assets/team-default-background.png'

const StyledContainer = styled.div`
  height: 210px;
  background-image: url(${defaultBackgroundImage});
  background-position: center center;
  background-size: cover;
`

const TeamHeader = () => (
  <StyledContainer>

  </StyledContainer>
)

export default TeamHeader
