import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import withRenderPortal from 'hocs/withRenderPortal'
import FullScreenModal from 'molecules/FullScreenModal'

const StyledSpotlightContainer = styled.div`
  width: 600px;
  background: #222222;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  height: 400px;
`

const SpotlightModal = ({ closePortal }) => {
  return (
    <FullScreenModal
      close={closePortal}
      overlayStyles={{ opacity: 0 }}
    >
      <StyledSpotlightContainer>
        Something Here !!
      </StyledSpotlightContainer>
    </FullScreenModal>
  )
}

SpotlightModal.propTypes = {
  closePortal: PropTypes.func,
}

export default withRenderPortal(() => 'spotlight-portal')(SpotlightModal)
