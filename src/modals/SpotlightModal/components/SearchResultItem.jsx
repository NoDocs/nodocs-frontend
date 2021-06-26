import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Transforms } from 'slate'
import { useSlate, ReactEditor } from 'slate-react'
import { useRelayEnvironment } from 'react-relay'

import Typography from 'molecules/Typography'
import attachNeuronToDocument from '../../../pages/Document/mutations/attachNeuronToDocumentMutation'
import usePortal from 'hooks/usePortal'

const StyledItemContainer = styled.div`
  padding: 8px;
  padding-left: 16px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 24px auto;
  grid-column-gap: 8px;
  align-items: center;
  border-left: 2px solid transparent;

  &:hover,
  &:focus {
    outline: none;
    border-left: 2px solid white;
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${props => props.active && `
    border-left: 2px solid white;
    background-color: rgba(255, 255, 255, 0.1);
  `}
`

const SearchResultItem = ({ id, icon, label, onClick }) => {
  const { documentId } = useParams()
  const { closePortal } = usePortal()
  const environment = useRelayEnvironment()
  const editor = useSlate()

  const onKeyDown = async (event) => {
    if (event.keyCode === 13 && event.metaKey && documentId) {
      await attachNeuronToDocument.commit(environment, { documentId, neuronId: id })
      Transforms.insertNodes(editor, {
        type: 'neuron',
        id,
        children: [{ text: '' }],
      })
      ReactEditor.blur(editor)
      closePortal('spotlight-portal')
      return
    }

    if (event.keyCode === 13) {
      onClick(event)
    }
  }

  return (
    <StyledItemContainer tabIndex={0} onKeyDown={onKeyDown} onClick={onClick}>
      {icon}

      <Typography variant="caption" color="white">
        {label}
      </Typography>
    </StyledItemContainer>
  )
}

SearchResultItem.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.string,
  onClick: PropTypes.func,
}

export default SearchResultItem
