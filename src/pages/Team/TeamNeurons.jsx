import React from 'react'
import styled from 'styled-components'
import { graphql, useLazyLoadQuery } from 'react-relay'

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

const TeamNeurons = () => {
  const { me } = useLazyLoadQuery(currTeamQuery)
  const { neurons } = useLazyLoadQuery(neuronsQuery, { teamId: me.currentTeam.id })
  const history = useHistory()

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
