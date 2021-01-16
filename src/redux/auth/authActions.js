import * as authActionTypes from './authActionTypes'

export const signIn = ({ id, fullName, email, currentTeam, currentCompany, token, color }) => ({
  type: authActionTypes.SIGN_IN,
  payload: {
    id,
    fullName,
    email,
    token,
    color,
    currentTeam,
    currentCompany,
  },
})

export const register = ({ id, fullName, email, token, color }) => ({
  type: authActionTypes.REGISTER,
  payload: {
    id,
    fullName,
    email,
    token,
    color
  },
})

export const updateCurrentUserCompany = companyId => ({
  type: authActionTypes.UPDATE_CURRENT_COMPANY,
  payload: {
    companyId,
  }
})

export const updateCurrentUserTeam = teamId => ({
  type: authActionTypes.UPDATE_CURRENT_TEAM,
  payload: {
    teamId,
  }
})
