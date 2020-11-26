import { combineReducers } from 'redux-immutable'

import authReducer from './auth/authReducer'
import documentsReducer from './document/documentsReducer'
import sectionsReducer from './document/sectionsReducer'
import activeDocumentReducer from './document/activeDocumentReducer'
import componentsReducer from './component/componentsReducer'

export default combineReducers({
  auth: authReducer,
  components: componentsReducer,
  entities: combineReducers({
    documents: documentsReducer,
    sections: sectionsReducer,
  }),
  ui: combineReducers({
    activeDocument: activeDocumentReducer,
  }),
})
