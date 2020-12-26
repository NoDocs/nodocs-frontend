import * as groupActionsTypes from './groupActionTypes'

export const reInitializeGroups = ({ groups }) => ({
  type: groupActionsTypes.RE_INITIALIZE_GROUPS,
  payload: { groups },
})