import React from 'react'
import { useSelector } from 'react-redux'
import { Transforms } from 'slate'
import * as sharedb from 'sharedb/lib/client'

import { authSelectors } from 'logic/auth'
import { documentSelectors } from 'logic/document'
import { slateType } from '../OT/slateType'

const wsClient = token => new WebSocket(process.env.BASE_SHAREDB_WS, token)
const connection = token => new sharedb.Connection(wsClient(token))
sharedb.types.register(slateType)

const useCollaborative = ({ namespace, editor, editorState, updateEditorState, docId }) => {
  const userId = useSelector(authSelectors.selectCurrUserProperty('id'))
  const color = useSelector(authSelectors.selectCurrUserProperty('color'))
  const userName = useSelector(authSelectors.selectCurrUserProperty('fullName'))
  const componentIds = useSelector(documentSelectors.selectSectionProperty('componentIds'))

  const doc = React.useMemo(
    () => connection(localStorage.getItem('accessToken')).get(namespace, docId),
    []
  )

  React.useEffect(
    () => {
      const onSubscribe = () => {
        console.log('subscribed to document !!', doc.data)
        updateEditorState(doc.data.children)
      }

      const onOperation = (operation, source) => {
        if (source === userId) return

        console.log(doc.data.children)
        updateEditorState(doc.data.children)

        const operations = Array.isArray(operation)
          ? operation
          : [operation]

        for (const op of operations) {
          console.log('apply -> ', op)
          Transforms.transform(editor, op)
        }
      }

      doc.subscribe(onSubscribe)
      doc.on('op', onOperation)
    },
    []
  )

  React.useEffect(
    () => {
      (componentIds || [])
        .filter(componentId => !editor.connectedComponents[componentId])
        .forEach((componentId) => {
          const component = connection(localStorage.getItem('accessToken')).get('components', componentId)

          const onComponentSubscribe = () => {}
          const onComponentOperation = () => {}

          editor.connectedComponents[componentId] = component

          component.subscribe(onComponentSubscribe({ componentId }))
          component.on('op', onComponentOperation({ componentId }))
        })
    },
    [componentIds]
  )

  const onEditorStateChange = (newValue) => {
    updateEditorState(newValue)

    editor
      .operations
      .filter(operation => operation.type !== 'set_selection')
      .forEach(operation => doc.submitOp(operation, { source: userId }))
  }

  return {
    onEditorStateChange,
  }
}

export default useCollaborative
