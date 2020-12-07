import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import teamsIcon from 'assets/teams.svg'
import AddIcon from 'assets/components/AddIcon'
import ArrowDownIcon from 'assets/components/ArrowDownIcon'
import history from 'utils/history'
import Label from 'atoms/Label'
import IconButton from 'atoms/IconButton'

const StyledContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 32px auto 25px 25px;
  align-items: center;
  padding-left: 18px;
  height: 30px;
`

const ToggleTeams = ({ onClick }) => {
  return (
    <StyledContainer>
      <img src={teamsIcon} height={24} alt="teams" />
      <Label color="active">Teams</Label>

      <IconButton onClick={() => history.push('/create-team')}>
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
