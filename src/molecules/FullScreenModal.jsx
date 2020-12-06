import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import backgroundImage from 'assets/background-dark.svg'
import closeIcon from 'assets/close.svg'
import IconButton from 'atoms/IconButton'

const StyledContainer = styled.div`
  min-height: 100vh;
  overflow: auto;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center center;
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

const StyledCloseIconButton = styled(IconButton)`
  position: absolute;
  top: 30px;
  right: 30px;
`

const FullScreenModal = ({ close, children }) => {
  return ReactDOM.createPortal(
    <StyledContainer>
      <StyledCloseIconButton onClick={close}>
        <img src={closeIcon} alt="go back" />
      </StyledCloseIconButton>

      {children}
    </StyledContainer>,
    document.getElementById('portals')
  )
}

FullScreenModal.propTypes = {
  close: PropTypes.func,
  children: PropTypes.any,
}

export default FullScreenModal
