import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useMutation } from 'react-relay'

import Input from 'atoms/Input'
import shortid from 'shortid'
import { useDispatch, useSelector } from 'react-redux'
import { documentActions } from 'logic/document'

const mutation = graphql`
  mutation CreatePageMutation($input: CreatePageInput!) {
    createPage(input: $input) {
      page {
        id
      }
    }
  }
`

const CreatePage = ({ onDone }) => {
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
          onDone()
        }
      })
    }
  }

  return (
    <Input
      onBlur={onDone}
      onKeyDown={handleCreatePage}
    />
  )
}

CreatePage.propTypes = {
  onDone: PropTypes.func,
}

export default CreatePage
