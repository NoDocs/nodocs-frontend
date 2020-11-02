import { combineReducers } from 'redux-immutable'

import authReducer from './auth/authReducer'
import documentsReducer from './document/documentsReducer'

export default combineReducers({
  auth: authReducer,
  documents: documentsReducer,
})
