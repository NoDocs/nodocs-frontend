import React from 'react'
import { useSelector } from 'react-redux'

import { teamSelectors } from 'logic/team'

import Table from 'molecules/Table'
import UserIcon from 'assets/userIcon.svg'

import TeamDescription from './TeamDescription'
import TeamHeader from './TeamHeader'

const Team = () => {
  const team = useSelector(teamSelectors.selectTeam())
  const documents = useSelector(state => state.getIn(['entities', 'documents']))

  const loading = !team || !documents
  if (loading) return <div>Loading...</div>
  return (
    <React.Fragment>
      <TeamDescription name={team.get('name')} description={team.get('description')} />
      <div style={{ margin: '0 130px' }}>
        <TeamHeader team={team} />
        <Table
          proportions="38px 405px 1fr 1fr 1fr 1fr"
          headerTabs={[
            { content: '', position: '' },
            { content: 'Name', position: 'left' },
            { content: 'Subscribers', position: 'center' },
            { content: 'Linked to', position: 'center' },
            { content: 'Mentions', position: 'center' },
            { content: <img key="icon" src={UserIcon} />, }
          ]}
          data={documents}
        />
      </div>
    </React.Fragment>
  )
}

export default Team
