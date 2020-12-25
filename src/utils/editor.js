export const getSelectedRange = ({ editor }) => {
  const pageIndex = editor
    .children
    .findIndex(curr => curr.id === editor.selectedPageId)
  const blocks = editor
    .children[pageIndex]
    .children
    .filter(curr => editor.selectedNodeIds.indexOf(curr.id) !== -1)

  const startingNodeId = blocks[0].id
  const endingNodeId = blocks[blocks.length - 1].id

  const startIndex = editor
    .children[pageIndex]
    .children
    .findIndex(curr => curr.id === startingNodeId)

  const endIndex = editor
    .children[pageIndex]
    .children
    .findIndex(curr => curr.id === endingNodeId)

  const content = editor
    .children[pageIndex]
    .children
    .slice(startIndex, endIndex + 1)

  return {
    pageIndex,
    content,
    start: startIndex,
    end: endIndex,
  }
}

export const selectRange = ({ editor, pageIndex, start, end }) => {
  editor.apply({
    type: 'set_selection',
    properties: {
      anchor: { path: [pageIndex, start, 0], offset: 0 },
    },
    newProperties: {
      anchor: { path: [pageIndex, start, 0], offset: 0 },
      focus: { path: [pageIndex, end, 0], offset: editor
        .children[pageIndex]
        .children[end]
        .children[0].text.length
      },
    },
  })
}
