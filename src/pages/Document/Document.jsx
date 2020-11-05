import React from 'react'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import styled, { createGlobalStyle } from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import * as documentServices from 'services/document'
import withRectangleSelect from './plugins/withRectangleSelect'
import withNodeId from './plugins/withNodeId'
import withEditableVoid from './plugins/withEditableVoid'
import withDetectComponentInsert from './plugins/withDetectComponentInsert'
import CustomComponent from './CustomComponent'
import CreateComponentButton from './CreateComponentButton'

const GlobalStyles = createGlobalStyle`
  .selection-area {
    background-color: rgba(0, 0, 0, 0.2);
  }
  html {
    background: #F2F3F4;
    height: 100%;
    width: 100%;
    font-family: 'sans-serif', 'arial';
  }

  p {
    margin: 0;
  }

  button {
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
    font-family: "Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 14px;
    height: 36px;
    letter-spacing: 0.25px;
    cursor: pointer;
    line-height: 16px;
    background: rgb(26, 115, 232);
    color: rgb(255, 255, 255);
    padding: 9px 16px 10px 12px;
    text-transform: capitalize;
    border: 1px solid transparent !important;
  }
`

const Logo = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  margin: 2% auto;
  background: url('https://res.cloudinary.com/nodocs/image/upload/v1604555084/logos/logolettersblack_qfyiie.svg');
  background-size: contain;
  background-repeat: no-repeat;
`

const StyledEditorContainer = styled.div`
  margin: 0% 15%;
  padding: 50px;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  p:first-child {
    border-radius: 4px 4px 0px 0px;
  }

  p:last-child {
    border-radius: 0 0 4px 4px;
  }

  & .selected {
    background: rgba(211,218,225,0.5);
    padding: 0 5px;
    border-left: 2px solid black;
  }

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
    <React.Fragment>
      <GlobalStyles />
      <Logo/>
      <StyledEditorContainer data-start="selection">
        <Slate
          editor={editor}
          value={editorState}
          onChange={onEditorChange}
        >
          <Editable
            renderElement={renderElement}
            placeholder="Document..."
          />

          <CreateComponentButton />
        </Slate>
      </StyledEditorContainer>
    </React.Fragment>
  )
}

export default Document
