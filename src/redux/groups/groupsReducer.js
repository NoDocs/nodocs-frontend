import { List, Map } from 'immutable'

import * as groupActionTypes from './groupActionTypes'
import * as documentTypes from '../document/documentActionTypes'

const groupsReducer = (state = new Map(), action) => {
  switch (action.type) {
    case documentTypes.PUT_DOCUMENTS: {
      const { payload } = action

      if (!payload.groupId) return state

      return state.setIn(
        [payload.groupId, 'documents'],
        new List(payload.documents.map(doc => doc.id))
      )
    }

    case groupActionTypes.INITIALIZE_GROUPS: {
      const { payload } = action

      return payload.groups.map(curr => curr.set('documents', new List()))
    }

    default:
      return state
  }
}

export default groupsReducer
