import * as authActionTypes from './authActionTypes'

export const signIn = ({ id, fullName, email, token }) => ({
  type: authActionTypes.SIGN_IN,
  payload: {
    id,
    fullName,
    email,
    token,
  },
})
