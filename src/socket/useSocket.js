import { useCallback, useEffect } from 'react'

import Socket from './index'

const useSocket = (event, action) => {
  const send = useCallback((payload, cb) => {
    Socket.socket.emit(event, payload)
    if (cb) cb()
  }, [event])

  useEffect(() => {
    if (!action) return

    Socket.socket.on(event, action)

    return () => Socket.socket.off(event, action)
  }, [action, event])

  return {
    send
  }
}

export default useSocket