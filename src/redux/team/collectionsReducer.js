import { Map, fromJS, List } from 'immutable'

import * as teamActionTypes from './teamActionTypes'
import * as documentActionTypes from '../document/documentActionTypes'

const initialState = new Map()

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case teamActionTypes.INITIALIZE_TEAM: {
      const { team: { collections, otherCollections } } = action.payload
      const stateCollections = collections.reduce(
        (res, curr) => res.set(curr.id, fromJS({ ...curr, documents: new List() })),
        new Map()
      )
      const newState = otherCollections.reduce(
        (res, curr) => res.set(curr.id, fromJS({ ...curr, documents: new List() })),
        stateCollections
      )
      return newState
    }

    case documentActionTypes.PUT_DOCUMENTS: {
      return state.setIn(
        [action.payload.collectionId, 'documents'],
        new List(action.payload.documents.map(curr => curr.id))
      )
    }

    case teamActionTypes.CREATE_COLLECTION: {
      const { collection } = action.payload

      return state.set(
        collection.id,
        fromJS({ ...collection, documents: [] })
      )
    }

    default:
      return state
  }
}

export default collectionsReducer
