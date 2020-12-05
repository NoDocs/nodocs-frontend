import * as authActionTypes from './authActionTypes'

export const signIn = ({ id, fullName, email, token, color }) => ({
  type: authActionTypes.SIGN_IN,
  payload: {
    id,
    fullName,
    email,
    token,
    color
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
