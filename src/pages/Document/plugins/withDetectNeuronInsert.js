import { Transforms } from 'slate'
import store from 'store'
import RelayEnvironment from '../../../RelayEnvironment'
import attachNeuronToPage from '../mutations/attachNeuronToPageMutation'

const withDetectNeuronInsert = (editor) => {
  const { apply } = editor

  editor.apply = async (operation) => {
    const regex = /\[\[neuron\=.*\]\]$/ // eslint-disable-line

    if (operation.type === 'insert_text') {
      const text = operation.text

      const isComponentExpression = regex.test(text)

      if (isComponentExpression) {
        const splitted = text.split('=')[1]
        const id = splitted.replace(']]', '')

        const state = store.getState()
        const pageId = state.getIn(['document', 'activePageId'])

        attachNeuronToPage
          .commit(RelayEnvironment, { pageId, neuronId: id })
          .then(({ attachNeuronToPage: { neuron } }) => {
            Transforms.insertNodes(
              editor,
              { type: 'neuron', id, children: JSON.parse(neuron.content) }
            )
          })

        return
      }
    }

    apply(operation)
  }

  return editor
}

export default withDetectNeuronInsert
