import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Editable, withReact, Slate } from 'slate-react'
import { createEditor } from 'slate'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import * as componentServices from 'services/component'
import { componentActions } from 'logic/component'
import { useSocket } from 'socket'
import socketEvents from 'socket/socketEvents'

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

const CustomComponent = ({ id: componentId }) => {
  const isImported = true;
  const params = useParams()
  const dispatch = useDispatch()
  const content = useSelector(state => state.getIn(['components', componentId, 'content']))
  const rootDocumentId = useSelector(state => state.getIn(['components', componentId, 'rootDocument', 'id']))
  const id = useSelector(state => state.getIn(['components', componentId, 'id']))
  const [editorState, updateEditorState] = React.useState(content
    ? JSON.parse(content)
    : null)

  React.useEffect(
    () => {
      if (!content) {
        componentServices
          .getComponent(componentId)
          .then(({ data }) => {
            dispatch(componentActions.putComponent(data))
            updateEditorState(JSON.parse(data.content))
          })
      }
    },
    []
  )

  const editor = React.useMemo(() => withReact(createEditor()), [])

  const { send: listenComponent } = useSocket(socketEvents.ListenComponent)
  const { send: updateComponent } = useSocket(socketEvents.UpdateComponent)

  useSocket(`${socketEvents.ComponentUpdated}-${id}`, (payload) => {
    dispatch(componentActions.putComponent(payload))
    updateEditorState(JSON.parse(payload.content))
  })

  useEffect(() => {
    if (id) listenComponent({ id })
  }, [id])

  const onEditorStateChange = (newEditorState) => {
    updateEditorState(newEditorState)

    editor
      .operations
      .filter(curr => curr.type !== 'set_selection')
      .forEach(() => {
        updateComponent({ componentId, id, content: JSON.stringify(newEditorState) })
      })
  }

  if (!editorState) return <div>Getting a component...</div>

  console.log(params.documentId, rootDocumentId)

  return (
    <StyledComponentContainer
      isImported={rootDocumentId !== parseInt(params.documentId, 10)}
      contentEditable={false}
      data-component-id={componentId}
    >
      <Slate editor={editor} value={editorState} onChange={onEditorStateChange}>
        <Editable autoFocus />
      </Slate>
      {isImported && (
        <StyledIcon />
      )}
    </StyledComponentContainer>
  )
}

export default CustomComponent
