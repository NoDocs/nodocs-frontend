import { Map, fromJS } from 'immutable'
import * as teamActionTypes from './teamActionTypes'

const initialState = new Map()

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case teamActionTypes.INITIALIZE_TEAM: {
      return action
        .payload
        .team
        .collections
        .reduce(
          (res, curr) => res.set(curr.id, fromJS(curr)),
          new Map()
        )
    }

    default:
      return state
  }
}

export default collectionsReducer
