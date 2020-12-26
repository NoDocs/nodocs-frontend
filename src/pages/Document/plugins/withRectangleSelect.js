import Selection from '@simonwep/selection-js'

import { notificationActions } from 'logic/notification'
import store from 'store'

const withSelectRectangle = (editor) => {
  const onBeforeStart = ({ oe }) => oe.target.getAttribute('data-start') === 'selection'

  const onStart = () => {
    if (editor.selectedNodeIds) {
      editor
        .selectedNodeIds
        .map(nodeId => document.querySelector(`[data-node-id="${nodeId}"]`))
        .forEach(element => element.classList.remove('selected'))
      document
        .querySelector(`[data-page-id="${editor.selectedPageId}"]`)
        .classList
        .remove('selected')

      editor.selectedNodeIds = undefined
      editor.selectedPageId = undefined
    }
  }

  const onMove = ({ changed: { added, removed } }) => {
    for (const el of added) el.classList.add('selected')
    for (const el of removed) el.classList.remove('selected')
  }

  const onStop = ({ selected }) => {
    const nodeIds = Array.from(selected)
      .map(node => node.getAttribute('data-page-id')
        ? { pageId: node.getAttribute('data-page-id') }
        : { nodeId: node.getAttribute('data-node-id') })

    const containsMoreThenTwoPages = nodeIds
      .filter(curr => curr.pageId !== undefined)
      .length > 1

    if (containsMoreThenTwoPages) {
      for (const el of selected) el.classList.remove('selected')

      store.dispatch(notificationActions.notify({
        type: 'error',
        message: 'You can not create components from two different pages',
      }))
      return
    }

    editor.selectedNodeIds = nodeIds
      .filter(curr => curr.nodeId)
      .map(curr => curr.nodeId)
    editor.selectedPageId = nodeIds
      .find(curr => curr.pageId)
      .pageId
  }

  Selection.create({
    class: 'selection-area',
    selectables: ['[data-slate-node=\'element\']'],
    startareas: ['[data-start=\'selection\']']
  })
    .on('beforestart', onBeforeStart)
    .on('start', onStart)
    .on('move', onMove)
    .on('stop', onStop)

  return editor
}

export default withSelectRectangle
