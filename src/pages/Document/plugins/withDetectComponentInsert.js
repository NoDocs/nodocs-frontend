import shortid from 'shortid'
import { Transforms } from 'slate'

import store from 'store'
import * as documentService from 'services/document'
import { componentActions } from 'logic/component'

const withDetectComponent = (editor) => {
  const { apply } = editor

  editor.apply = async (operation) => {
    const regex = /\[\[component\=.*\]\]$/ // eslint-disable-line

    if (operation.type === 'insert_text') {
      const text = operation.text

      const isComponentExpression = regex.test(text)

      if (isComponentExpression) {
        const splitted = text.split('=')[1]
        const id = splitted.replace(']]', '')

        const state = store.getState()
        const sectionId = state.getIn(['ui', 'activeDocument', 'activeSectionId'])

        const { data } = await documentService.attachComponentToSection(sectionId, { componentId: id })
        store.dispatch(componentActions.putComponent({ ...data, sectionId }))

        Transforms.insertNodes(editor, { type: 'component', id, children: JSON.parse(data.content) })
        return
      }
    }

    apply(operation)
  }

  return editor
}

export default withDetectComponent
