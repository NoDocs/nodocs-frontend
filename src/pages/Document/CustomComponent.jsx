import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Editable, withReact, Slate } from 'slate-react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import history from 'utils/history'
import * as componentServices from 'services/component'
import { componentActions } from 'logic/component'
import { useSocket } from 'socket'
import socketEvents from 'socket/socketEvents'

import { withIOCollaboration } from '@slate-collaborative/client'

import withEditableVoid from './plugins/withEditableVoid'
import withNodeId from './plugins/withNodeId'


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
  const userName = useSelector(state => state.getIn(['auth', 'fullName']))
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

  const editor = React.useMemo(() => {
    const slateEditor = withReact(createEditor())

    const origin =
    process.env.NODE_ENV === 'production'
      ? window.location.origin
      : 'http://localhost:8000'


    const options = {
      docId: '/' + componentId,
      url: `${origin}/${componentId}`,
      connectOpts: {
        query: {
          name: userName,
          token: 'id',
          type: 'component',
          slug: componentId
        }
      },
    }
    return withIOCollaboration(slateEditor, options)
  }, [])

  useEffect(() => {
    editor.connect()

    return editor.destroy
  }, [])

  const onEditorStateChange = (newEditorState) => {
    updateEditorState(newEditorState)
  }

  if (!editorState) return <div>Getting a component...</div>

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
        <StyledIcon onClick={() => history.push(`/d/${rootDocumentId}`)} />
      )}
    </StyledComponentContainer>
  )
}

export default CustomComponent
