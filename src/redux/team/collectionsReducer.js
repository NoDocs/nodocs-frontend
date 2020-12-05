import { Map, fromJS, List } from 'immutable'

import * as teamActionTypes from './teamActionTypes'
import * as documentActionTypes from '../document/documentActionTypes'

const initialState = new Map()

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case teamActionTypes.INITIALIZE_TEAM: {
      return action
        .payload
        .team
        .collections
        .reduce(
          (res, curr) => res.set(curr.id, fromJS({ ...curr, documents: new List() })),
          new Map()
        )
    }

    case documentActionTypes.PUT_DOCUMENTS: {
      return state.setIn(
        [action.payload.collectionId, 'documents'],
        new List(action.payload.documents.map(curr => curr.id))
      )
    }

    case teamActionTypes.CREATE_COLLECTION: {
      const { collection } = action.payload
      const newState = state.set(collection.id, fromJS(collection))
      return newState
    }

    default:
      return state
  }
}

export default collectionsReducer
