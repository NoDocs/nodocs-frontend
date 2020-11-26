import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  height: 100%;
  width: 100%;
  transition: all 0.15s ease-out 0s;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  outline: none;
  border-radius: 3px;
  background-color: #fff;
  margin-bottom: 1px;

  :hover{
    background-color: #ccc;
  }
  :checked{
    background: #2196F3;
    border: none;
    &::before{
      height: 100%;
      width: 100%;
      position: absolute;
      content: '';
      background-image: url('../../src/assets/check.svg');
      background-repeat: no-repeat;
      background-position: center;
      display: inline-block;
      font-size: 15px;
      text-align: center;
      line-height: normal;
      background-size: 8px;
    }
  }
  :disabled {
    background-color: #d8d8d8;
    cursor: not-allowed;
  }
`

const Checkbox = ({ label, checked }) => {
  return(
    <>
      <StyledInput type="checkbox" checked={checked} />
      {label && <label>{label}</label>}
    </>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired
}

export default Checkbox
