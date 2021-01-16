import { fromJS, Map } from 'immutable'
import shortid from 'shortid'

import * as notificationActionTypes from './notificationActionTypes'

const initialState = new Map()

const notificationReducer = (state = initialState, action) => {
  switch(action.type) {

    case notificationActionTypes.NOTIFY: {
      const id = shortid()
      return state
        .set(
          id,
          fromJS({
            id,
            type: action.payload.type,
            message: action.payload.message
          })
        )
    }

    case notificationActionTypes.DELETE_NOTIFICATION: {
      return state
        .delete(action.payload.id)
    }

    default:
      return state
  }
}

export default notificationReducer
