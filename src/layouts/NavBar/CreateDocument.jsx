import React from 'react'
import shortid from 'shortid'
import { useDispatch } from 'react-redux'

import * as documentServices from 'services/document'
import history from 'utils/history'
import { documentActions } from 'logic/document'
import addIcon from 'assets/add.svg'
import IconButton from 'atoms/IconButton'

const CreateDocument = () => {
  const dispatch = useDispatch()

  const addDocument = () => {
    const params = {
      content: JSON.stringify([
        { type: 'page', id: shortid.generate(), children: [{ text: '' }] },
      ])
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
    <IconButton onClick={addDocument}>
      <img src={addIcon} />
    </IconButton>
  )
}

export default CreateDocument
