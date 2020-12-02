import { Map } from 'immutable'
import * as teamActionTypes from './teamActionTypes'

const initialState = new Map()

const activeTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    case teamActionTypes.INITIALIZE_TEAM: {
      const { team } = action.payload

      return state
        .set('id', team.id)
    }

    case teamActionTypes.SET_ACTIVE_TEAM: {
      const { team } = action.payload

      return state
        .set('id', team.get('id'))
    }

    default:
      return state
  }
}

export default activeTeamReducer
