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
  const editor = useEditor()
  const dispatch = useDispatch()
  const activeSectionId = useSelector(documentSelectors.selectActiveSectionId)
  const params = useParams()

  const handleCreateComponent = async () => {
    if (!editor.selectedNodeIds) {
      alert('You do not have component selected')
      return
    }

    const { selectedNodeIds } = editor
    const componentId = shortid.generate()

    const component = {
      type: 'component',
      id: componentId,
      componentId,
      children: []
    }

    selectedNodeIds.forEach(page => {
      const { content, pageIndex, start, end } = getSelectedRange({
        editor,
        pageId: page.get('id'),
        nodeIds: page.get('nodeIds').toJS()
      })

      selectRange({ editor, pageIndex, start, end })

      Transforms.wrapNodes(
        editor,
        { type: 'component', id: componentId, componentId }
      )

      component.children = [...component.children, ...content]
    })

    const { data } = await componentServices.createComponent({
      componentId,
      sectionId: activeSectionId,
      documentId: params.documentId,
      content: JSON.stringify(component.children)
    })
    dispatch(componentActions.putComponent(data))

    editor.selectedNodeIds = undefined
    editor.selectedPageId = undefined
    copyToClipboard(`[[component=${componentId}]]`)
  }

  return (
    <IconButton variant="white" onClick={handleCreateComponent}>
      <img src={componentIcon} />
    </IconButton>
  )
}

export default CreateComponent
