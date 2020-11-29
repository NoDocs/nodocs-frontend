import { combineReducers } from 'redux-immutable'

import authReducer from './auth/authReducer'
import documentsReducer from './document/documentsReducer'
import sectionsReducer from './document/sectionsReducer'
import activeDocumentReducer from './document/activeDocumentReducer'
import componentsReducer from './component/componentsReducer'
import teamsReducer from './team/teamsReducer'
import activeTeamReducer from './team/activeTeamReducer'

export default combineReducers({
  auth: authReducer,
  components: componentsReducer,
  entities: combineReducers({
    documents: documentsReducer,
    sections: sectionsReducer,
    teams: teamsReducer,
  }),
  ui: combineReducers({
    activeDocument: activeDocumentReducer,
    activeTeam: activeTeamReducer
  }),
})
