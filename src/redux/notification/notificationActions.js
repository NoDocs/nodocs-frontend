import * as notificationActionTypes from './notificationActionTypes'

export const notify = ({ type, message }) => ({
  type: notificationActionTypes.NOTIFY,
  payload: {
    type,
    message
  }
})

export const deleteNotification = ({ id }) => ({
  type: notificationActionTypes.DELETE_NOTIFICATION,
  payload: {
    id
  }
})