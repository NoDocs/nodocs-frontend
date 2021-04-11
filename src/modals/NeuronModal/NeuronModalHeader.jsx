import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import copyToClipboard from 'utils/copyToClipboard'
import AddTag from 'shared/AddTag'
import CopyIcon from 'assets/link.svg'
import IconButton from 'atoms/IconButton'
import { useDispatch } from 'react-redux'
import { notificationActions } from 'logic/notification'

const StyledHeaderContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 100px auto 100px;
  align-items: center;
`

const StyledActionsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledSharingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const NeuronModalHeader = ({ handleNeuronClose }) => {
  const { search } = useLocation()
  const dispatch = useDispatch()

  const copyNeuron = () => {
    copyToClipboard(`[[neuron=${new URLSearchParams(search).get('neuronId')}]]`)
    handleNeuronClose()
    dispatch(notificationActions.notify({
      type: 'success',
      message: 'Neuron reference copied to clipboard. Feel free to paste inside document'
    }))
  }

  return (
    <StyledHeaderContainer>
      <AddTag />

      <StyledActionsContainer />

      <StyledSharingContainer>
        <IconButton variant="white" onClick={copyNeuron}>
          <CopyIcon size={18} />
        </IconButton>
      </StyledSharingContainer>
    </StyledHeaderContainer>
  )
}

NeuronModalHeader.propTypes = {
  handleNeuronClose: PropTypes.func,
}

export default NeuronModalHeader
