import React from 'react'
import styled from 'styled-components'
import { Editable, Slate } from 'slate-react'
import { useCursors } from 'slate-yjs'

import useNeuronModal from 'hooks/useNeuronModal'
import Leaf from 'shared/Leaf'
import NeuronTitle from './NeuronTitle'

const StyledEditable = styled(Editable)`
  grid-area: document-content;
  background: #FFFFFF;
  min-height: 540px;
  margin-top: 20px;
`

const NeuronContent = () => {
  const { editor, editorState, updateEditorState, neuron } = useNeuronModal()
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

        case 'image': {
          return (
            <img
              src={`https://storage.googleapis.com/dev-nodocs-files/${neuron.file.url}`}
              alt={element.name}
              width="100%"
            />
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
    <React.Fragment>
      <NeuronTitle />

      <Slate
        editor={editor}
        value={editorState}
        onChange={updateEditorState}
      >
        <StyledEditable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="✍🏼 Start typing something..."
          decorate={decorate}
        />
      </Slate>
    </React.Fragment>
  )
}

export default NeuronContent
