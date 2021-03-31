import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Editable, ReactEditor, Slate } from 'slate-react'
import { useCursors } from 'slate-yjs'

import DeleteIcon from 'assets/delete.svg'
import UndoIcon from 'assets/undo.svg'
import RedoIcon from 'assets/redo.svg'
import IconButton from 'atoms/IconButton'
import Leaf from 'shared/Leaf'
import Popup from 'molecules/Popup'
import useNeuron from './hooks/useNeuron'

const StyledNeuronContainer = styled.div`
  background: #F2F3F4;
  padding: 2px;
  display: flex;
  border-radius: 0 5px 5px 0;
  border: 2px solid rgb(123 97 255 / 50%);

  & div:first-child {
    width: 100%;
  }
`

const Neuron = React.forwardRef(({ id: neuronId, attributes }, ref) => {
  const {
    editorState,
    updateEditorState,
    editor,
  } = useNeuron({ neuronId })
  const { decorate } = useCursors(editor)

  const renderLeaf = React.useCallback(
    (props) => <Leaf {...props} />,
    [decorate]
  )

  return (
    <Popup
      on="hover"
      name={`neuron-${neuronId}-options`}
      style={{ padding: 0, borderRadius: '5px 10px' }}
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
            <Editable renderLeaf={renderLeaf} decorate={decorate} />
          </Slate>
        </StyledNeuronContainer>
      )}
    >
      <IconButton title="Add empty line before" variant="white">
        <UndoIcon />
      </IconButton>

      <IconButton title="Add empty line after" variant="white">
        <RedoIcon />
      </IconButton>

      <IconButton variant="white">
        <DeleteIcon />
      </IconButton>
    </Popup>
  )
})

Neuron.propTypes = {
  id: PropTypes.string,
  attributes: PropTypes.object,
}

export default Neuron
