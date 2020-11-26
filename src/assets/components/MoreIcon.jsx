import React from 'react'
import PropTypes from 'prop-types'

const MoreIcon = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 14a2 2 0 100-4 2 2 0 000 4zM19 14a2 2 0 100-4 2 2 0 000 4zM5 14a2 2 0 100-4 2 2 0 000 4z"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={props.fillLines}
    />
  </svg>
)

MoreIcon.propTypes = {
  fillLines: PropTypes.string
}

export default MoreIcon
