import { Transforms } from 'slate'
import { ReactEditor } from 'slate-react'

import store from 'store'
import RelayEnvironment from 'RelayEnvironment'
import attachNeuronToPage from '../mutations/attachNeuronToDocumentMutation'

const withDetectNeuronInsert = (editor) => {
  const { apply } = editor

  editor.apply = async (operation) => {
    const regex = /\[\[neuron\=.*\]\]$/ // eslint-disable-line

    if (operation.type === 'insert_text') {
      const text = operation.text

      if (regex.test(text)) {
        const splitted = text.split('=')[1]
        const id = splitted.replace(']]', '')

        const state = store.getState()
        const documentId = state.getIn(['document', 'id'])

        await attachNeuronToPage.commit(RelayEnvironment, { documentId, neuronId: id })
        Transforms.insertNodes(editor, { type: 'neuron', id, children: [{ text: '' }] })
        ReactEditor.blur(editor)

        return
      }
    }

    apply(operation)
  }

  return editor
}

export default withDetectNeuronInsert
