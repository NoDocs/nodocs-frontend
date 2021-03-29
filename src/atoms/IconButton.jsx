import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButtonContainer = styled.button`
  border: none;
  padding: 6px;
  background-color: transparent;
  border-radius: 5px 10px;
  cursor: pointer;

  ${props => props.size && `height: ${props.size}px;`}
  ${props => props.size && `width: ${props.size}px;`}

  &:hover {
    background-color: ${({ variant }) => variant === 'black'
    ? 'rgba(255, 255, 255, 0.15)'
    : '#F3F3F3'};
  }
`

const IconButton = ({ className, title, size, variant = 'black', children, onClick }) => {
  return (
    <StyledButtonContainer size={size} title={title} className={className} variant={variant} onClick={onClick}>
      {children}
    </StyledButtonContainer>
  )
}

IconButton.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.element,
  onClick: PropTypes.func,
}

export default IconButton
