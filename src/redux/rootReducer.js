import { combineReducers } from 'redux-immutable'

import authReducer from './auth/authReducer'

export default combineReducers({
  auth: authReducer,
})
