import React from 'react'
import PropTypes from 'prop-types'

const AddIcon = (props) => {
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
        d="M3.75 12h16.5M12 3.75v16.5"
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

AddIcon.propTypes = {
  fill: PropTypes.string
}
export default AddIcon
