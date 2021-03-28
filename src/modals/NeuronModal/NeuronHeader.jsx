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
        <IconButton size={20} variant="light">
          <TextStylingIcon />
        </IconButton>

        <IconButton size={20} variant="light">
          <SynapsesIcon />
        </IconButton>

        <IconButton size={20} variant="light">
          <SimilarityIcon />
        </IconButton>

        <StyledSeparator />

        <IconButton size={20} variant="white">
          <UndoIcon />
        </IconButton>

        <IconButton size={20} variant="white">
          <ChatIcon />
        </IconButton>

        <IconButton size={20} variant="white">
          <SubscribersIcon />
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
