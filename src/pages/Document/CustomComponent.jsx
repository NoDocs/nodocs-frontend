import React from 'react'
import styled from 'styled-components'
import { Editable, withReact, Slate } from 'slate-react'
import { createEditor } from 'slate'
import { useSelector } from 'react-redux'

import * as componentServices from 'services/component'

const StyledComponentContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
`

const CustomComponent = ({ id }) => {
  const content = useSelector(state => state.getIn(['components', id, 'content']))
  const [editorState, updateEditorState] = React.useState(content
    ? JSON.parse(content)
    : null)

  React.useEffect(
    () => {
      if (!content) {
        componentServices
          .getComponent(id)
          .then(({ data }) => updateEditorState(JSON.parse(data.content)))
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

  return (
    <StyledComponentContainer contentEditable={false} data-component-id={id}>
      <Slate editor={editor} value={editorState} onChange={onEditorStateChange}>
        <Editable autoFocus />
      </Slate>
    </StyledComponentContainer>
  )
}

export default CustomComponent
