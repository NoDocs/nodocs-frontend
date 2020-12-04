import { Map } from 'immutable'
import * as teamActionTypes from './teamActionTypes'

const initialState = new Map()

const activeTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    case teamActionTypes.SET_ACTIVE_TEAM: {
      return state.set('id', action.payload.teamId)
    }

    default:
      return state
  }
}

export default activeTeamReducer
