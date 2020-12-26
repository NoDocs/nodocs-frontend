import React from 'react'
import { useSlate, ReactEditor } from 'slate-react'
import { Transforms } from 'slate'

import Label from 'atoms/Label'
import shortid from 'shortid'

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
    <Label color="black" onClick={onCreate}>Create Page</Label>
  )
}

export default CreatePage
