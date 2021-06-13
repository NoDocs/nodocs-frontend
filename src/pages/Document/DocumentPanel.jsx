import React from 'react'
import styled from 'styled-components'

import AddTag from 'shared/AddTag'
import ImageIcon from 'assets/image.svg'
import EmbedIcon from 'assets/embed.svg'
import OrderedListIcon from 'assets/ordered-list.svg'
import LinkIcon from 'assets/link.svg'
import ChatIcon from 'assets/chat.svg'
import IconButton from 'atoms/IconButton'

import Tags from './components/Tags'

const StyledDocumentPanelContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 300px auto 300px;
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

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const DocumentPanel = () => {
  return (
    <StyledDocumentPanelContainer>
      <div />

      <StyledFlexContainer>
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
      </StyledFlexContainer>

      <StyledFlexContainer>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Tags />
        </React.Suspense>
        <AddTag />
      </StyledFlexContainer>
    </StyledDocumentPanelContainer>
  )
}

export default DocumentPanel
