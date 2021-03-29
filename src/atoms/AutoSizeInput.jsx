import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
  font-family: quicksand;
  font-weight: 300;
  text-align: left;
  line-height: 17px;
  font-size: 14px;
  border: none;
  outline: none;
  color: rgba(255,255,255,0.5);
  background-color: transparent;

  width: ${props => props.width}px;
`

const getInputWidth = (value) => {
  const span = document.createElement('span')
  const styles = `
    font-family: quicksand;
    font-weight: 300;
    text-align: left;
    line-height: 17px;
    font-size: 14px;
    display: inline-block;
  `
  span.setAttribute('style', styles)
  span.innerHTML = value

  document.body.appendChild(span)

  const width = parseFloat(window.getComputedStyle(span)
    .getPropertyValue('width')
    .replace('px', ''))

  console.log('width -> ', window.getComputedStyle(span).getPropertyValue('width'))

  // document.body.removeChild(span)

  return Math.max(width, 14)
}

const AutoSizeInput = ({ value, onChange, onBlur }) => {
  const [width, updateWidth] = React.useState(getInputWidth(value))

  const onInputChange = (event) => {
    onChange(event)
  }

  React.useEffect(
    () => {
      const newWidth = getInputWidth(value)
      updateWidth(newWidth)
    },
    [value]
  )

  return (
    <StyledInput
      value={value}
      width={width}
      onChange={onInputChange}
      onBlur={onBlur}
    />
  )
}

AutoSizeInput.propTypes = {
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
}

export default AutoSizeInput
