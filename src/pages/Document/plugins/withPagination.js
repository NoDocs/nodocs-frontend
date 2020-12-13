import shortid from 'shortid'
import { Transforms, Element, Node } from 'slate'

const selectAfter = ({ editor, currIndex }) => {
  Transforms.setSelection(editor, {
    anchor: {
      offset: 0,
      path: [currIndex + 1, 0],
    },
    focus: {
      offset: 0,
      path: [currIndex + 1, 0],
    }
  })
}

const initialPage = () => ({
  type: 'page',
  id: shortid.generate(),
  children: [{
    type: 'paragraph',
    id: shortid.generate(),
    children: [{ text: '' }]
  }]
})

const createNewPage = ({ editor, currPageIndex }) => {
  Transforms.insertNodes(editor, initialPage())

  const innerPageIndex = editor
    .children[currPageIndex]
    .children
    .findIndex(curr => curr.type === 'page')

  if (innerPageIndex === -1) {
    const actualPageIndex = editor
      .children
      .findIndex(page => page.children.find(item => item.type === 'page'))

    console.log(actualPageIndex)

    Transforms.liftNodes(editor, { at: [actualPageIndex] })
    selectAfter({ editor, currIndex: actualPageIndex })
    Transforms.removeNodes(editor, { at: [actualPageIndex] })
    return
  }

  const currPageLastIndex = editor
    .children[currPageIndex]
    .children
    .length

  if (innerPageIndex !== editor.children.length - 1) {
    Transforms.moveNodes(editor, {
      at: [currPageIndex, innerPageIndex],
      to: [currPageIndex, currPageLastIndex - 1]
    })
  }

  Transforms.liftNodes(editor, { at: [currPageIndex, currPageLastIndex - 1] })

  const node = editor
    .children[currPageIndex]
    .children[currPageLastIndex - 2]

  Transforms.removeNodes(editor, { at: [currPageIndex, currPageLastIndex - 2] })
  Transforms.insertNodes(editor, node, { at: [currPageIndex + 1, 0] })
  Transforms.removeNodes(editor, node, { at: [currPageIndex + 1, 1] })
}

const withPagination = (editor) => {
  const { normalizeNode } = editor

  editor.normalizeNode = (entry) => {
    const [node, path] = entry

    if (Element.isElement(node) && node.type === 'page') {
      for (const [child, childPath] of Node.children(editor, path)) { // eslint-disable-line
        if (childPath[1] > 2) {
          const isLast = childPath[0] === editor.children.length - 1
          const currPageIndex = path[0]

          if (isLast) {
            createNewPage({ editor, currPageIndex })
            return
          }

          console.log(childPath)
          Transforms.moveNodes(editor, {
            at: childPath,
            to: [childPath[0] + 1, 0]
          })
        }
      }
    }

    normalizeNode(entry)
  }

  return editor
}

export default withPagination
