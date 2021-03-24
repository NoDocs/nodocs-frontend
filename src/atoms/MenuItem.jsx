import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label from './Label'

const StyledMenuItemContainer = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 5px;
  background: #ECEFF1;
  border-radius: 4px;
  padding: 5px 10px;
  align-items: center;
`

const StyledLabel = styled(Label)`
  color: rgba(0, 0, 0, 0.5);
`

const MenuItem = ({ Icon, text }) => {
  return (
    <StyledMenuItemContainer>
      <Icon />
      <StyledLabel>{text}</StyledLabel>
    </StyledMenuItemContainer>
  )
}

MenuItem.propTypes = {
  Icon: PropTypes.any,
  text: PropTypes.string,
}

export default MenuItem
