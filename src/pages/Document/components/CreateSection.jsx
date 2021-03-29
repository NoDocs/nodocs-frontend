import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HoverableContainer from 'atoms/HoverableContainer'

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
`

const CreateSection = ({ onDone }) => {
  const [title, updateTitle] = React.useState('')

  const saveSection = (event) => {
    if (event.keyCode === 13) {
      // Create Doc
    }
  }

  return (
    <HoverableContainer active variant="inverted">
      <StyledInput
        autoFocus
        onChange={event => updateTitle(event.target.value)}
        value={title}
        onBlur={onDone}
        onKeyDown={saveSection}
      />
    </HoverableContainer>
  )
}

CreateSection.propTypes = {
  onDone: PropTypes.func,
}

export default CreateSection
