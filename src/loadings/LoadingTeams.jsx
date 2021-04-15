import React from 'react'
import styled from 'styled-components'

import LoaderLight from 'assets/loader-light.svg'

const StyledTeamNavigationContainer = styled.div`
  width: 72px;
  height: 100vh;
  border-right: 2px solid rgba(255, 255, 255, 0.2);
  padding-top: 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoadingTeams = () => {
  return (
    <StyledTeamNavigationContainer>
      <LoaderLight size={24} />
    </StyledTeamNavigationContainer>
  )
}

export default LoadingTeams
