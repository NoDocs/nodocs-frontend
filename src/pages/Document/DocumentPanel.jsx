import React from 'react'
import styled from 'styled-components'

import ImageIcon from 'assets/image.svg'
import EmbedIcon from 'assets/embed.svg'
import OrderedListIcon from 'assets/ordered-list.svg'
import LinkIcon from 'assets/link.svg'
import SimilarityIcon from 'assets/similarity.svg'
import SynapsesIcon from 'assets/synapses.svg'
import ChatIcon from 'assets/chat.svg'
import subscribersIcon from 'assets/eyeopen.svg'
import IconButton from 'atoms/IconButton'

import CreateComponent from './components/CreateComponentButton'
import CreateTag from './components/CreateTag'

const StyledDocumentPanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #CFD8DC;
  grid-area: document-panel;
`

const StyledSeparator = styled.div`
  width: 1px;
  background-color: rgba(0, 0, 0, 0.15);
  margin: 0px 5px;
  height: 30px;
`

const DocumentPanel = () => {
  return (
    <StyledDocumentPanelContainer>
      <IconButton variant="white">
        <OrderedListIcon size={24} />
      </IconButton>

      <IconButton variant="white">
        <ImageIcon size={24} />
      </IconButton>

      <IconButton variant="white">
        <EmbedIcon size={24} />
      </IconButton>

      <IconButton variant="white">
        <LinkIcon size={24} />
      </IconButton>

      <StyledSeparator />

      <IconButton variant="white">
        <ChatIcon size={24} />
      </IconButton>
    </StyledDocumentPanelContainer>
  )
}

export default DocumentPanel
