import { teamActions } from 'logic/team'
import { documentActions } from 'logic/document'
import { notificationActions } from 'logic/notification'
import { companyActions } from 'logic/company'
import * as companyServices from 'services/company'

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
    case socketEvents.TeamCreated: {
      store.dispatch(teamActions.createTeam(data))
      break
    }

    case socketEvents.TeamMemberAdded: {
      if (!isSameCompany) {
        const { data: companies } = await companyServices.getCompanies()
        store.dispatch(companyActions.setCompanies(companies))
      }

      store.dispatch(notificationActions.notify({ type: 'notification', message: `You have been added to the team: ${data.name}` }))
      break
    }

    case socketEvents.TagCreated: {
      store.dispatch(documentActions.createTag({ tag: data }))
      break
    }

    case socketEvents.AttachTagToDocument: {
      store.dispatch(documentActions.attachTag({ documentId: data.document.id, tag: data.tag }))
      break
    }
  }
}

export {
  onComponentUpdated,
  handleSocketEvents
}
