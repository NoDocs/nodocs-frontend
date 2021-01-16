import React from 'react'
import PropTypes from 'prop-types'

const PlusIcon = ({ fill, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.6875 7H12.3125" stroke={fill || 'rgba(0, 0, 0, 0.25)'} />
    <path d="M7.5 2.1875V11.8125" stroke={fill || 'rgba(0, 0, 0, 0.25)'} />
  </svg>
)

PlusIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
}

export default PlusIcon
