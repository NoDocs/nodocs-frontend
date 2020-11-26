import React from 'react'
import PropTypes from 'prop-types'

const DragIcon = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 7a2 2 0 100-4 2 2 0 000 4zM8 7a2 2 0 100-4 2 2 0 000 4zM16 14a2 2 0 100-4 2 2 0 000 4zM8 14a2 2 0 100-4 2 2 0 000 4zM16 21a2 2 0 100-4 2 2 0 000 4zM8 21a2 2 0 100-4 2 2 0 000 4z"
        fill={props.fill}
      />
    </svg>
  )
}

DragIcon.propTypes = {
  fill: PropTypes.string
}

export default DragIcon
