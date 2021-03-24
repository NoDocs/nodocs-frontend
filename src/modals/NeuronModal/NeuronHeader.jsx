import React from 'react'
import styled from 'styled-components'

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
  height: 30px;
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

        <StyledSeparator size={20} />

        <IconButton variant="white">
          <UndoIcon size={20} />
        </IconButton>

        <IconButton variant="white">
          <ChatIcon size={24} />
        </IconButton>

        <IconButton variant="white">
          <SubscribersIcon size={20} />
        </IconButton>
      </StyledActionsContainer>

      <StyledSharingContainer>
        <IconButton variant="white">
          <PlusIcon fill="black" size={18} />
        </IconButton>
      </StyledSharingContainer>
    </StyledHeaderContainer>
  )
}

export default NeuronHeader
