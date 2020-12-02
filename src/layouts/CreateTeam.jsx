import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import * as team from 'services/team'
import { teamActions } from 'logic/team'
import HoverableContainer from 'atoms/HoverableContainer'

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: #fff;
`

const CreateTeam = ({ onDone }) => {
  const [name, updateName] = React.useState('')

  const dispatch = useDispatch()

  const saveTeam = (event) => {
    if (event.keyCode === 13) {
      team
        .createTeam({ name })
        .then(({ data }) => {
          dispatch(teamActions.createTeam(data))
          onDone()
        })
    }
  }

  return (
    <HoverableContainer active>
      <StyledInput
        autoFocus
        onChange={event => updateName(event.target.value)}
        value={name}
        onBlur={onDone}
        onKeyDown={saveTeam}
      />
    </HoverableContainer>
  )
}

CreateTeam.propTypes = {
  onDone: PropTypes.func,
}

export default CreateTeam
