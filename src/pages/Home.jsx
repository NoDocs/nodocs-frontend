import React from 'react'
import shortid from 'shortid'
import { useSelector, useDispatch } from 'react-redux'

import * as documentServices from 'services/document'
import { documentActions } from 'logic/document'
import history from 'utils/history'

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
      <div>Welcome <b>{userName}</b> !!</div>

      <ul>
        {documents
          .map(documentId => (
            <li key={documentId} onClick={() => history.push(`/d/${documentI}`)}>
              <span>Document N{documentId}</span>
            </li>
          ))
          .toList()}
      </ul>

      <button disabled={creating} onClick={createDocument}>create document</button>
    </React.Fragment>
  )
}

export default Home
