import React from 'react'
import PropTypes from 'prop-types'

const ArrowDownIcon = ({ size, fill, ...rest }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 9 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M.75.625l3.75 3.75L8.25.625"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

ArrowDownIcon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
}

export default ArrowDownIcon