import React from 'react'
import styled from 'styled-components'

import imageIcon from 'assets/image.svg'
import embedIcon from 'assets/embed.svg'
import tableIcon from 'assets/table.svg'
import linkIcon from 'assets/link.svg'
import graphIcon from 'assets/graph.svg'
import moreIcon from 'assets/more.svg'
import chatIcon from 'assets/chat.svg'
import subscribersIcon from 'assets/eyeopen.svg'
import IconButton from 'atoms/IconButton'

import CreateComponent from './components/CreateComponent'

const StyledDocumentPanelContainer = styled.div`
  height: 45px;
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
      <IconButton variant="white" icon={imageIcon} />
      <IconButton variant="white" icon={embedIcon} />
      <IconButton variant="white" icon={tableIcon} />
      <IconButton variant="white" icon={linkIcon} />
      <IconButton variant="white" icon={graphIcon} />
      <IconButton variant="white" icon={moreIcon} />

      <StyledSeparator />

      <CreateComponent />
      <IconButton variant="white" icon={chatIcon} />
      <IconButton variant="white" icon={subscribersIcon} />
    </StyledDocumentPanelContainer>
  )
}

export default DocumentPanel
