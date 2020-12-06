import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import * as teamService from 'services/team'
import { teamSelectors, teamActions } from 'logic/team'

import HoverableContainer from 'atoms/HoverableContainer'

const CreateContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 180px auto;
  margin-bottom: 20px;
`
const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
`

const CreateCollection = ({ onDone }) => {
  const dispatch = useDispatch()
  const teamId = useSelector(teamSelectors.selectTeamProperty('id'))
  const [name, setName] = React.useState('')

  const saveCollection = (event) => {
    if (event.keyCode === 13) {
      teamService
        .createCollection({
          teamId,
          name,
        })
        .then(({ data }) => {
          dispatch(teamActions.createCollection(data))
          onDone()
        })
    }
  }


  return (
    <CreateContainer>
      <HoverableContainer active variant="inverted">
        <StyledInput
          placeholder="Collection name"
          autoFocus
          onChange={event => setName(event.target.value)}
          value={name}
          onBlur={onDone}
          onKeyDown={saveCollection}
        />
      </HoverableContainer>
    </CreateContainer>
  )
}

CreateCollection.propTypes = {
  onDone: PropTypes.func
}

export default CreateCollection
