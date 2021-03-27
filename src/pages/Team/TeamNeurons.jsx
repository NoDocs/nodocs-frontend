import React from 'react'
import styled from 'styled-components'

import NeuronIcon from 'assets/neuron.svg'
import TeamSection from './TeamSection'

const StyledNeuronIcon = styled(NeuronIcon)`
  width: 24px;
  height: 24px;
`

const TeamNeurons = () => {
  return (
    <TeamSection Icon={<StyledNeuronIcon />} title="Neurons">
      Some content here
    </TeamSection>
  )
}

export default TeamNeurons
