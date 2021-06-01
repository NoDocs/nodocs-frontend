import { Transforms } from 'slate'
import { ReactEditor } from 'slate-react'

import RelayEnvironment from '../../../RelayEnvironment'
import createAssetMutation from '../mutations/createAssetMutation'

const withInsertImage = (editor) => {
  const { insertData } = editor

  editor.insertData = (data) => {
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

            const response = await createAssetMutation.commit(RelayEnvironment, {}, file)
            const { createAsset: { neuron } } = response

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
