import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import withOpenPortal from 'hocs/withOpenPortal'

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
    : '#ECEFF1'};
  }
`

const IconButton = ({ title, size, variant = 'black', children, ...rest }) => {
  return (
    <StyledButtonContainer
      size={size}
      title={title}
      variant={variant}
      {...rest}
    >
      {children}
    </StyledButtonContainer>
  )
}

IconButton.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func,
}

export default withOpenPortal(IconButton)
