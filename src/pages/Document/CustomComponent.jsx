import React from 'react'
import styled from 'styled-components'
import { Editable, withReact, Slate } from 'slate-react'
import { createEditor } from 'slate'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import * as componentServices from 'services/component'
import { componentActions } from 'logic/component'

const StyledComponentContainer = styled.div`
  border: ${({ isImported }) => isImported
    ? '2px dashed green'
    : '2px solid black'};
  padding: 10px;
`

const CustomComponent = ({ id }) => {
  const params = useParams()
  const dispatch = useDispatch()
  const content = useSelector(state => state.getIn(['components', id, 'content']))
  const rootDocumentId = useSelector(state => state.getIn(['components', id, 'rootDocument', 'id']))
  const [editorState, updateEditorState] = React.useState(content
    ? JSON.parse(content)
    : null)

  React.useEffect(
    () => {
      if (!content) {
        componentServices
          .getComponent(id)
          .then(({ data }) => {
            dispatch(componentActions.putComponent(data))
            updateEditorState(JSON.parse(data.content))
          })
      }
    },
    []
  )

  const editor = React.useMemo(() => withReact(createEditor()), [])

  const onEditorStateChange = (newEditorState) => {
    updateEditorState(newEditorState)

    editor
      .operations
      .filter(curr => curr.type !== 'set_selection')
      .forEach(() => {
        componentServices.updateComponent(id, { content: JSON.stringify(newEditorState) })
      })
  }

  if (!editorState) return <div>Getting a component...</div>

  console.log(params.documentId, rootDocumentId)

  return (
    <StyledComponentContainer
      isImported={rootDocumentId !== parseInt(params.documentId, 10)}
      contentEditable={false}
      data-component-id={id}
    >
      <Slate editor={editor} value={editorState} onChange={onEditorStateChange}>
        <Editable autoFocus />
      </Slate>
    </StyledComponentContainer>
  )
}

export default CustomComponent
