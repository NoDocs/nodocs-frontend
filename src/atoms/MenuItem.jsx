import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label from './Label'

const StyledMenuItemContainer = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 5px;
  border-radius: 4px;
  padding: 5px 10px;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #ECEFF1;
  }
`

const StyledLabel = styled(Label)`
  color: black;
  font-weight: 500;

  ${props => props.size && `font-size: ${props.size}px;`}
`

const MenuItem = ({ className, Icon, fontSize, text }) => {
  return (
    <StyledMenuItemContainer className={className}>
      {Icon}
      <StyledLabel size={fontSize}>{text}</StyledLabel>
    </StyledMenuItemContainer>
  )
}

MenuItem.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.any,
  fontSize: PropTypes.number,
  text: PropTypes.string,
}

export default MenuItem
