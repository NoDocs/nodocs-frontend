import Selection from '@simonwep/selection-js'

const withSelectRectangle = (editor) => {
  const onBeforeStart = ({ oe }) => oe.target.getAttribute('data-start') === 'selection'

  const onStart = () => {
    if (editor.selectedNodeIds) {
      console.log(editor.selectedNodeIds)
      editor
        .selectedNodeIds
        .map(nodeId => document.querySelector(`[data-node-id="${nodeId}"]`))
        .forEach(element => element.classList.remove('selected'))

      editor.selectedNodeIds = undefined
    }
  }

  const onMove = ({ changed: { added, removed } }) => {
    for (const el of added) el.classList.add('selected')
    for (const el of removed) el.classList.remove('selected')
  }

  const onStop = ({ selected }) => {
    const selectedNodeIds = Array
      .from(selected)
      .map(node => node.getAttribute('data-node-id'))

    editor.selectedNodeIds = selectedNodeIds
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
