import React from 'react'
import { useSelector } from 'react-redux'

import Table from 'molecules/Table'
import UserIcon from 'assets/userIcon.svg'

import TeamDescription from './TeamDescription'
import TeamHeader from './TeamHeader'

const Team = () => {
  const documents = useSelector(state => state.getIn(['entities', 'documents']))

  return (
    <React.Fragment>
      <TeamDescription />
      <div style={{ margin: '0 130px' }}>
        <TeamHeader />

        {/* <Table
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
        /> */}
      </div>
    </React.Fragment>
  )
}

export default Team
