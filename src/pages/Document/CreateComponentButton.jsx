import React from 'react'
import shortid from 'shortid'
import { useEditor } from 'slate-react'
import { Transforms } from 'slate'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import * as componentServices from 'services/component'
import { componentActions } from 'logic/component'

const CreateComponentButton = () => {
  const editor = useEditor()
  const dispatch = useDispatch()
  const params = useParams()

  const handleCreateComponent = () => {
    const blocks = editor
      .children
      .filter(curr => editor.selectedNodeIds.indexOf(curr.id) !== -1)

    const startingNodeId = blocks[0].id
    const endingNodeId = blocks[blocks.length - 1].id

    const startIndex = editor
      .children
      .findIndex(curr => curr.id === startingNodeId)

    const endIndex = editor
      .children
      .findIndex(curr => curr.id === endingNodeId)

    editor.apply({
      type: 'set_selection',
      properties: {
        anchor: { path: [startIndex, 0], offset: 0 },
      },
      newProperties: {
        anchor: { path: [startIndex, 0], offset: 0 },
        focus: { path: [endIndex, 0], offset: editor.children[endIndex].children[0].text.length },
      },
    })

    const content = editor
      .children
      .slice(startIndex, endIndex + 1)

    const componentId = shortid.generate()

    Transforms.delete(editor, { at: editor.selection })
    dispatch(componentActions.createComponent({ id: componentId, content: JSON.stringify(content) }))
    componentServices.createComponent({ componentId, documentId: params.documentId, content: JSON.stringify(content) })
    Transforms.insertNodes(editor, { type: 'component', id: componentId, children: [{ text: '' }] })
  }

  return (
    <button onClick={handleCreateComponent}>create component</button>
  )
}

export default CreateComponentButton
