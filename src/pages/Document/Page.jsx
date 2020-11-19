import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Slate, Editable } from 'slate-react'

import Component from './Component'
import usePage from './hooks/usePage'

const StyledEditorContainer = styled.div`
  background: #FFFFFF;
  height: 960px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin-top: 25px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
  padding: 20px;
`

const Page = ({ id }) => {
  const { editor, editorState, onEditorStateChange } = usePage()

  const renderElement = React.useCallback(
    ({ attributes, children, element }) => {
      if (element.type === 'component') {
        return <Component id={element.id} />
      }

      return (
        <p data-node-id={element.id} {...attributes}>
          {children}
        </p>
      )
    },
    []
  )

  return (
    <StyledEditorContainer
      contentEditable={false}
      data-page-id={id}
    >
      <Slate editor={editor} value={editorState} onChange={onEditorStateChange}>
        <Editable renderElement={renderElement} />
      </Slate>
    </StyledEditorContainer>
  )
}

Page.propTypes = {
  id: PropTypes.string,
}

export default Page
