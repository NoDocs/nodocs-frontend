import React from 'react'
 
const useWithViewBox = ({ ref, width, height, size }) => {
  React.useLayoutEffect(() => {
    if (!width && !height && !size) return

    ref.current.setAttribute('width', `${width || size}px`)
    ref.current.setAttribute('height', `${height || size}px`)
    ref.current.setAttribute(
      'viewBox',
      [0, 0, width || size, height || size].join(' ')
    )
  })
}

export default useWithViewBox
