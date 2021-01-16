import { createSelector } from 'reselect'
import { List } from 'immutable'

const activeTeamDomain = state => state.getIn(['ui', 'activeTeam'])
const teamsDomain = state => state.getIn(['entities', 'teams'])
const membersDomain = state => state.getIn(['entities', 'members'])

export const selectActiveTeamId = createSelector(
  activeTeamDomain,
  domain => domain.get('id')
)

export const selectActiveTeamGroupBy = createSelector(
  activeTeamDomain,
  domain => domain.get('groupBy')
)

export const selectIsTeamLoaded = createSelector(
  [selectActiveTeamId, teamsDomain],
  (activeTeamId, teams) => Boolean(teams.getIn([activeTeamId, 'members']))
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
  [selectTeamProperty('groups')],
  groups => (groups || new List()).first(),
)

export const selectTeamMemberProperty = (property, memberId) => createSelector(
  [membersDomain],
  (members) => members.getIn([memberId, property])
)
