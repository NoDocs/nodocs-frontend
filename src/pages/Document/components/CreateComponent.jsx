import React from 'react'
import shortid from 'shortid'
import { useEditor } from 'slate-react'
import { Transforms } from 'slate'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { documentSelectors } from 'logic/document'
import componentIcon from 'assets/component.svg'
import copyToClipboard from 'utils/copyToClipboard'
import { getSelectedRange, selectRange } from 'utils/editor'
import * as componentServices from 'services/component'
import { componentActions } from 'logic/component'
import IconButton from 'atoms/IconButton'

const CreateComponent = () => {
  const sectionId = useSelector(documentSelectors.selectSectionProperty('id'))
  const editor = useEditor()
  const dispatch = useDispatch()
  const params = useParams()

  const handleCreateComponent = async () => {
    if (!editor.selectedNodeIds) {
      alert('You have not selected shit man')
      return
    }

    const { content, pageIndex, start, end } = getSelectedRange({ editor })
    selectRange({ editor, pageIndex, start, end })

    const componentId = shortid.generate()
    const shouldInsertNewLine = end === editor.children.length - 1

    await componentServices.createComponent({
      componentId,
      documentId: params.documentId,
      content: JSON.stringify(content),
      sectionId
    })

    dispatch(componentActions.createComponent({
      componentId,
      content: JSON.stringify(content),
      sectionId
    }))

    Transforms.delete(editor, { at: editor.selection })
    Transforms.insertNodes(
      editor,
      {
        type: 'component',
        id: componentId,
        rootComponentId: params.documentId,
        children: [{ text: '' }],
      }
    )

    if (shouldInsertNewLine) {
      Transforms.insertNodes(
        editor,
        { type: 'paragraph', id: shortid.generate(), children: [{ text: '' }] }
      )
    }

    copyToClipboard(`[[component=${componentId}]]`)
  }

  return (
    <IconButton variant="white" onClick={handleCreateComponent}>
      <img src={componentIcon} />
    </IconButton>
  )
}

export default CreateComponent
