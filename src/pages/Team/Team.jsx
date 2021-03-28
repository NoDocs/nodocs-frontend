import React from 'react'
import styled from 'styled-components'

import { PortalContext } from 'contexts'
import Shortcut from 'atoms/Shortcut'
import TeamConfigurationBar from './TeamConfigurationBar'
import TeamContent from './TeamContent'
import shortid from 'shortid'
import { useHistory, useLocation } from 'react-router'
import { useMutation } from 'react-relay'
import { graphql } from 'graphql'

const StyledContentContainer = styled.div`
  margin: 0px 50px;
`

const Team = () => {
  const { openPortal } = React.useContext(PortalContext)
  const { search } = useLocation()
  const [createNeuron] = useMutation(graphql`
    mutation TeamMutation($input: CreateNeuronInput!) {
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
  `)
  const history = useHistory()

  React.useEffect(
    () => {
      const params = new URLSearchParams(search)

      if (params.get('neuronId')) {
        openPortal({ name: 'neuron-modal' })
      }
    },
    [search]
  )

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
    <React.Fragment>
      <StyledContentContainer>
        <TeamConfigurationBar />
        <TeamContent />
      </StyledContentContainer>

      <Shortcut
        name="open-team-invitation"
        hint="a"
        handler={() => openPortal({ name: 'invite-team-members' })}
      />

      <Shortcut
        name="open-neuron-modal"
        hint="d"
        handler={handleModalOpen}
      />
    </React.Fragment>
  )
}

export default Team
