import { createSelector } from 'reselect'

const authDomain = state => state.get('auth')

export const selectCurrUserProperty = property => createSelector(
  authDomain,
  auth => auth.get(property)
)
