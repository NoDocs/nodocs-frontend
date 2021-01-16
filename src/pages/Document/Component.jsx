import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import history from 'utils/history'
import deleteIcon from 'assets/delete.svg'
import undoIcon from 'assets/undo.svg'
import redoIcon from 'assets/redo.svg'
import IconButton from 'atoms/IconButton'
import Popup from 'molecules/Popup'
import useComponent from './hooks/useComponent'

const StyledComponentContainer = styled.div`
  background: ${({ isImported }) => isImported
    ? 'none' : '#F2F3F4'};
  padding: 2px;
  border-radius: 0 5px 5px 0;

  & div:first-child {
    width: 100%;
  }

  &:hover{
    background: ${({ isImported }) => isImported
    ? 'none'
    : 'rgb(250 235 215 / 0.6)'};
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

const Component = React.forwardRef(({ attributes, id, content }, ref) => {
  const { isImported, rootDocumentId } = useComponent({ componentId: id })

  return (
    <Popup
      on="hover"
      name={`component-${id}-options`}
      style={{ padding: 0, borderRadius: '5px 10px' }}
      fullWidth={false}
      direction="TOP_RIGHT_INNER"
      trigger={(
        <StyledComponentContainer
          isImported={isImported}
          ref={ref}
          data-component-id={id}
          {...attributes}
        >
          {content}
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
})

Component.displayName = 'Component'
Component.propTypes = {
  id: PropTypes.string,
  attributes: PropTypes.object,
  content: PropTypes.object,
}

export default Component
