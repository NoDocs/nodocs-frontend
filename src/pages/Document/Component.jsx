import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Editable, Slate } from 'slate-react'

import history from 'utils/history'
import deleteIcon from 'assets/delete.svg'
import undoIcon from 'assets/undo.svg'
import redoIcon from 'assets/redo.svg'
import IconButton from 'atoms/IconButton'
import Popup from 'molecules/Popup'
import useComponent from './hooks/useComponent'
import Leaf from './components/Leaf'
import useCollaborative from './hooks/useCollaborative'

const StyledComponentContainer = styled.div`
  background: ${({ isImported }) => isImported
    ? 'none' : '#F2F3F4'};
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

const StyledIcon = styled.div`
  display: inline-flex;
  width: 14px;
  height: 14px;
  margin: 0 0 0 10px;
  opacity: 0.2;
  background: url('https://res.cloudinary.com/nodocs/image/upload/v1604540189/icons/component.svg');
  background-size: contain;
  background-repeat: no-repeat;
`

const Component = ({ id: componentId }) => {
  const {
    editorState,
    updateEditorState,
    isImported,
    editor,
    rootDocumentId
  } = useComponent({ componentId })
  const { onEditorStateChange, decorate } = useCollaborative({
    namespace: 'components',
    endPoint: `component/${componentId}`,
    docId: componentId,
    updateEditorState,
    editor,
    editorState,
  })

  const renderLeaf = React.useCallback(
    (props) => <Leaf {...props} />,
    [decorate]
  )

  if (!editorState) return <div>Getting a component...</div>

  return (
    <Popup
      on="hover"
      name={`component-${componentId}-options`}
      style={{ padding: 0, borderRadius: '5px 10px' }}
      fullWidth={false}
      direction="TOP_RIGHT_INNER"
      trigger={(
        <StyledComponentContainer
          isImported={isImported}
          contentEditable={false}
          data-component-id={componentId}
        >
          <Slate editor={editor} value={editorState} onChange={onEditorStateChange}>
            <Editable renderLeaf={renderLeaf} decorate={decorate} />
          </Slate>

          {isImported && <StyledIcon onClick={() => history.push(`/d/${rootDocumentId}`)} />}
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
}

Component.propTypes = {
  id: PropTypes.string,
}

export default Component
