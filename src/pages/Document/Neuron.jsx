import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Editable, Slate } from 'slate-react'
import { useCursors } from 'slate-yjs'

import DeleteIcon from 'assets/delete.svg'
import UndoIcon from 'assets/undo.svg'
import RedoIcon from 'assets/redo.svg'
import IconButton from 'atoms/IconButton'
import FileUploaderButton from 'atoms/FileUploaderButton'
import Leaf from 'shared/Leaf'
import Popup from 'molecules/Popup'
import useNeuron from './hooks/useNeuron'

const StyledNeuronContainer = styled.div`
  background: #F2F3F4;
  padding: 2px;
  display: flex;
  border-radius: 0 5px 5px 0;
  border: 2px solid rgb(123 97 255 / 50%);
  position: relative;
`

const StyledPopup = styled(Popup)`
  padding: 0px;
  borderRadius: 5px 10px;
`

const StyledFileUploaderButton = styled(FileUploaderButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  background-color: white;
  display: inline-block;
`

const Neuron = React.forwardRef(({ id: neuronId, attributes }, ref) => {
  const {
    editorState,
    updateEditorState,
    editor,
    neuron,
    switchImage
  } = useNeuron({ neuronId })
  const { decorate } = useCursors(editor)

  const renderElement = React.useCallback(
    ({ attributes, element, children }) => {
      if (element.type === 'image') {
        return (
          <div
            contentEditable={false}
            style={{ position: 'relative', userSelect: 'none' }}
            {...attributes}
          >
            <StyledFileUploaderButton onChange={switchImage}>Switch image</StyledFileUploaderButton>
            <img
              src={`https://storage.googleapis.com/dev-nodocs-files/${neuron.file.url}`}
              alt={element.name}
              width="100%"
            />
          </div>
        )
      }

      return (
        <div
          data-node-id={element.id}
          style={{ position: 'relative', margin: 0 }}
          {...attributes}
        >
          {children}
        </div>
      )
    },
    [neuron]
  )

  const renderLeaf = React.useCallback(
    (props) => <Leaf {...props} />,
    [decorate]
  )

  return (
    <StyledPopup
      on="hover"
      name={`neuron-${neuronId}-options`}
      fullWidth={false}
      direction="TOP_RIGHT_INNER"
      trigger={(
        <StyledNeuronContainer
          isImported
          contentEditable={false}
          data-neuron-id={neuronId}
          ref={ref}
          {...attributes}
        >
          <Slate
            editor={editor}
            value={editorState}
            onChange={updateEditorState}
            renderLeaf={renderLeaf}
            decorate={decorate}
          >
            <Editable renderElement={renderElement} renderLeaf={renderLeaf} decorate={decorate} />
          </Slate>
        </StyledNeuronContainer>
      )}
    >
      {neuron.type === 'text' && (
        <React.Fragment>
          <IconButton title="Add empty line before" variant="white">
            <UndoIcon />
          </IconButton>

          <IconButton title="Add empty line after" variant="white">
            <RedoIcon />
          </IconButton>

          <IconButton variant="white">
            <DeleteIcon />
          </IconButton>
        </React.Fragment>
      )}
    </StyledPopup>
  )
})

Neuron.propTypes = {
  id: PropTypes.string,
  attributes: PropTypes.object,
}

export default Neuron
