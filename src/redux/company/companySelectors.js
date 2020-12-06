import { createSelector } from 'reselect'

const companiesDomain = state => state.get('companies')

export const selectActiveCompanyId = state => state.getIn(['ui', 'activeCompany', 'id'])

export const selectCompanyProperty = (property, getCompanyId) => createSelector(
  [selectActiveCompanyId, companiesDomain, (_, props) => props],
  (activeCompanyId, companies, props) => {
    const companyId = getCompanyId
      ? getCompanyId(props)
      : activeCompanyId

    return companies.getIn([companyId, property])
  }
)
