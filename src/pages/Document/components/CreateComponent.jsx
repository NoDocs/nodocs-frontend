import React from 'react'
import shortid from 'shortid'
import { useEditor } from 'slate-react'
import { Transforms } from 'slate'
import { useDispatch, useSelector } from 'react-redux'

import { documentSelectors } from 'logic/document'
import componentIcon from 'assets/component.svg'
import copyToClipboard from 'utils/copyToClipboard'
import { getSelectedRange, selectRange } from 'utils/editor'
import * as componentServices from 'services/component'
import { componentActions } from 'logic/component'
import IconButton from 'atoms/IconButton'

const CreateComponent = () => {
  const editor = useEditor()
  const dispatch = useDispatch()
  const activePageId = useSelector(documentSelectors.selectActivePageId)

  const handleCreateComponent = async () => {
    if (!editor.selectedNodeIds) {
      alert('You do not have component selected')
      return
    }

    const componentId = shortid.generate()

    const component = {
      type: 'component',
      id: componentId,
      componentId,
      rootPageId: activePageId,
      children: [{ text: '' }]
    }

    const { content, start, end } = getSelectedRange({ editor })
    selectRange({ editor, start, end })

    Transforms.delete(editor, { at: editor.selection })
    Transforms.insertNodes(editor, component)

    const { data } = await componentServices.createComponent({
      content: JSON.stringify(content),
      componentId,
      pageId: activePageId,
    })

    dispatch(componentActions.putComponent({ ...data, pageId: activePageId }))

    editor.selectedNodeIds = undefined
    copyToClipboard(`[[component=${componentId}]]`)
  }

  return (
    <IconButton variant="white" onClick={handleCreateComponent}>
      <img src={componentIcon} />
    </IconButton>
  )
}

export default CreateComponent
