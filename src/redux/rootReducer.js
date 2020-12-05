import { combineReducers } from 'redux-immutable'

import authReducer from './auth/authReducer'
import documentsReducer from './document/documentsReducer'
import sectionsReducer from './document/sectionsReducer'
import activeDocumentReducer from './document/activeDocumentReducer'
import pagesReducer from './document/pagesReducer'
import componentsReducer from './component/componentsReducer'
import teamsReducer from './team/teamsReducer'
import activeTeamReducer from './team/activeTeamReducer'
import membersReducer from './team/membersReducer'
import collectionsReducer from './team/collectionsReducer'
import notificationReducer from './notification/notificationReducer'

export default combineReducers({
  auth: authReducer,
  components: componentsReducer,
  notifications: notificationReducer,
  entities: combineReducers({
    documents: documentsReducer,
    sections: sectionsReducer,
    teams: teamsReducer,
    pages: pagesReducer,
    members: membersReducer,
    collections: collectionsReducer,
  }),
  ui: combineReducers({
    activeDocument: activeDocumentReducer,
    activeTeam: activeTeamReducer
  }),
})
