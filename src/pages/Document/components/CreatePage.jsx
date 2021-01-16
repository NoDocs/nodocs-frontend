import React from 'react'
import { useSlate, ReactEditor } from 'slate-react'
import { Transforms } from 'slate'
import shortid from 'shortid'
import styled from 'styled-components'

import PlusIcon from 'assets/components/PlusIcon'
import Label from 'atoms/Label'

const StyledCreatePageContainer = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: 17px auto;
  margin-left: 20px;
  margin-top: 5px;
`

const CreatePage = () => {
  const editor = useSlate()

  const onCreate = () => {
    const lastPageIndex = editor.children.length - 1
    const lastLineIndex = editor
      .children[lastPageIndex]
      .children
      .length - 1

    Transforms.insertNodes(editor, {
      type: 'page',
      name: 'Untitled',
      id: shortid.generate(),
      children: [{
        type: 'paragraph',
        id: shortid.generate(),
        children: [{ text: '' }],
      }]
    }, { at: [lastPageIndex, lastLineIndex] })

    Transforms.liftNodes(editor, { at: [lastPageIndex, lastLineIndex] })

    const location = {
      path: [lastPageIndex + 1, 0, 0],
      offset: 0,
    }

    ReactEditor.focus(editor)

    editor.apply({
      type: 'set_selection',
      properties: { anchor: { path: [0, 0, 0], offset: 0 } },
      newProperties: {
        focus: location,
        anchor: location,
      },
    })
  }

  return (
    <StyledCreatePageContainer>
      <PlusIcon fill="black" size={14} />
      <Label hoverable color="black" onClick={onCreate}>Create Page</Label>
    </StyledCreatePageContainer>
  )
}

export default CreatePage
