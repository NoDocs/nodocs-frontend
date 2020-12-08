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
          .set('collections', new List(team.collections.map(collection => collection.id)))
          .set('members', new List(team.members.map(member => member.user.id)))
      )
    }

    case teamActionTypes.CREATE_TEAM: {
      const { team } = action.payload
      const { id, members, name } = team
      const newState = state.set(id, fromJS({ id: id, members, name }))
      return newState
    }

    case teamActionTypes.CREATE_COLLECTION: {
      const { collection } = action.payload
      const newState = state.update(
        collection.team.id,
        currTeam => currTeam
          .set('collections', currTeam.get('collections').push(collection.id))
      )
      return newState
    }

    case teamActionTypes.SET_ACTIVE_TEAM: {
      const { teamId } = action.payload

      return state.update(teamId, (currTeam) =>
        currTeam
          .delete('members')
          .delete('collections')
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
