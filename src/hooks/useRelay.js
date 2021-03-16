import React from 'react'
import { ReactRelayContext } from 'react-relay'

const useRelay = () => {
  return React.useContext(ReactRelayContext)
}

export default useRelay
