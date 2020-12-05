import shortid from 'shortid'
import { Transforms } from 'slate'

const withPage = sectionEditor => (editor) => {
  const { apply } = editor

  editor.apply = (operation) => {
    const { type, properties } = operation
    const hasProperties = Object
      .keys(properties || {})
      .length

    if (type === 'split_node' && hasProperties) {
      const index = operation.path[0]
      const lastNode = editor.children[index]

      const domNode = document.querySelector(`[data-node-id="${lastNode.id}"]`)
      const parent = domNode.closest('[data-slate-editor="true"]')
      const page = domNode.closest('[contenteditable="false"]')

      const pageHeight = page.getBoundingClientRect().height - 40
      const parentHeight = parent.getBoundingClientRect().height

      if (pageHeight - parentHeight <= 18) {
        const currPageId = page.getAttribute('data-page-id')
        const currPageIndex = sectionEditor
          .children
          .findIndex(curr => curr.id === currPageId)

        Transforms.insertNodes(
          sectionEditor,
          { type: 'page', id: shortid.generate(), children: [{ text: '' }] },
          { at: [currPageIndex + 1] }
        )
        Transforms.move(sectionEditor)
        return
      }
    }

    apply(operation)
  }

  return editor
}

export default withPage
