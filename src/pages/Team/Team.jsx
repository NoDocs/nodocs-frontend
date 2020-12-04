import React from 'react'
import { useSelector } from 'react-redux'

import { teamSelectors } from 'logic/team'

import TeamDescription from './TeamDescription'
import TeamHeader from './TeamHeader'
import Collection from './Collection'

const Team = () => {
  const collections = useSelector(teamSelectors.selectTeamProperty('collections'))

  return (
    <React.Fragment>
      <TeamDescription />
      <div style={{ margin: '0 130px' }}>
        <TeamHeader />

        {collections.map(collectionId => <Collection key={collectionId} id={collections} />)}
      </div>
    </React.Fragment>
  )
}

export default Team
