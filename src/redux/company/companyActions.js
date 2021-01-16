import * as companyActionTypes from './companyActionTypes'

export const setCompanies = companies => ({
  type: companyActionTypes.SET_COMPANIES,
  payload: {
    companies,
  }
})

export const setActiveCompany = companyId => ({
  type: companyActionTypes.SET_ACTIVE_COMPANY,
  payload: {
    companyId,
  },
})
