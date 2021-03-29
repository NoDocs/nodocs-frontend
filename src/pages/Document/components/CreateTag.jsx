import React from 'react'
import styled from 'styled-components'

import Input from 'atoms/Input'

const StyledForm = styled.form`
  max-width: 250px;
`

const CreateTag = () => {
  const [name, setName] = React.useState('')
  
  const handleCreateTag = (e) => {
    e.preventDefault()
    setName('')
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
