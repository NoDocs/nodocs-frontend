import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Editable, Slate } from 'slate-react'
import { useCursors } from 'slate-yjs'

import deleteIcon from 'assets/delete.svg'
import undoIcon from 'assets/undo.svg'
import redoIcon from 'assets/redo.svg'
import IconButton from 'atoms/IconButton'
import Leaf from 'shared/Leaf'
import Popup from 'molecules/Popup'
import useNeuron from './hooks/useNeuron'

const StyledComponentContainer = styled.div`
  background: ${({ isImported }) => isImported
    ? 'none'
    : '#F2F3F4'};
  padding: 2px;
  display: flex;
  border-radius: 0 5px 5px 0;

  & div:first-child {
    width: 100%;
  }

  &:hover{
    background: ${({ isImported }) => isImported
    ? 'none' : 'rgb(250 235 215 / 0.6)'};
    border: ${({ isImported }) => isImported
    ? '2px solid rgb(123 97 255 / 50%)'
    : 'none'};
  }
`

const Component = React.forwardRef(({ id: neuronId, attributes }, ref) => {
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

  if (!editorState) return <div>Getting a component...</div>

  return (
    <Popup
      on="hover"
      name={`component-${neuronId}-options`}
      style={{ padding: 0, borderRadius: '5px 10px' }}
      fullWidth={false}
      direction="TOP_RIGHT_INNER"
      trigger={(
        <StyledComponentContainer
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
        </StyledComponentContainer>
      )}
    >
      <IconButton title="Add empty line before" variant="white">
        <img height={14} src={undoIcon} alt="add empty line before" />
      </IconButton>

      <IconButton title="Add empty line after" variant="white">
        <img height={14} src={redoIcon} alt="add empty line after" />
      </IconButton>

      <IconButton variant="white">
        <img height={14} src={deleteIcon} alt="delete component" />
      </IconButton>
    </Popup>
  )
})

Component.propTypes = {
  id: PropTypes.string,
  attributes: PropTypes.object,
}

export default Component
