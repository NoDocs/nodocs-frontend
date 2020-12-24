import { combineReducers } from 'redux-immutable'

import authReducer from './auth/authReducer'
import documentsReducer from './document/documentsReducer'
import sectionsReducer from './document/sectionsReducer'
import activeDocumentReducer from './document/activeDocumentReducer'
import componentsReducer from './component/componentsReducer'
import teamsReducer from './team/teamsReducer'
import activeTeamReducer from './team/activeTeamReducer'
import membersReducer from './team/membersReducer'
import groupsReducer from './groups/groupsReducer'
import notificationReducer from './notification/notificationReducer'
import companiesReducer from './company/companiesReducer'
import activeCompanyReducer from './company/activeCompanyReducer'

export default combineReducers({
  auth: authReducer,
  components: componentsReducer,
  notifications: notificationReducer,
  companies: companiesReducer,
  entities: combineReducers({
    documents: documentsReducer,
    sections: sectionsReducer,
    teams: teamsReducer,
    members: membersReducer,
    groups: groupsReducer,
  }),
  ui: combineReducers({
    activeDocument: activeDocumentReducer,
    activeTeam: activeTeamReducer,
    activeCompany: activeCompanyReducer,
  }),
})
