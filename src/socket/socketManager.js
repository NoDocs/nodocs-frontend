
import store from '../store'
import { componentActions } from '../redux/component'
import socketEvents from './socketEvents'
import { teamActions } from 'logic/team'
import { notificationActions } from 'logic/notification'

const onComponentUpdated = (dispatch) => (payload) => {
  dispatch(componentActions.putComponent(payload))
}

const handleSocketEvents = (event, data) => {
  const state = store.getState()
  const activeCompany = state.getIn(['ui', 'activeCompany', 'id'])
  const isSameCompany = activeCompany === data.companyId
  switch (event) {
    case socketEvents.TeamCreated:
      if (isSameCompany) {
        store.dispatch(teamActions.createTeam(data))
      }
      break
    case socketEvents.TeamMemberAdded:
      store.dispatch(notificationActions.notify({ type: 'notification', message: `You have been added to the team: ${data.name}` }))
      break

  }
}

export {
  onComponentUpdated,
  handleSocketEvents
}
