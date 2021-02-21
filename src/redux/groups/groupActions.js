import * as groupActionsTypes from './groupActionTypes'

export const initializeGroup = groups => ({
  type: groupActionsTypes.INITIALIZE_GROUPS,
  payload: { groups },
})