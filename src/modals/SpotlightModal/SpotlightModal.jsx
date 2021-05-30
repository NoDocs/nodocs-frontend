import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import debounce from 'lodash/debounce'

import withRenderPortal from 'hocs/withRenderPortal'
import FullScreenModal from 'molecules/FullScreenModal'

const StyledSpotlightContainer = styled.div`
  width: 600px;
  background: #222222;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.8);
  border-radius: 16px;
  height: 400px;
`

const StyledInput = styled.input`
  height: 56px;
  outline: none;
  width: 100%;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  padding: 12px 24px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: transparent;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-family: Inter;
`

const SpotlightModal = ({ closePortal }) => {
  const [search, updateSearch] = React.useState('')

  const fetchResults = (query) => {
    console.log('fetch results', query)
  }

  const debouncedSearch = React.useMemo(
    () => debounce(fetchResults, 1000),
    []
  )

  const onInputChange = ({ target: { value } }) => {
    updateSearch(value)
    debouncedSearch(value)
  }

  return (
    <FullScreenModal
      close={closePortal}
      overlayStyles={{ opacity: 0 }}
    >
      <StyledSpotlightContainer>
        <StyledInput
          placeholder="Type a command or search..."
          autoFocus
          value={search}
          onChange={onInputChange}
        />
      </StyledSpotlightContainer>
    </FullScreenModal>
  )
}

SpotlightModal.propTypes = {
  closePortal: PropTypes.func,
}

export default withRenderPortal(() => 'spotlight-portal')(SpotlightModal)
