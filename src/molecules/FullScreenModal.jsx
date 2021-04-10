import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CloseIcon from 'assets/close.svg'
import IconButton from 'atoms/IconButton'

const StyledContainer = styled.div`
  min-height: 100vh;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 100;
`

const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`

const StyledCloseIconButton = styled(IconButton)`
  position: absolute;
  top: 30px;
  right: 30px;
`

const StyledContentContainer = styled.div`
  position: relative;
  z-index: 101;
`

const FullScreenModal = ({ close, containerStyles, className, children }) => {
  return ReactDOM.createPortal(
    <StyledContainer style={containerStyles}>
      <StyledOverlay onClick={close} />

      <StyledCloseIconButton onClick={close}>
        <CloseIcon color="white" />
      </StyledCloseIconButton>

      <StyledContentContainer className={className}>
        {children}
      </StyledContentContainer>
    </StyledContainer>,
    document.getElementById('portals')
  )
}

FullScreenModal.propTypes = {
  close: PropTypes.func,
  containerStyles: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
}

export default FullScreenModal
