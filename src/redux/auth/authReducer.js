import { Map } from 'immutable'
import * as authActionTypes from './authActionTypes'

const initialState = new Map()

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.SIGN_IN:
      return initialState
        .set('id', action.payload.id)
        .set('fullName', action.payload.fullName)
        .set('email', action.payload.email)
        .set('token', action.payload.token)

    default:
      return state
  }
}

export default authReducer
