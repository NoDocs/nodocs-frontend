import React from 'react'
import { useSelector } from 'react-redux'

import { teamSelectors } from 'logic/team'

import TeamDescription from './TeamDescription'
import TeamHeader from './TeamHeader'
import Collection from './Collection'
import CreateCollection from './CreateCollection'

const Team = () => {
  const collections = useSelector(teamSelectors.selectTeamProperty('collections'))
  const [newCollection, toggleNewCollection] = React.useState(false)
  return (
    <React.Fragment>
      <TeamDescription />
      <div style={{ margin: '0 130px' }}>
        <TeamHeader toggleNewCollection={toggleNewCollection} />
        {newCollection && <CreateCollection onDone={() => toggleNewCollection(false)} />}

        {collections.map(collectionId => <Collection key={collectionId} id={collectionId} />)}
      </div>
    </React.Fragment>
  )
}

export default Team
