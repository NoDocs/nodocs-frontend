import React from 'react'

const useIsMounted = () => {
  const [isMounted, toggleIsMounted] = React.useState(true)

  React.useEffect(
    () => () => { toggleIsMounted(false) },
    []
  )

  return {
    isMounted,
  }
}

export default useIsMounted
