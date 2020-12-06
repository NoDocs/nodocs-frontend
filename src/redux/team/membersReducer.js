import { Map, fromJS } from 'immutable'
import * as teamActionTypes from './teamActionTypes'

const initialState = new Map()

const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case teamActionTypes.INITIALIZE_TEAM: {
      const normalized = action
        .payload
        .team
        .members
        .reduce(
          (res, curr) => res.set(curr.user.id, fromJS(curr.user)),
          new Map()
        )

      return normalized
    }

    case teamActionTypes.ADD_MEMBERS: {
      const { members } = action.payload
      const normalized = members.reduce(
        (res, curr) => res.set(curr.member.id, fromJS(curr.member)),
        state
      )

      return normalized
    }

    default:
      return state
  }
}

export default membersReducer
