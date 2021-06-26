import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StyledLoader from 'assets/loader-light.svg'
import withRenderPortal from 'hocs/withRenderPortal'
import useDebounce from 'hooks/useDebounce'
import FullScreenModal from 'molecules/FullScreenModal'
import SearchResults from './SearchResults'
import useSpotlightModal from './useSpotlightModal'
import SearchCommands from './components/SearchCommands'
import SearchIncludes from './components/SearchIncludes'

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

const StyledResultsContainer = styled.div`
  max-height: 240px;
  overflow: auto;
`

const StyledLoaderIcon = styled(StyledLoader)`
  margin-left: 18px;
`

const SpotlightModal = ({ closePortal }) => {
  const { formik, queryReference } = useSpotlightModal()
  const { value, handleChange } = useDebounce({
    initialValue: formik.values.search,
    interval: 500,
    service: debouncedValue => {
      if (!debouncedValue) {
        return
      }

      formik.setFieldValue('search', debouncedValue)
      formik.handleSubmit()
    },
  })

  return (
    <FullScreenModal
      close={closePortal}
      overlayStyles={{ opacity: 0 }}
    >
      <StyledSpotlightContainer>
        <StyledInput
          placeholder="Type a command or search..."
          autoFocus
          value={value}
          onChange={handleChange}
        />

        <SearchIncludes setFieldValue={formik.setFieldValue} values={formik.values} />

        <StyledResultsContainer>
          <SearchCommands search={value} />

          <React.Suspense fallback={<StyledLoaderIcon />}>
            {queryReference && <SearchResults queryReference={queryReference} />}
          </React.Suspense>
        </StyledResultsContainer>
      </StyledSpotlightContainer>
    </FullScreenModal>
  )
}

SpotlightModal.propTypes = {
  openPortal: PropTypes.func,
  closePortal: PropTypes.func,
}

export default withRenderPortal(() => 'spotlight-portal')(SpotlightModal)
