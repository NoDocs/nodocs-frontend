import React from 'react'
import { useMutation, graphql } from 'react-relay'
import { useHistory } from 'react-router-dom'
import shortid from 'shortid'

import Shortcut from 'atoms/Shortcut'

const mutation = graphql`
  mutation CreateNeuronShortcutMutation($input: CreateNeuronInput!) {
    createNeuron(input: $input) {
      clientMutationId
      neuron {
        id
        name
        neuronId
        content
      }
    }
  }
`

const CreateNeuronShortcut = () => {
  const history = useHistory()
  const [createNeuron] = useMutation(mutation)

  const handleModalOpen = async () => {
    createNeuron({
      variables: {
        input: {
          neuronId: shortid.generate(),
          content: JSON.stringify([{ type: 'paragraph', children: [{ text: '' }] }]),
          name: 'Untitled',
        }
      },
      onCompleted: ({ createNeuron: { neuron } }) => {
        history.push(`?neuronId=${neuron.neuronId}`)
      }
    })
  }

  return (
    <Shortcut
      name="open-neuron-modal"
      hint="d"
      handler={handleModalOpen}
    />
  )
}

export default CreateNeuronShortcut
