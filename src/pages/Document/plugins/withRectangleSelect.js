import Selection from '@simonwep/selection-js'
import { List, OrderedMap, Map } from 'immutable'

const queryElement = ({ id, nodeIds }) => id
  ? document.querySelector(`[data-page-id="${id}"]`)
  : nodeIds.map(nodeId => `[data-node-id="${nodeId}"]`)

const withSelectRectangle = (editor) => {
  const onBeforeStart = ({ oe }) => oe.target.getAttribute('data-start') === 'selection'

  const onStart = () => {
    if (editor.selectedNodeIds) {
      editor
        .selectedNodeIds
        .reduce((acc, page) => [
          ...acc,
          ...queryElement({ nodeIds: page.get('nodeIds') }),
          queryElement({ id: page.get('id') })], [])
        .forEach(element => element.classList.remove('selected'))

      editor.selectedNodeIds = undefined
      editor.selectedPageId = undefined
    }
  }

  const onMove = ({ changed: { added, removed } }) => {
    for (const el of added) el.classList.add('selected')
    for (const el of removed) el.classList.remove('selected')
  }

  const onStop = ({ selected }) => {
    const selectedNodes = Array.from(selected)
      .map(node => node.getAttribute('data-page-id')
        ? { pageId: node.getAttribute('data-page-id') }
        : { nodeId: node.getAttribute('data-node-id') })

    let ranges = new OrderedMap()

    selectedNodes.forEach(selectedNode => {
      if (selectedNode.pageId) {
        ranges = ranges.set(
          selectedNode.pageId,
          new Map({ id: selectedNode.pageId, nodeIds: new List() })
        )
        return
      }

      ranges = ranges.updateIn([ranges.last().get('id'), 'nodeIds'], nodeIds => nodeIds.push(selectedNode.nodeId))
    })

    editor.selectedNodeIds = ranges
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
