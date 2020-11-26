import { Editor, Range } from 'slate'
import { ReactEditor } from 'slate-react'

const withPage = (editor) => {
  const { apply } = editor

  editor.apply = (operation) => {
    const { type, properties } = operation
    const hasProperties = Object
      .keys(properties || {})
      .length

    if (type === 'split_node' && hasProperties) {
      console.log(properties)
      const domNode = document.querySelector(`[data-node-id="${properties.id}"]`)
      const page = domNode.closest('[contenteditable="false"]')

      const bounds = domNode.getBoundingClientRect()
      const parentBounds = page.getBoundingClientRect()

      console.log(bounds, parentBounds)
    }

    apply(operation)
  }

  return editor
}

export default withPage
