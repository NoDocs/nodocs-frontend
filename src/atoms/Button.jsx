import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid #FFFFFF;
  box-shadow: 0px 0px 12px rgba(53, 162, 241, 0.8);
  border-radius: 76px;
  padding: 7px 20px;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  font-family: Quicksand;
`

const Button = ({ className, onClick, children }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default Button
