import React from 'react'
import styled from 'styled-components'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import randomColor from 'randomcolor'
import { withIOCollaboration, useCursor } from '@slate-collaborative/client'

import * as documentServices from 'services/document'
import withRectangleSelect from './plugins/withRectangleSelect'
import withNodeId from './plugins/withNodeId'
import withEditableVoid from './plugins/withEditableVoid'
import withDetectComponentInsert from './plugins/withDetectComponentInsert'
import CustomComponent from './CustomComponent'
import DocumentPanel from './DocumentPanel'
import Leaf from './components/Leaf'

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
  const userName = useSelector(state => state.getIn(['auth', 'fullName']))

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

  const color = React.useMemo(
    () =>
      randomColor({
        luminosity: 'dark',
        format: 'rgba',
        alpha: 1
      }),
    []
  )

  const editor = React.useMemo(() => {
    const slateEditor = withRectangleSelect(withDetectComponentInsert(withEditableVoid(withNodeId(withReact(withHistory(createEditor()))))))

    const origin =
      process.env.NODE_ENV === 'production'
        ? window.location.origin
        : 'http://localhost:8000'

    const options = {
      docId: '/' + params.documentId,
      cursorData: {
        name: userName,
        color,
        alphaColor: color.slice(0, -2) + '0.2)'
      },
      url: `${origin}/${params.documentId}`,
      connectOpts: {
        query: {
          name: userName,
          token: 'id',
          type: 'document',
          slug: params.documentId
        }
      },
    }

    return withIOCollaboration(slateEditor, options)
  }, [])

  React.useEffect(() => {
    editor.connect()

    return editor.destroy
  }, [])

  const { decorate } = useCursor(editor)

  const onEditorChange = (newEditorState) => {
    updateEditorState(newEditorState)
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

  const renderLeaf = React.useCallback((props) => <Leaf {...props} />, [decorate])

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
            decorate={decorate}
            renderLeaf={renderLeaf}
            renderElement={renderElement}
          />
        </StyledEditorContainer>
      </Slate>
    </div>
  )
}

export default Document
