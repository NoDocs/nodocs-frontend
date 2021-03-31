import React from 'react'
import ContentLoader from 'react-content-loader'
import styled from 'styled-components'

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
      <ContentLoader 
        speed={1}
        width={40}
        height={90}
        viewBox="0 0 40 90"
        backgroundColor="gray"
        foregroundColor="white"
      >
        <rect x="0" y="0" width="40" height="40" />
        <rect x="0" y="50" width="40" height="40" />
      </ContentLoader>
    </StyledTeamNavigationContainer>
  )
}

export default LoadingTeams
