import React from 'react'
import { useSelector } from 'react-redux'
import * as sharedb from 'sharedb/lib/client'
import * as jsondiff from 'json0-ot-diff'

import { authSelectors } from 'logic/auth'
import { documentSelectors } from 'logic/document'
import useCursors from './useCursors'

const isComponentUpdate = (editor) => {
  if (editor.selection) {
    const { focus: { path } } = editor.selection
    const node = editor
      .children[path[0]]
      .children[path[1]]

    if (node.type === 'component') return true
    return false
  }

  return false
}

const wsClient = new WebSocket(
  'ws://localhost:8000',
  localStorage.getItem('accessToken')
)

const useCollaborative = ({ namespace, editor, editorState, updateEditorState, docId }) => {
  const oldValue = React.useRef()
  const syncMutex = React.useRef()
  const oldSelection = React.useRef([{
    id: 'test',
    selection: { anchor: { path: [0, 0], offset: 0 }, focus: { path: [0, 0], offset: 0 } }
  }])

  const userId = useSelector(authSelectors.selectCurrUserProperty('id'))
  const color = useSelector(authSelectors.selectCurrUserProperty('color'))
  const userName = useSelector(authSelectors.selectCurrUserProperty('fullName'))
  const componentIds = useSelector(documentSelectors.selectSectionProperty('components'))
  const { decorate, setSelections } = useCursors({ userId })

  const doc = React.useMemo(
    () => {
      const connection = new sharedb.Connection(wsClient)
      return connection.get(namespace, docId)
    },
    []
  )

  React.useEffect(
    () => {
      const onSubscribe = () => {
        syncMutex.current = true
        updateEditorState(doc.data.children)
        syncMutex.current = false
      }

      const onOperation = () => {
        syncMutex.current = true

        if (doc.data.selections) {
          const mySelection = doc
            .data
            .selections
            .find(currSelection => currSelection.id === userId)
          const otherSelections = doc
            .data
            .selections
            .filter(currSelection => currSelection.id !== userId)

          if (mySelection) editor.selection = mySelection.selection
          setSelections(otherSelections)
        }

        updateEditorState(doc.data.children)
        syncMutex.current = false
      }

      doc.subscribe(onSubscribe)
      doc.on('op', onOperation)
    },
    [setSelections, doc]
  )

  const handleComponentStateChange = () => {}

  const sendOp = args => new Promise(resolve => doc.submitOp(args, resolve))

  React.useEffect(
    () => {
      componentIds
        .map(curr => curr.get('componentId'))
        .filter(componentId => !editor.connectedComponentIds.includes(componentId))
        .forEach((componentId) => {
          const getComponentConnection = ({ componentId }) => {
            const connection = new sharedb.Connection(wsClient)
            return connection.get('components', componentId)
          }

          const onComponentSubscribe = () => {}
          const onComponentOperation = () => {}

          editor.connectedComponentIds.push(componentId)
        })
    },
    [componentIds]
  )

  const handleSectionStateChange = (newValue) => {
    oldValue.current = { selections: oldSelection.current, children: editorState }

    const selections = oldSelection
      .current
      .map(selection => selection.id === userId
        ? { id: userId, selection: editor.selection, color, name: userName }
        : selection)

    const diff = jsondiff(oldValue, { selections, children: newValue })
    oldSelection.current = selections

    if (!syncMutex.current) {
      if (Array.isArray(diff) && diff.length) {
        sendOp(diff)
      }
    }
  }

  const onEditorStateChange = (newValue) => {
    const isComponent = isComponentUpdate(editor)

    if (isComponent) {
      handleComponentStateChange(newValue)
    }

    handleSectionStateChange(newValue)
  }

  return {
    decorate,
    onEditorStateChange,
  }
}

export default useCollaborative
