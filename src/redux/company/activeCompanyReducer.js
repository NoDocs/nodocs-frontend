import { Map } from 'immutable'
import * as companyActionTypes from './companyActionTypes'

const initialState = new Map()

const activeCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case companyActionTypes.SET_ACTIVE_COMPANY: {
      return state.set('id', action.payload.companyId)
    }

    default:
      return state
  }
}

export default activeCompanyReducer
