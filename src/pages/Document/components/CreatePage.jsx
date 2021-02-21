import React from 'react'
import styled from 'styled-components'

import PlusIcon from 'assets/components/PlusIcon'
import Label from 'atoms/Label'

const StyledCreatePageContainer = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: 17px auto;
  margin-left: 20px;
  margin-top: 5px;
`

const CreatePage = () => {
  const onCreate = () => {
    alert('TODO: create page')
  }

  return (
    <StyledCreatePageContainer>
      <PlusIcon fill="black" size={14} />
      <Label hoverable color="black" onClick={onCreate}>Create Page</Label>
    </StyledCreatePageContainer>
  )
}

export default CreatePage
