import * as teamActionTypes from './teamActionTypes'

export const putTeams = (teams) => ({
  type: teamActionTypes.PUT_TEAMS,
  payload: {
    teams,
  },
})

export const setActiveTeam = teamId => ({
  type: teamActionTypes.SET_ACTIVE_TEAM,
  payload: {
    teamId,
  },
})

export const initializeTeam = (team) => ({
  type: teamActionTypes.INITIALIZE_TEAM,
  payload: {
    team,
  },
})

export const createTeam = (team) => ({
  type: teamActionTypes.CREATE_TEAM,
  payload: {
    team,
  }
})

export const addMembers = ({ members, teamId }) => ({
  type: teamActionTypes.ADD_MEMBERS,
  payload: { members, teamId }
})

export const changeGroupBy = groupBy => ({
  type: teamActionTypes.CHANGE_GROUP_BY,
  payload: { groupBy }
})
