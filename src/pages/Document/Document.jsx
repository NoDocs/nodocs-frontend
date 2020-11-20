import React from 'react'
import { Slate, Editable } from 'slate-react'

import DocumentPanel from './DocumentPanel'
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
          renderElement={renderElement}
        />
      </Slate>
    </div>
  )
}

export default Document
