import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import history from 'utils/history'
import Table from 'molecules/Table'

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

const Home = () => {
  const documents = useSelector(state => state.get('documents').map(curr => curr.get('id')))

  return (
    <React.Fragment>
      <TeamHeader />

      <Table
        proportions="auto 90px 80px 80px 100px"
        headerTabs={['Name', 'Subscribers', 'Linked to', 'Mentions', 'Assignees']}
      />

      <NoDocsList>
        {documents
          .map(documentId => (
            <ItemList key={documentId} onClick={() => history.push(`/d/${documentId}`)}>
              <StyledIcon/>
              <span>Document N{documentId}</span>
            </ItemList>
          ))
          .toList()}
      </NoDocsList>
    </React.Fragment>
  )
}

export default Home
