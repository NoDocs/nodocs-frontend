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

      const token = localStorage.getItem('token')
      const socket = io(`${process.env.BASE_API_URL}/company-f04bc600-c835-4022-9833-75a27cb74497`, {
        reconnectionDelayMax: 10000,
        transports: ['websocket'],
        secure: true,
        query: {
          token: token.startsWith('Bearer') ? token.slice(7) : token
        }
      })

      socket.on('connect', () => {
        Socket.socket = socket
        console.log("🚀 ~ file: index.js ~ line 31 ~ Socket ~ socket.on ~ socket", socket)
        socket.on('document-created', (ffff) => {
          console.log("🚀 ~ file: index.js ~ line 30 ~ Socket ~ socket.on ~ ffff", ffff)
        })
        socket.on('document-updated', (ffff) => {
          console.log("🚀 ~ file: index.js ~ line 30 ~ Socket ~ socket.on ~ ffff", ffff)
        })
        socket.on('team-created', (ffff) => {
          console.log("🚀 ~ file: index.js ~ line 30 ~ Socket ~ socket.on ~ ffff", ffff)
        })
        socket.on('document-created', (ffff) => {
          console.log("🚀 ~ file: index.js ~ line 30 ~ Socket ~ socket.on ~ ffff", ffff)
        })
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
