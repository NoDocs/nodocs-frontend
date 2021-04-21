import { Transforms } from 'slate'
import RelayEnvironment from '../../../RelayEnvironment'
import attachFileToPage from '../mutations/attachFileToPage'

const withInsertImage = (editor) => {
  const { insertData } = editor

  editor.insertData = (data) => {
    const documentId = window
      .location
      .pathname
      .replace('/d/', '')
    const text = data.getData('text/plain')
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

            const { uploadFile: { file: uploadedFile } } = await attachFileToPage.commit(RelayEnvironment, { documentId }, file)

            Transforms.insertNodes(editor, { type: 'image', url: uploadedFile.url, children: [{ text: '' }] })
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
