import { createSelector } from 'reselect'
import { List } from 'immutable'

const activeTeamDomain = state => state.getIn(['ui', 'activeTeam'])
const teamsDomain = state => state.getIn(['entities', 'teams'])
const membersDomain = state => state.getIn(['entities', 'members'])
const collectionsDomain = state => state.getIn(['entities', 'collections'])

export const selectActiveTeamId = createSelector(
  activeTeamDomain,
  domain => domain.get('id')
)

export const selectIsTeamLoaded = createSelector(
  [selectActiveTeamId, teamsDomain],
  (activeTeamId, teams) => Boolean(teams.getIn([activeTeamId, 'collections']))
)

export const selectTeamProperty = (property, getTeamId) => createSelector(
  [selectActiveTeamId, teamsDomain, (_, props) => props],
  (activeTeamId, teams, props) => {
    const teamId = getTeamId
      ? getTeamId(props)
      : activeTeamId

    return teams.getIn([teamId, property])
  }
)

export const selectFirstCollection = createSelector(
  [selectTeamProperty('collections')],
  collections => (collections || new List()).first(),
)

export const selectTeamMemberProperty = (property, memberId) => createSelector(
  [membersDomain],
  (members) => members.getIn([memberId, property])
)

export const selectCollectionProperty = (property, collectionId) => createSelector(
  [collectionsDomain],
  collections => collections.getIn([collectionId, property])
)
