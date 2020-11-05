import io from 'socket.io-client'

import useSocket from './useSocket'

class Socket {
  static socket

  static disconnect = () => {
    Socket.socket?.disconnect()
  }

  static connect = () => {
    return new Promise((resolve, reject) => {
      if (Socket.socket) return

      const socket = io(process.env.BASE_API_URL, { reconnectionDelayMax: 10000 })

      socket.on('connect', (connected) => {
        Socket.socket = socket
        resolve()
      })

      socket.on('error', () => {
        reject()
      })
    })
  }
}

export { useSocket }

export default Socket
