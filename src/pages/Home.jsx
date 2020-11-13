import React from 'react'
import shortid from 'shortid'
import { useSelector, useDispatch } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'

import * as documentServices from 'services/document'
import { documentActions } from 'logic/document'
import history from 'utils/history'

const GlobalStyles = createGlobalStyle`
  html {
    background: #F2F3F4;
    height: 100%;
    width: 100%;
    font-family: 'sans-serif', 'arial';
  }

  button {
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
    font-family: "Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 14px;
    height: 36px;
    letter-spacing: 0.25px;
    cursor: pointer;
    line-height: 16px;
    background: rgb(26, 115, 232);
    color: rgb(255, 255, 255);
    padding: 9px 16px 10px 12px;
    text-transform: capitalize;
    border: 1px solid transparent !important;
  }
`

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

const Logo = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  margin: 2% auto;
  background: url('https://res.cloudinary.com/nodocs/image/upload/v1604555084/logos/logolettersblack_qfyiie.svg');
  background-size: contain;
  background-repeat: no-repeat;
`

const Home = () => {
  const [creating, toggleCreating] = React.useState()

  const documents = useSelector(state => state.get('documents').map(curr => curr.get('id')))
  const userName = useSelector(state => state.getIn(['auth', 'fullName']))
  const dispatch = useDispatch()

  const createDocument = () => {
    toggleCreating()

    const params = {
      content: JSON.stringify([{
        type: 'paragraph',
        id: shortid.generate(),
        children: [{ text: '' }]
      }])
    }

    documentServices
      .createDocument(params)
      .then(response => {
        const { data } = response

        dispatch(documentActions.createDocument(data))
        history.push(`/d/${data.id}`)
      })
  }

  return (
    <React.Fragment>
      <GlobalStyles />
      <Logo/>
      <div>Welcome <b>{userName}</b> !!</div>

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

      <button disabled={creating} onClick={createDocument}>create document</button>
    </React.Fragment>
  )
}

export default Home
