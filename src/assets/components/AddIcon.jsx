import React from 'react'
import PropTypes from 'prop-types'

const AddIcon = ({ size, fill, ...rest }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M3.75 12h16.5M12 3.75v16.5"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  )
}

AddIcon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string
}
export default AddIcon
