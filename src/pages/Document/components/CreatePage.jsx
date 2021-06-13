import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import { graphql, useMutation } from 'react-relay'
import { useDispatch, useSelector } from 'react-redux'

import { documentActions } from 'logic/document'
import Input from 'atoms/Input'
import Typography from 'molecules/Typography'

const StyledCreatePageLabel = styled(Typography)`
  color: rgba(0,0,0,0.4);
  margin-top: 4px;
  margin-left: 4px;
  cursor: pointer;
`

const mutation = graphql`
  mutation CreatePageMutation($input: CreatePageInput!) {
    createPage(input: $input) {
      page {
        id
        title
        content
      }
    }
  }
`

const CreatePage = () => {
  const [showLabel, toggleShowLabel] = React.useState(true)
  const [createPage] = useMutation(mutation)
  const dispatch = useDispatch()
  const activeDocumentId = useSelector(state => state.getIn(['document', 'id']))

  const handleCreatePage = (event) => {
    if (event.keyCode === 13) {
      createPage({
        variables: {
          input: {
            title: event.target.value,
            documentId: activeDocumentId,
            pageId: shortid.generate(),
            content: JSON.stringify([{
              type: 'paragraph',
              id: shortid.generate(),
              children: [{ text: '' }] },
            ]),
          }
        },
        onCompleted: ({ createPage: { page } }) => {
          dispatch(documentActions.setActivePageId({ activePageId: page.id }))
          toggleShowLabel(true)
        },
        updater: store => {
          const page = store
            .getRootField('createPage')
            .getLinkedRecord('page')
          const document = store
            .getRoot()
            .getLinkedRecord('document', { id: activeDocumentId })
          const pages = document
            .getLinkedRecords('pages')
            .concat([page])

          document.setLinkedRecords(pages, 'pages')
        }
      })
    }
  }

  if (showLabel) {
    return (
      <StyledCreatePageLabel
        color="rgba(0,0,0,0.4)"
        variant="caption"
        onClick={() => toggleShowLabel(false)}
      >
        + Add page
      </StyledCreatePageLabel>
    )
  }

  return (
    <Input
      autoFocus
      onBlur={() => toggleShowLabel(true)}
      onKeyDown={handleCreatePage}
      style={{
        borderWidth: 1,
        paddingLeft: 8,
        borderColor: 'rgba(0,0,0,0.4)',
        borderRadius: '2px 8px 8px 2px',
      }}
    />
  )
}

CreatePage.propTypes = {
  onDone: PropTypes.func,
}

export default CreatePage
