import { Map } from 'immutable'

import * as authActionTypes from './authActionTypes'

const initialState = new Map()

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.SIGN_IN:
      return state
        .set('id', action.payload.id)
        .set('fullName', action.payload.fullName)
        .set('email', action.payload.email)
        .set('token', action.payload.token)
        .set('color', action.payload.color)
        .set('currentTeamId', action.payload.currentTeam.id)
        .set('currentCompanyId', action.payload.currentCompany.id)

    case authActionTypes.REGISTER:
      return state
        .set('id', action.payload.id)
        .set('fullName', action.payload.fullName)
        .set('email', action.payload.email)
        .set('token', action.payload.token)
        .set('color', action.payload.color)

    default:
      return state
  }
}

export default authReducer
