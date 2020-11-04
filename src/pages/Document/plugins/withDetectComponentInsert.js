import { Transforms } from 'slate'

const withDetectComponent = (editor) => {
  const { apply } = editor

  editor.apply = (operation) => {
    const regex = /\[\[component=.*\]\]$/

    if (operation.type === 'insert_node') {
      const { node: { text } } = operation
      const isComponentExpression = regex.test(text)

      if (isComponentExpression) {
        const splitted = text.split('-')[1]
        const id = splitted.replace(']]', '')

        Transforms.insertNodes(editor, { type: 'component', id, children: [{ text: '' }] })
        return
      }
    }

    apply(operation)
  }

  return editor
}

export default withDetectComponent
