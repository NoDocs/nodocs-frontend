import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Editable, Slate } from 'slate-react'
import { useCursor } from '@slate-collaborative/client'

import Component from './Component'
import Leaf from './components/Leaf'
import usePage from './hooks/usePage'

const StyledEditorContainer = styled.div`
  background: #FFFFFF;
  height: 60px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin-top: 25px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
  padding: 20px;
  overflow: hidden;
`

const Page = ({ id, pageAttributes }) => {
  const { editor, editorState, onEditorChange } = usePage({ id })
  const { decorate } = useCursor(editor)

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

  const renderLeaf = React.useCallback(
    (props) => <Leaf {...props} />,
    []
  )

  return (
    <StyledEditorContainer
      contentEditable={false}
      {...pageAttributes}
      data-page-id={id}
    >
      <Slate editor={editor} value={editorState} onChange={onEditorChange}>
        <Editable
          decorate={decorate}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
        />
      </Slate>
    </StyledEditorContainer>
  )
}

Page.propTypes = {
  id: PropTypes.string,
  pageAttributes: PropTypes.object,
}

export default Page
