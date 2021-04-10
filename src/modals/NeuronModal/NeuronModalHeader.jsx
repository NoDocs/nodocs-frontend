import React from 'react'
import styled from 'styled-components'
import { useHistory, useLocation } from 'react-router-dom'

import { PortalContext } from 'contexts'
import copyToClipboard from 'utils/copyToClipboard'
import AddTag from 'shared/AddTag'
import PlusIcon from 'assets/components/PlusIcon'
import IconButton from 'atoms/IconButton'

const StyledHeaderContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 100px auto 100px;
  align-items: center;
`

const StyledActionsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledSharingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const NeuronHeader = () => {
  const { pathname, search } = useLocation()
  const { closePortal } = React.useContext(PortalContext)
  const history = useHistory()

  const copyNeuron = () => {
    copyToClipboard(`[[neuron=${new URLSearchParams(search).get('neuronId')}]]`)
    closePortal('neuron-modal')
    history.push(pathname)
  }

  return (
    <StyledHeaderContainer>
      <AddTag />

      <StyledActionsContainer />

      <StyledSharingContainer>
        <IconButton variant="white" onClick={copyNeuron}>
          <PlusIcon fill="black" size={18} />
        </IconButton>
      </StyledSharingContainer>
    </StyledHeaderContainer>
  )
}

export default NeuronHeader
