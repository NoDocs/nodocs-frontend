export const getSelectedRange = ({ editor }) => {
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

  const content = editor
    .children
    .slice(startIndex, endIndex + 1)

  return {
    content,
    start: startIndex,
    end: endIndex,
  }
}

export const selectRange = ({ editor, start, end }) => {
  editor.apply({
    type: 'set_selection',
    properties: {
      anchor: { path: [start, 0], offset: 0 },
    },
    newProperties: {
      anchor: { path: [start, 0], offset: 0 },
      focus: { path: [end, 0], offset: editor.children[end].children[0].text.length },
    },
  })
}
