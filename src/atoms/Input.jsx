import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
`

const StyledInput = styled.input`
  border: 2px solid #000000;;
  border-radius: 8px;
  padding: 7px 15px;
  ${props => props.hasIcon && 'padding-left: 40px'};
  outline: none;
  color: rgba(0, 0, 0, 0.5);
  width: 100%;
  box-sizing: border-box;
`

const Input = ({
  icon,
  placeholder,
  className,
  name,
  type,
  onChange,
  value,
}) => {
  const clonedIcon = icon && React.cloneElement(
    icon,
    {
      height: 18,
      style: { position: 'absolute', top: 10, left: 15 }
    }
  )

  return (
    <StyledInputContainer className={className}>
      <StyledInput
        hasIcon={Boolean(icon)}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />

      {clonedIcon}
    </StyledInputContainer>
  )
}

Input.propTypes = {
  icon: PropTypes.element,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
}

export default Input
