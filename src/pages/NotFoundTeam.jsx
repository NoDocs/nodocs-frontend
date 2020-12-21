import React from 'react'
import { useSelector } from 'react-redux'

import { teamSelectors } from 'logic/team'

const NotFoundTeam = () => {
  const creator = useSelector(teamSelectors.selectTeamProperty('creator'))
  const ownerEmail = creator && creator.get('email')
  return (
    <div>
      <h1>You are not part of this Team</h1>
      <p>Please contact: {ownerEmail && ownerEmail}</p>
    </div>
  )
}

export default NotFoundTeam
