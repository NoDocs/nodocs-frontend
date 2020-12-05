import shortid from 'shortid'
import { Transforms } from 'slate'

const withDetectComponent = (editor) => {
  const { apply } = editor

  editor.apply = (operation) => {
    const regex = /\[\[component\=.*\]\]$/ // eslint-disable-line

    if (operation.type === 'insert_node' || operation.type === 'insert_text') {
      const text = operation.text || operation.node.text

      const isComponentExpression = regex.test(text)

      if (isComponentExpression) {
        const splitted = text.split('=')[1]
        const id = splitted.replace(']]', '')

        Transforms.insertNodes(editor, { type: 'component', id, children: [{ text: '' }] })
        Transforms.insertNodes(editor, { type: 'paragraph', id: shortid.generate(), children: [{ text: '' }] })
        return
      }
    }

    apply(operation)
  }

  return editor
}

export default withDetectComponent
