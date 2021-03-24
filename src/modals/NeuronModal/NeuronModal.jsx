import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import NeuronIcon from 'assets/neuron.svg'
import withRenderPortal from 'molecules/withRenderPortal'
import NeuronHeader from './NeuronHeader'

const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const StyledModalContainer = styled.div`
  width: 740px;
  display: flex;
  align-items: flex-start;
  height: 85%;
`

const StyledModal = styled.div`
  background-color: white;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 5px 25px 0px 0px;
  flex: 1;
  height: 100%;
  padding: 20px 30px;
`

const NeuronModal = () => {
  return ReactDOM.createPortal(
    <StyledOverlay>
      <StyledModalContainer>
        <NeuronIcon width={51} />

        <StyledModal>
          <NeuronHeader />
        </StyledModal>
      </StyledModalContainer>
    </StyledOverlay>,
    document.getElementById('portals')
  )
}

export default withRenderPortal(() => 'neuron-modal')(NeuronModal)
