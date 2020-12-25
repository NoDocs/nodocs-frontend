import React from 'react'
import { useSelector } from 'react-redux'
import * as sharedb from 'sharedb/lib/client'
import * as jsondiff from 'json0-ot-diff'

import { authSelectors } from 'logic/auth'
import useCursors from './useCursors'

const useCollaborative = ({ namespace, editor, editorState, updateEditorState, endPoint, docId }) => {
  const syncMutex = React.useRef()
  const oldValue = React.useRef()
  const token = useSelector(authSelectors.selectCurrUserProperty('token'))
  const userId = useSelector(authSelectors.selectCurrUserProperty('id'))
  const userColor = useSelector(authSelectors.selectCurrUserProperty('color'))
  const userName = useSelector(authSelectors.selectCurrUserProperty('fullName'))
  const { decorate, setSelections } = useCursors({ userId })

  const oldSelection = React.useRef([{
    id: userId,
    selection: { anchor: { path: [0, 0], offset: 0 }, focus: { path: [0, 0], offset: 0 } }
  }])

  const doc = React.useMemo(
    () => {
      const ws_client = new WebSocket(`ws://localhost:8000/${endPoint}`, token)
      const connection = new sharedb.Connection(ws_client)

      return connection.get(namespace, docId)
    },
    []
  )

  const sendOp = args => new Promise(resolve => doc.submitOp(args, resolve))

  React.useEffect(
    () => {
      const onSubscribe = () => {
        syncMutex.current = true
        updateEditorState(doc.data.children)
        syncMutex.current = false
      }

      const onOperation = () => {
        syncMutex.current = true
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
        updateEditorState(doc.data.children)
        syncMutex.current = false
      }

      doc.subscribe(onSubscribe)
      doc.on('op', onOperation)
    },
    [setSelections, doc]
  )

  const onEditorStateChange = (newValue) => {
    oldValue.current = { selections: oldSelection.current, children: editorState }

    const selections = oldSelection
      .current
      .map(selection => selection.id === userId
        ? { id: userId, selection: editor.selection, color: userColor, name: userName }
        : selection)

    const diff = jsondiff(oldValue, { selections, children: newValue })
    oldSelection.current = selections

    if (!syncMutex.current) {
      if (Array.isArray(diff) && diff.length) {
        sendOp(diff)
      }
    }
  }

  return {
    decorate,
    onEditorStateChange,
  }
}

export default useCollaborative
