import React from 'react'
import styled from 'styled-components'
import { ConnectionHandler, graphql, useLazyLoadQuery, useSubscription } from 'react-relay'

import NeuronIcon from 'assets/neuron.svg'
import DocumentElement from 'molecules/DocumentElement'
import TeamSection from './TeamSection'
import { useHistory } from 'react-router'

const StyledNeuronIcon = styled(NeuronIcon)`
  width: 24px;
  height: 24px;
`

const currTeamQuery = graphql`
  query TeamNeuronsMeQuery {
    me {
      currentTeam {
        id
      }
    }
  }
`

const neuronsQuery = graphql`
  query TeamNeuronsNeuronsQuery ($teamId: String!) {
    neurons(first: 2147483647, teamId: $teamId) @connection(key: "Team_neurons") {
      __id
      edges {
        node {
          id
          neuronId
          name
          createdAt (format: "MMM D")
          owner {
            id
            avatar
            color
            fullName
          }
        }
      }
    }
  }
`

const neuronCreatedSubscription = graphql`
  subscription TeamNeuronsSubscription($input: CreateNeuronSubscriptionInput!) {
    createNeuron(input: $input) {
      neuron {
        id
        name
        createdAt (format: "MMM D")
        owner {
          id
          avatar
          color
          fullName
        }
      }
      clientSubscriptionId
    }
  }
`

const TeamNeurons = () => {
  const { me } = useLazyLoadQuery(currTeamQuery)
  const { neurons } = useLazyLoadQuery(neuronsQuery, { teamId: me.currentTeam.id })
  const history = useHistory()

  useSubscription({
    subscription: neuronCreatedSubscription,
    variables: { input: {} },
    updater: store => {
      console.log('heree !!!')
      const neuron = store
        .getRootField('createNeuron')
        .getLinkedRecord('neuron')

      const neuronsConnection = store.get(neurons.__id)
      const edge = ConnectionHandler.createEdge(store, neuronsConnection, neuron)
      ConnectionHandler.insertEdgeAfter(neuronsConnection, edge)
    }
  })

  const onNeuronClick = (neuron) => () => {
    history.push(`?neuronId=${neuron.neuronId}`)
  }

  return (
    <TeamSection Icon={<StyledNeuronIcon />} title="Neurons">
      {neurons.edges.map(({ node: neuron }) => (
        <DocumentElement
          key={neuron.id}
          name={neuron.name}
          members={[neuron.owner]}
          authorName={neuron.owner.fullName}
          createdAt={neuron.createdAt}
          onClick={onNeuronClick(neuron)}
        />
      ))}
    </TeamSection>
  )
}

export default TeamNeurons
