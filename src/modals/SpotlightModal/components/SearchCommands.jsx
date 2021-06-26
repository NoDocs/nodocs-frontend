import React from 'react'
import PropTypes from 'prop-types'
import { useRelayEnvironment } from 'react-relay'
import { useHistory } from 'react-router-dom'

import GraphIcon from 'assets/graph.svg'
import ImageIcon from 'assets/image.svg'
import usePortal from 'hooks/usePortal'
import FileUploaderButton from 'atoms/FileUploaderButton'
import SearchResultItem from './SearchResultItem'
import createAssetMutation from '../../../pages/Document/mutations/createAssetMutation'

const commands = [
  { id: 'graph', name: 'open graph', icon: <GraphIcon color="white" size={24} /> },
  { id: 'upload', name: 'upload image', icon: <ImageIcon color="white" size={24} /> },
]

const SearchCommands = ({ search }) => {
  const { openPortal, closePortal } = usePortal()
  const inputRef = React.useRef()
  const relayEnvironment = useRelayEnvironment()
  const history = useHistory()

  const handleCommandClick = command => () => {
    if (command.id === 'graph') {
      closePortal('spotlight-portal')
      openPortal({ name: 'graph-modal' })
      return
    }

    if (command.id === 'upload') {
      inputRef.current.click()
      return
    }
  }

  const handleFileUpload = (event) => {
    const [file] = event.target.files

    createAssetMutation
      .commit(relayEnvironment, {}, file)
      .then(({ createAsset: { neuron } }) => {
        closePortal()
        history.push(`?neuronId=${neuron.neuronId}`)
      })
  }

  return (
    <React.Fragment>
      {commands
        .filter(command => command.name.includes(search.toLowerCase()))
        .map(command => {
          const component = (
            <SearchResultItem
              key={command.id}
              icon={command.icon}
              label={command.name}
              onClick={handleCommandClick(command)}
            />
          )

          if (command.id.includes('upload')) {
            return (
              <FileUploaderButton
                key={command.id}
                onChange={handleFileUpload}
                trigger={component}
                ref={inputRef}
              />
            )
          }

          return component
        })}
    </React.Fragment>
  )
}

SearchCommands.propTypes = {
  search: PropTypes.string,
}

export default SearchCommands