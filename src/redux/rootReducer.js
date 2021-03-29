import { combineReducers } from 'redux-immutable'

import { documentReducer } from './document'
import { notificationReducer } from './notification'

export default combineReducers({
  document: documentReducer,
  notifications: notificationReducer,
})
