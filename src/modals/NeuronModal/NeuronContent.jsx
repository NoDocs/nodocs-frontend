import React from 'react'
import styled from 'styled-components'
import { Editable, Slate } from 'slate-react'
import { useCursors } from 'slate-yjs'

import useNeuronModal from 'hooks/useNeuronModal'
import Leaf from 'shared/Leaf'

const StyledEditable = styled(Editable)`
  grid-area: document-content;
  margin-right: 20px;
  background: #FFFFFF;
  min-height: 540px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 20px 30px;
  border-left: 0px;
`

const NeuronContent = () => {
  const { editor, editorState, updateEditorState } = useNeuronModal()
  const { decorate } = useCursors(editor)

  const renderElement = React.useCallback(
    ({ attributes, children, element }) => {
      switch (element.type) {
        case 'link': {
          return (
            <a {...attributes} href={element.href}>
              {children}
            </a>
          )
        }

        default: {
          return <p {...attributes}>{children}</p>
        }
      }
    },
    []
  )

  const renderLeaf = React.useCallback(
    props => <Leaf {...props} />,
    [decorate]
  )

  return (
    <Slate
      editor={editor}
      value={editorState}
      onChange={updateEditorState}
    >
      <StyledEditable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        decorate={decorate}
      />
    </Slate>
  )
}

export default NeuronContent
