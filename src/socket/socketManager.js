
import store from '../store'
import { componentActions } from '../redux/component'
import socketEvents from './socketEvents'
import { teamActions } from 'logic/team'

const onComponentUpdated = (dispatch) => (payload) => {
  dispatch(componentActions.putComponent(payload))
}

const handleSocketEvents = (event, data) => {
  switch (event) {
    case socketEvents.TeamCreated:
      store.dispatch(teamActions.createTeam(data))
      break
  }
}

export {
  onComponentUpdated,
  handleSocketEvents
}
