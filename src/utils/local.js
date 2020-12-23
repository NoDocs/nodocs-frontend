export const setTeamGroupBy = (teamId, newGroupBy) => {
  const stringified = localStorage.getItem('groupBys')
  const parsed = stringified
    ? JSON.parse(stringified)
    : {}

  const updated = { ...parsed, [teamId]: newGroupBy }

  localStorage.setItem('groupBys', JSON.stringify(updated))
}

export const getTeamGroupBy = (teamId) => {
  const stringified = localStorage.getItem('groupBys')
  const parsed = stringified
    ? JSON.parse(stringified)
    : {}

  if (!parsed[teamId]) {
    setTeamGroupBy(teamId, 'members')
    return 'members'
  }

  return parsed[teamId]
}
