import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import NeuronIcon from 'assets/neuron.svg'
import FullScreenModal from 'molecules/FullScreenModal'
import withRenderPortal from 'hocs/withRenderPortal'
import LoadingNeuronModal from 'loadings/LoadingNeuronModal'
import NeuronModalHeader from './NeuronModalHeader'
import NeuronModalContent from './NeuronModalContent'

const StyledFullScreenModal = styled(FullScreenModal)`
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

const NeuronModal = ({ name, closePortal }) => {
  return (
    <StyledFullScreenModal containerStyles={{ justifyContent: 'flex-end' }} close={() => closePortal(name)}>
      <NeuronIcon size={50} />

      <StyledModal>
        <NeuronModalHeader />

        <React.Suspense fallback={<LoadingNeuronModal />}>
          <NeuronModalContent />
        </React.Suspense>
      </StyledModal>
    </StyledFullScreenModal>
  )
}

NeuronModal.propTypes = {
  name: PropTypes.string,
  closePortal: PropTypes.func,
}

export default withRenderPortal(() => 'neuron-modal')(NeuronModal)
