import React from 'react'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import * as documentServices from 'services/document'
import withRectangleSelect from './plugins/withRectangleSelect'
import withNodeId from './plugins/withNodeId'
import withEditableVoid from './plugins/withEditableVoid'
import withDetectComponentInsert from './plugins/withDetectComponentInsert'
import CustomComponent from './CustomComponent'
import DocumentPanel from './DocumentPanel'

const StyledEditorContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin-top: 25px;
  margin-left: 20px;
  margin-right: 20px;
`

const Document = () => {
  const params = useParams()
  const content = useSelector(state => state.getIn([
    'documents',
    parseInt(params.documentId),
    'content'
  ]))

  const [editorState, updateEditorState] = React.useState(content
    ? JSON.parse(content)
    : null
  )

  React.useEffect(
    () => {
      if (!content) {
        documentServices
          .getDocument(params.documentId)
          .then(({ data }) => updateEditorState(JSON.parse(data.content)))
      }
    },
    []
  )

  const editor = React.useMemo(
    () => withRectangleSelect(withDetectComponentInsert(withEditableVoid(withNodeId(withReact(createEditor()))))),
    []
  )

  const onEditorChange = (newEditorState) => {
    updateEditorState(newEditorState)
    documentServices
      .updateDocument(params.documentId, { content: JSON.stringify(newEditorState) })
  }

  const renderElement = React.useCallback(
    ({ attributes, children, element }) => {
      if (element.type === 'component') {
        return <CustomComponent id={element.id} content={children} />
      }

      return (
        <p data-node-id={element.id} {...attributes}>
          {children}
        </p>
      )
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

        <StyledEditorContainer>
          <Editable
            renderElement={renderElement}
          />
        </StyledEditorContainer>
      </Slate>
    </div>
  )
}

export default Document
