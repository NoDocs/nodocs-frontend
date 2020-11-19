import React from 'react'
import { Slate, Editable } from 'slate-react'

import DocumentPanel from './DocumentPanel'
import Leaf from './components/Leaf'
import useDocument from './hooks/useDocument'
import Page from './Page'

const Document = () => {
  const { editorState, onEditorChange, decorate, editor } = useDocument()

  const renderElement = React.useCallback(
    ({ element }) => {
      return element.type === 'page'
        ? <Page id={element.id} />
        : null
    },
    []
  )

  const renderLeaf = React.useCallback(
    (props) => <Leaf {...props} />,
    [decorate]
  )

  if (!editorState) return <div>Getting a document...</div>

  return (
    <div data-start="selection">
      <Slate
        editor={editor}
        value={editorState}
        onChange={onEditorChange}
      >
        <DocumentPanel />

        <Editable
          decorate={decorate}
          renderLeaf={renderLeaf}
          renderElement={renderElement}
        />
      </Slate>
    </div>
  )
}

export default Document
