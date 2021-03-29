import React from 'react'
import shortid from 'shortid'
import { useEditor } from 'slate-react'
import { Transforms } from 'slate'

import componentIcon from 'assets/component.svg'
import copyToClipboard from 'utils/copyToClipboard'
import { getSelectedRange, selectRange } from 'utils/editor'
import IconButton from 'atoms/IconButton'

const CreateComponent = () => {
  const editor = useEditor()

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
      children: [{ text: '' }]
    }

    const { content, start, end } = getSelectedRange({ editor })
    selectRange({ editor, start, end })

    Transforms.delete(editor, { at: editor.selection })
    Transforms.insertNodes(editor, component)

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
