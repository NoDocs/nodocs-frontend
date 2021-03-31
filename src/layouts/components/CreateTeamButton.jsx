import React from 'react'
import styled from 'styled-components'

import { PortalContext } from 'contexts'
import AddIcon from 'assets/add.svg'

const StyledButtonContainer = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 5px 15px 5px 5px;
  height: 40px;
  width: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 10px;
`

const CreateTeamButton = () => {
  const { openPortal } = React.useContext(PortalContext)

  return (
    <StyledButtonContainer onClick={() => openPortal({ name: 'create-team-modal' })}>
      <AddIcon color="rgba(255, 255, 255, 0.2)" size={18} />
    </StyledButtonContainer>
  )
}

export default CreateTeamButton
