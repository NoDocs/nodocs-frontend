import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import history from 'utils/history'
import { teamSelectors } from 'logic/team'

import Table from 'molecules/Table'
import UserIcon from 'assets/userIcon.svg'

import TeamDescription from './TeamDescription'
import TeamHeader from './TeamHeader'

const NoDocsList = styled.ul`
    background: white;
    box-shadow: 0px 1px 4px rgba(0,0,0,0.15);
    border-radius: 10px;
    padding: 10px;
    list-style: none;
`

const ItemList = styled.li`
    background: white;
    border-radius: 10px;
    padding: 10px;
    list-style: none;
    cursor: pointer;

    &:nth-child(odd) {
      background: #F2F3F4;
    }
`

const StyledIcon = styled.div`
    display: inline-flex;
    width: 14px;
    height: 14px;
    margin: 0 0 0 10px;
    opacity: 0.2;
    background: url('https://res.cloudinary.com/nodocs/image/upload/v1604546702/icons/document_enclrx.svg');
    background-size: contain;
    background-repeat: no-repeat;
`

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

        <NoDocsList>
          {documents
            .map(document => (
              <ItemList key={document.get('id')} onClick={() => history.push(`/d/${document.get('id')}`)}>
                <StyledIcon/>
                <span>Document - {document.get('title')}</span>
              </ItemList>
            ))
            .toList()}
        </NoDocsList>
      </div>
    </React.Fragment>
  )
}

export default Team
