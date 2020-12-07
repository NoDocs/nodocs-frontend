import React from 'react'
import PropTypes from 'prop-types'

const MentionIcon = ({ size, fill }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.5 9.375C8.53553 9.375 9.375 8.53553 9.375 7.5C9.375 6.46447 8.53553 5.625 7.5 5.625C6.46447 5.625 5.625 6.46447 5.625 7.5C5.625 8.53553 6.46447 9.375 7.5 9.375Z" stroke={fill} strokeWidth={0.7} />
      <path d="M10.2649 11.666C9.33667 12.282 8.22936 12.5704 7.11861 12.4854C6.00786 12.4005 4.9573 11.947 4.13362 11.1969C3.30994 10.4469 2.76033 9.4433 2.57199 8.34535C2.38364 7.24739 2.56736 6.11798 3.09399 5.13632C3.62061 4.15466 4.45998 3.37699 5.47891 2.92669C6.49784 2.47639 7.63797 2.37927 8.71838 2.65072C9.7988 2.92217 10.7576 3.54666 11.4427 4.42509C12.1278 5.30352 12.4999 6.38558 12.5 7.49958C12.5 8.65007 12.0834 9.58273 11.0418 9.58273C10.0002 9.58273 9.58358 8.65007 9.58358 7.49958V5.41642" stroke={fill} strokeWidth={0.7} />
    </svg>
  )
}

MentionIcon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
}

export default MentionIcon
