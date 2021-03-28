import React from 'react'
import shortid from 'shortid'

import history from 'utils/history'
import AddIcon from 'assets/add.svg'
import IconButton from 'atoms/IconButton'
import { graphql } from 'graphql'
import { useMutation } from 'react-relay'

const createDocumentMutation = graphql`
  mutation CreateDocumentMutation($input: CreateDocumentInput!) {
    createDocument(input: $input) {
      clientMutationId
      document {
        id
      }
    }
  }
`

const CreateDocument = () => {
  const [createDocument] = useMutation(createDocumentMutation)

  const addDocument = () => {
    const params = {
      name: 'Untitled',
      documentId: shortid.generate(),
      content: JSON.stringify([{
        type: 'paragraph',
        id: shortid.generate(),
        children: [{ text: '' }]
      }])
    }

    createDocument({
      variables: {
        input: params
      },
      onCompleted: ({ createDocument: { document } }) => {
        history.push(`/d/${document.id}`)
      }
    })
  }

  return (
    <IconButton onClick={addDocument}>
      <AddIcon color="white" />
    </IconButton>
  )
}

export default CreateDocument
