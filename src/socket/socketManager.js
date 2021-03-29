import store from '../store'
import { componentActions } from '../redux/component'
import socketEvents from './socketEvents'

const onComponentUpdated = (dispatch) => (payload) => {
  dispatch(componentActions.putComponent(payload))
}

const handleSocketEvents = async (event, data) => {
  const state = store.getState()
  const activeCompany = state.getIn(['ui', 'activeCompany', 'id'])
  const isSameCompany = activeCompany === data.companyId

  const shouldIgnoreOtherCompany = event === socketEvents.TeamCreated
    || event === socketEvents.TagCreated
    || event === socketEvents.AttachTagToDocument

  if (isSameCompany && shouldIgnoreOtherCompany) return

  switch (event) {
    default:
  }
}

export {
  onComponentUpdated,
  handleSocketEvents
}
