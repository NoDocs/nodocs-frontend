import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButtonContainer = styled.button`
  border: none;
  padding: 6px;
  background-color: transparent;
  border-radius: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ variant }) => variant === 'black'
    ? 'rgba(255, 255, 255, 0.15)'
    : '#F3F3F3'};
  }
`

const IconButton = ({ variant = 'black', children, onClick }) => (
  <StyledButtonContainer variant={variant} onClick={onClick}>
    {children}
  </StyledButtonContainer>
)

IconButton.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.element,
  onClick: PropTypes.func,
}

export default IconButton
