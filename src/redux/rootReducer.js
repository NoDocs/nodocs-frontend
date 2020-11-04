import { combineReducers } from 'redux-immutable'

import authReducer from './auth/authReducer'
import documentsReducer from './document/documentsReducer'
import componentsReducer from './component/componentsReducer'

export default combineReducers({
  auth: authReducer,
  documents: documentsReducer,
  components: componentsReducer,
})
