import React from 'react'

const PlusIcon = ({ variant = 'standard' }) => (
  <svg
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.6875 7H12.3125" stroke={variant === 'standard' ? 'white' : 'rgba(0, 0, 0, 0.25)'} />
    <path d="M7.5 2.1875V11.8125" stroke={variant === 'standard' ? 'white' : 'rgba(0, 0, 0, 0.25)'} />
  </svg>
)

export default PlusIcon
