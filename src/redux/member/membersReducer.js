import { Map, fromJS } from 'immutable'
import * as memberActionTypes from './memberActionTypes'

const initialState = new Map()

const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case memberActionTypes.PUT_MEMBERS: {
      const normalized = action
        .payload
        .members
        .reduce(
          (res, curr) => res.set(curr.id, fromJS(curr)),
          new Map()
        )

      return normalized
    }
  
    default:
      return state
  }
}

export default membersReducer
