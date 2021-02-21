import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import { useSelector, useDispatch } from 'react-redux'

import * as documentServices from 'services/document'
import { documentActions, documentSelectors } from 'logic/document'
import HoverableContainer from 'atoms/HoverableContainer'

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
`

const CreateSection = ({ onDone }) => {
  const [title, updateTitle] = React.useState('')

  const dispatch = useDispatch()
  const documentId = useSelector(documentSelectors.selectActiveDocumentId)

  const saveSection = (event) => {
    if (event.keyCode === 13) {
      documentServices
        .createSection({
          documentId,
          title,
          sectionId: shortid.generate(),
          content: JSON.stringify([{ type: 'paragraph', id: shortid.generate(), children: [{ text: '' }] }])
        })
        .then(({ data }) => {
          dispatch(documentActions.createSection(data))
          onDone()
        })
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
