import { Map, fromJS, List } from 'immutable'
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

    case teamActionTypes.INITIALIZE_TEAM: {
      const { team } = action.payload

      return state.update(
        team.id,
        currTeam => currTeam
          .set('members', team.members.toList().map(member => member.get('id')))
      )
    }

    case teamActionTypes.CREATE_TEAM: {
      const { team } = action.payload
      const { id, members, name } = team
      const newState = state.set(id, fromJS({ id: id, members, name }))
      return newState
    }

    case teamActionTypes.SET_ACTIVE_TEAM: {
      const { teamId } = action.payload

      return state.update(teamId, (currTeam) =>
        currTeam
          .delete('groups')
          .delete('members')
      )
    }

    case teamActionTypes.ADD_MEMBERS: {
      const { members, teamId } = action.payload

      return state.updateIn(
        [teamId, 'members'],
        teamMembers => teamMembers
          .concat(new List(members.map(member => member.id)))
      )
    }

    default:
      return state
  }
}

export default teamsReducer
