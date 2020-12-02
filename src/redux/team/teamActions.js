import * as teamActionTypes from './teamActionTypes'

export const putTeams = (teams) => ({
  type: teamActionTypes.PUT_TEAMS,
  payload: {
    teams,
  },
})

export const initializeTeam = (team) => ({
  type: teamActionTypes.INITIALIZE_TEAM,
  payload: {
    team,
  },
})

export const setActiveTeam = (team) => ({
  type: teamActionTypes.SET_ACTIVE_TEAM,
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