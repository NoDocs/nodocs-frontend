import { Map, fromJS } from 'immutable'
import * as companyActionTypes from './companyActionTypes'

const initialState = new Map()

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case companyActionTypes.SET_COMPANIES: {
      const companies = action
        .payload
        .companies
        .reduce(
          (res, curr) => res.set(curr.id, fromJS(curr)),
          new Map()
        )

      return state.merge(companies)
    }

    default:
      return state
  }
}

export default companiesReducer
