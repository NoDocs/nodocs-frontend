import * as memberActionTypes from './memberActionTypes'

export const putMembers = (members) => ({
  type: memberActionTypes.PUT_MEMBERS,
  payload: {
    members,
  },
})
