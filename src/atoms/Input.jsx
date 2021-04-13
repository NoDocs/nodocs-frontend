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

const StyledIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translate(0px, -50%);
  height: 18px;
`

const Input = ({
  icon,
  placeholder,
  className,
  name,
  type,
  onChange,
  value,
  ...rest
}) => {
  return (
    <StyledInputContainer className={className}>
      <StyledInput
        hasIcon={Boolean(icon)}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        {...rest}
      />

      {icon && (
        <StyledIconContainer>
          {icon}
        </StyledIconContainer>
      )}
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
