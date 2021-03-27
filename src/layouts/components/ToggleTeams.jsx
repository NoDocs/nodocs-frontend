import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PortalContext } from 'contexts'
import TeamsIcon from 'assets/teams.svg'
import AddIcon from 'assets/components/AddIcon'
import ArrowDownIcon from 'assets/components/ArrowDownIcon'
import Label from 'atoms/Label'
import IconButton from 'atoms/IconButton'

const StyledContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 32px auto 25px 25px;
  align-items: center;
  padding-left: 18px;
  height: 30px;
  cursor: pointer;
`

const ToggleTeams = ({ onClick }) => {
  const { openPortal } = React.useContext(PortalContext)

  return (
    <StyledContainer>
      <TeamsIcon size={24} />
      <Label color="active" onClick={onClick}>Teams</Label>

      <IconButton onClick={() => openPortal({ name: 'create-team-modal' })}>
        <AddIcon size={12} fill="#fff" />
      </IconButton>

      <IconButton onClick={onClick}>
        <ArrowDownIcon size={10} fill="#fff" />
      </IconButton>
    </StyledContainer>
  )
}

ToggleTeams.propTypes = {
  onClick: PropTypes.func,
}

export default ToggleTeams
