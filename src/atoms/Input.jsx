import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
`

const StyledInput = styled.input`
  border: 1px solid #000000;
  border-radius: 20px;
  padding: 7px 15px;
  ${props => props.hasIcon && 'padding-left: 40px'};
  outline: none;
  color: rgba(0, 0, 0, 0.5);
  width: 100%;
  box-sizing: border-box;
`

const Input = ({ icon, placeholder, name, type }) => {
  const clonedIcon = React.cloneElement(
    icon,
    {
      height: 18,
      style: { position: 'absolute', top: '50%', left: 15, transform: 'translate(0px, -50%)' }
    }
  )

  return (
    <StyledInputContainer>
      <StyledInput
        hasIcon={Boolean(icon)}
        placeholder={placeholder}
        name={name}
        type={type}
      />

      {clonedIcon}
    </StyledInputContainer>
  )
}

Input.propTypes = {
  icon: PropTypes.element,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
}

export default Input
