import { createSelector } from 'reselect'

const activeTeamDomain = state => state.getIn(['ui', 'activeTeam'])
const teamsDomain = state => state.getIn(['entities', 'teams'])

export const selectActiveTeamId = createSelector(
  activeTeamDomain,
  domain => domain.get('id')
)

export const selectTeam = (getTeamId) => createSelector(
  [selectActiveTeamId, teamsDomain, (_, props) => props],
  (activeTeamId, teams, props) => {
    const teamId = getTeamId
      ? getTeamId(props)
      : activeTeamId

    return teams.getIn([teamId])
  }
)

