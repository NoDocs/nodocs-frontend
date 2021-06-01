import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
import { useHistory } from 'react-router-dom'
import { useRelayEnvironment } from 'react-relay'

import withRenderPortal from 'hocs/withRenderPortal'
import GraphIcon from 'assets/graph.svg'
import ImageIcon from 'assets/image.svg'
import FullScreenModal from 'molecules/FullScreenModal'
import Typography from 'molecules/Typography'
import FileUploaderButton from 'atoms/FileUploaderButton'
import createAssetMutation from '../../pages/Document/mutations/createAssetMutation'

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

const StyledSpotlightBodyContainer = styled.div`
  padding: 16px;
`

const StyledButtonsContainer = styled.div`
  margin-top: 8px;
  display: grid;
  justify-content: start;
  grid-auto-flow: column;
  grid-column-gap: 8px;
`

const StyledButton = styled.button`
  border: none;
  background-color: #222222;
  padding: 8px 16px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  border-radius: 16px;
  cursor: pointer;

  ${props => props.active && `
    box-shadow: inset 0px 0px 24px rgba(53, 162, 241, 0.8);
    border: 2px solid #18A0FB;
    color: #FFFFFF;
  `}
`

const StyledResultsContainer = styled.div`
  margin-top: 16px;
`

const StyledResultItem = styled.div`
  padding: 8px;
  padding-left: 16px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 24px auto;
  grid-column-gap: 8px;
  align-items: center;

  ${props => props.active && `
    border-left: 2px solid white;
    background-color: rgba(255, 255, 255, 0.1);
  `}
`

const SpotlightModal = ({ openPortal, closePortal }) => {
  const [search, updateSearch] = React.useState('')
  const [checked, updateChecked] = React.useState([])
  const [results, updateResults] = React.useState([])
  const [activeItemId, updateActiveItemId] = React.useState()
  const relayEnvironment = useRelayEnvironment()
  const history = useHistory()
  const inputRef = React.useRef()

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

    if (!value) {
      updateResults([])
      return
    }

    if (value.includes('graph')) {
      updateResults(results.concat([{
        id: 'open-graph',
        icon: <GraphIcon color="white" size={24} />,
        label: 'Open graph',
      }]))
      updateActiveItemId('open-graph')
    }

    if (value.includes('upload')) {
      updateResults(results.concat([{
        id: 'upload-image',
        icon: <ImageIcon color="white" size={24} />,
        label: 'Upload image',
      }]))
      updateActiveItemId('upload-image')
    }
  }

  const handleButtonClick = item => () => {
    updateChecked(prev => prev.includes(item)
      ? prev.filter(curr => curr !== item)
      : prev.concat([item]))
  }

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13 && search) {
      const item = results.find(curr => curr.id === activeItemId)
      handleItemClick(item)()  
    }
  }

  const handleItemClick = item => () => {
    if (item.id === 'open-graph') {
      closePortal()
      openPortal({ name: 'graph-modal' })
      return
    }

    if (item.id === 'upload-image') {
      inputRef.current.click()
      return
    }
  }

  const onChange = (event) => {
    const [file] = event.target.files

    createAssetMutation
      .commit(relayEnvironment, {}, file)
      .then(({ createAsset: { neuron } }) => {
        closePortal()
        history.push(`?neuronId=${neuron.neuronId}`)
      })
  }

  return (
    <FullScreenModal
      close={closePortal}
      overlayStyles={{ opacity: 0 }}
    >
      <StyledSpotlightContainer onKeyDown={handleKeyDown}>
        <StyledInput
          placeholder="Type a command or search..."
          autoFocus
          value={search}
          onChange={onInputChange}
        />

        <StyledSpotlightBodyContainer>
          <Typography variant="caption">I&apos;m looking for</Typography>

          <StyledButtonsContainer>
            <StyledButton
              active={checked.includes('image')}
              onClick={handleButtonClick('image')}
            >
              Images
            </StyledButton>

            <StyledButton
              active={checked.includes('video')}
              onClick={handleButtonClick('video')}
            >
              Videos
            </StyledButton>

            <StyledButton
              active={checked.includes('document')}
              onClick={handleButtonClick('document')}
            >
              Documents
            </StyledButton>

            <StyledButton
              active={checked.includes('component')}
              onClick={handleButtonClick('component')}
            >
              Components
            </StyledButton>
          </StyledButtonsContainer>
        </StyledSpotlightBodyContainer>

        <StyledResultsContainer>
          {results.map(item => {
            const component = (
              <StyledResultItem
                key={item.id}
                onClick={handleItemClick(item)}
                active={activeItemId === item.id}
              >
                {item.icon}
  
                <Typography variant="caption" color="white">
                  {item.label}
                </Typography>
              </StyledResultItem>
            )

            return item.id.includes('upload')
              ? <FileUploaderButton key={item.id} onChange={onChange} trigger={component} ref={inputRef} />
              : component
          })}
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
