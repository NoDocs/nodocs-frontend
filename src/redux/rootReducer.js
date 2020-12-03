import { combineReducers } from 'redux-immutable'

import authReducer from './auth/authReducer'
import documentsReducer from './document/documentsReducer'
import sectionsReducer from './document/sectionsReducer'
import activeDocumentReducer from './document/activeDocumentReducer'
import pagesReducer from './document/pagesReducer'
import componentsReducer from './component/componentsReducer'
import teamsReducer from './team/teamsReducer'
import activeTeamReducer from './team/activeTeamReducer'
import teamMemberReducer from './member/membersReducer'

export default combineReducers({
  auth: authReducer,
  components: componentsReducer,
  entities: combineReducers({
    documents: documentsReducer,
    sections: sectionsReducer,
    teams: teamsReducer,
    pages: pagesReducer,
    members: teamMemberReducer
  }),
  ui: combineReducers({
    activeDocument: activeDocumentReducer,
    activeTeam: activeTeamReducer
  }),
})
