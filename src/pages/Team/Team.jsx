import React from 'react'
import styled from 'styled-components'

import Typography from 'molecules/Typography'
import SpotlightModal from 'modals/SpotlightModal'
import TeamConfigurationBar from './TeamConfigurationBar'
import TeamContent from './TeamContent'

const StyledContentContainer = styled.div`
  margin: 0px 50px;
`

const Team = () => (
  <React.Fragment>
    <StyledContentContainer>
      <TeamConfigurationBar />

      <Typography variant="h3" mt={2} mb={2}>The product team!</Typography>
      <Typography variant="body1">We change people’s live through travel</Typography>

      <React.Suspense fallback={<div>Loading...</div>}>
        <TeamContent />
      </React.Suspense>
    </StyledContentContainer>

    <SpotlightModal />
  </React.Fragment>
)

export default Team
