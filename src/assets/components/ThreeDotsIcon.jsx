import React from 'react'

const ThreeDotsIcon = (props) => {
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
        d="M12 10.125a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM17.625 19.875a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM6.375 19.875a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
        stroke="#000"
        strokeOpacity={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ThreeDotsIcon
