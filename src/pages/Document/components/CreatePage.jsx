import React from 'react'
import styled from 'styled-components'
import { graphql, useMutation } from 'react-relay'

import PlusIcon from 'assets/components/PlusIcon'
import Label from 'atoms/Label'
import Input from 'atoms/Input'
import shortid from 'shortid'
import { useDispatch, useSelector } from 'react-redux'
import { documentActions } from 'logic/document'

const StyledCreatePageContainer = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: 17px auto;
  margin-left: 20px;
  margin-top: 5px;
`

const mutation = graphql`
  mutation CreatePageMutation($input: CreatePageInput!) {
    createPage(input: $input) {
      page {
        id
      }
    }
  }
`

const CreatePage = () => {
  const [mode, updateMode] = React.useState('view')
  const [createPage] = useMutation(mutation)
  const dispatch = useDispatch()
  const activeSectionId = useSelector(state => state.getIn(['document', 'activeSectionId']))

  const handleCreatePage = (event) => {
    if (event.keyCode === 13) {
      createPage({
        variables: {
          input: {
            title: event.target.value,
            sectionId: activeSectionId,
            pageId: shortid.generate(),
            content: JSON.stringify([{ type: 'paragraph', id: shortid.generate(), children: [{ text: '' }] }]),
          }
        },
        onCompleted: ({ createPage: { page } }) => {
          dispatch(documentActions.setActivePageId({ activePageId: page.id }))
          updateMode('view')
        }
      })
    }
  }

  if (mode === 'view') {
    return (
      <StyledCreatePageContainer>
        <PlusIcon fill="black" size={14} />
        <Label hoverable color="black" onClick={() => updateMode('add')}>Create Page</Label>
      </StyledCreatePageContainer>
    )
  }

  return (
    <Input
      onBlur={() => updateMode('view')}
      onKeyDown={handleCreatePage}
    />
  )
}

export default CreatePage
