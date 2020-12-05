import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import backgroundImage from 'assets/background-dark.svg'
import logoWhite from 'assets/logo-white.svg'

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
`

const FullHeightPageLayout = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

FullHeightPageLayout.propTypes = {
  children: PropTypes.any,
}

export default FullHeightPageLayout
