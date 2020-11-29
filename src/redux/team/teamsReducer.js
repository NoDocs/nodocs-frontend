import { Map, fromJS } from 'immutable'
import * as teamActionTypes from './teamActionTypes'

const initialState = new Map()

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case teamActionTypes.PUT_TEAMS: {
      const normalized = action
        .payload
        .teams
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

export default teamsReducer
