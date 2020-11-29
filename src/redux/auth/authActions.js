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
