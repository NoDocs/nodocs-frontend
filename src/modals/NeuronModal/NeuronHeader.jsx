import React from 'react'
import styled from 'styled-components'
import { useHistory, useLocation, useParams } from 'react-router-dom'

import { PortalContext } from 'contexts'
import copyToClipboard from 'utils/copyToClipboard'
import AddTag from 'shared/AddTag'
import TextStylingIcon from 'assets/textstyling.svg'
import SynapsesIcon from 'assets/synapses.svg'
import SimilarityIcon from 'assets/similarity.svg'
import ChatIcon from 'assets/chat.svg'
import SubscribersIcon from 'assets/eyeopen.svg'
import UndoIcon from 'assets/undo.svg'
import PlusIcon from 'assets/components/PlusIcon'
import IconButton from 'atoms/IconButton'

const StyledHeaderContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 100px auto 100px;
  align-items: center;
`

const StyledSeparator = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.5);
  height: 25px;
  margin-left: 5px;
  margin-right: 5px;
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
  const history = useHistory()
  const { closePortal } = React.useContext(PortalContext)

  const copyNeuron = () => {
    copyToClipboard(`[[neuron=${new URLSearchParams(search).get('neuronId')}]]`)
    closePortal('neuron-modal')
    history.push(pathname)
  }

  return (
    <StyledHeaderContainer>
      <AddTag />

      <StyledActionsContainer>
        <IconButton variant="light">
          <TextStylingIcon size={20} />
        </IconButton>

        <IconButton variant="light">
          <SynapsesIcon size={20} />
        </IconButton>

        <IconButton variant="light">
          <SimilarityIcon size={20} />
        </IconButton>

        <StyledSeparator />

        <IconButton variant="white">
          <UndoIcon size={20} />
        </IconButton>

        <IconButton variant="white">
          <ChatIcon size={20} />
        </IconButton>

        <IconButton variant="white">
          <SubscribersIcon size={26} />
        </IconButton>
      </StyledActionsContainer>

      <StyledSharingContainer>
        <IconButton variant="white" onClick={copyNeuron}>
          <PlusIcon fill="black" size={18} />
        </IconButton>
      </StyledSharingContainer>
    </StyledHeaderContainer>
  )
}

export default NeuronHeader
