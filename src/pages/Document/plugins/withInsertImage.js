import { Transforms } from 'slate'
import { ReactEditor } from 'slate-react'

import store from 'store'
import RelayEnvironment from '../../../RelayEnvironment'
import createAssetMutation from '../mutations/createAssetMutation'

const withInsertImage = (editor) => {
  const { insertData } = editor

  editor.insertData = (data) => {
    const pageId = store
      .getState()
      .getIn(['document', 'activePageId'])
    const { files } = data

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader()
        const [mime] = file.type.split('/')

        if (mime === 'image') {
          reader.addEventListener('load', async () => {
            if (!reader.result) {
              return
            }

            const response = await createAssetMutation.commit(RelayEnvironment, { pageId }, file)
            const { createAsset: { neuron: neuron } } = response

            Transforms.insertNodes(editor, {
              type: 'neuron',
              id: neuron.neuronId,
              children: [{ text: '' }],
            })
            ReactEditor.blur(editor)
          })

          reader.readAsDataURL(file)
        }
      }
    } else {
      insertData(data)
    }
  }

  return editor
}

export default withInsertImage
