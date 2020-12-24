import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import * as tagServices from 'services/tag'
import Input from 'atoms/Input'

import { documentSelectors, documentActions } from 'logic/document'


const StyledForm = styled.form`
  max-width: 250px;
`

const CreateTag = () => {
  const [name, setName] = React.useState('')
  
  const dispatch = useDispatch()
  const documentId = useSelector(documentSelectors.selectActiveDocumentId)

  const handleCreateTag = (e) => {
    e.preventDefault()
    setName('')
    
    tagServices
      .createTag({ name, documentId })
      .then(({ data }) => dispatch(documentActions.attachTag({ tag: data, documentId })))
  }

  return (
    <StyledForm name='tagForm' onSubmit={handleCreateTag}>
      <Input
        color="black"
        onChange={e => setName(e.target.value)}
        value={name}
        placeHolder='Create Tag'
      />
    </StyledForm>
  )
}

export default CreateTag
