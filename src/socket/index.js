import io from 'socket.io-client'

import { handleSocketEvents } from './socketManager'
import socketEvents from './socketEvents'
import useSocket from './useSocket'

class Socket {
  static socket

  static disconnect = () => {
    Socket.socket?.disconnect()
  }

  static connect = (id, force) => {
    return new Promise((resolve, reject) => {
      if (Socket.socket && !force) return

      const token = localStorage.getItem('token')
      const socket = io(`${process.env.BASE_API_URL}/company-${id}`, {
        reconnectionDelayMax: 10000,
        transports: ['websocket'],
        secure: true,
        query: { token: token.startsWith('Bearer') ? token.slice(7) : token }
      })

      socket.on('connect', () => {
        Socket.socket = socket
        resolve()
      })

      socket.on('team-created', (data) => {
        handleSocketEvents(socketEvents.TeamCreated, data)
      })

      socket.on('error', () => {
        reject()
      })
    })
  }
}

export { useSocket }

export default Socket
