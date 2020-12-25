import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createEditor } from 'slate'
import { withReact } from 'slate-react'
import * as sharedb from 'sharedb/lib/client'
import * as jsondiff from 'json0-ot-diff'

import * as componentServices from 'services/component'
import { componentActions } from 'logic/component'
import useCursors from './useCursors'

const token = localStorage.getItem('token') || ''
const parsedToken = token.startsWith('Bearer') ? token.slice(7) : token

const useComponent = ({ componentId }) => {
  const syncMutex = React.useRef()
  const oldValue = React.useRef()

  const params = useParams()
  const dispatch = useDispatch()
  const content = useSelector(state => state.getIn(['components', componentId, 'content']))
  const userId = useSelector(state => state.getIn(['auth', 'id']))
  const name = useSelector(state => state.getIn(['auth', 'fullName']))
  const rootDocumentId = useSelector(state => state.getIn(['components', componentId, 'rootDocument', 'id']))
  const [editorState, updateEditorState] = React.useState(content
    ? JSON.parse(content)
    : null)

  const doc = React.useMemo(
    () => {
      const ws_client = new WebSocket(`ws://localhost:8000/component/${componentId}`, parsedToken)
      const connection = new sharedb.Connection(ws_client)

      return connection.get('components', componentId)
    },
    []
  )

  const { decorate, setSelections } = useCursors({ userId })

  const oldSelection = React.useRef([{
    id: userId,
    selection: { anchor: { path: [0, 0], offset: 0 }, focus: { path: [0, 0], offset: 0 } }
  }])

  const sendOp = (...args) => {
    return new Promise((resolve) => {
      doc.submitOp(...args, resolve)
    })
  }

  React.useEffect(() => {
    doc.subscribe(() => {
      syncMutex.current = true
      updateEditorState(doc.data.children)
      syncMutex.current = false
    })

    doc.on('op', () => {
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
    })
  }, [setSelections, doc])

  const onEditorStateChange = (newValue) => {
    oldValue.current = { selections: oldSelection.current, children: editorState }

    const selections = oldSelection.current.map((selection) => {
      if (selection.id === userId) {
        return { id: userId, selection: editor.selection, name }
      }
      return selection
    })

    const diff = jsondiff(oldValue, { selections, children: newValue })
    oldSelection.current = selections

    if (!syncMutex.current) {
      if (Array.isArray(diff) && diff.length) {
        sendOp(diff)
      }
    }
  }

  React.useEffect(
    () => {
      if (!content) {
        componentServices
          .getComponent(componentId)
          .then(({ data }) => {
            dispatch(componentActions.putComponent(data))
            updateEditorState(JSON.parse(data.content))
          })
      }
    },
    []
  )

  const editor = React.useMemo(
    () => withReact(createEditor()),
    []
  )

  const isImported = React.useMemo(
    () => parseInt(params.documentId, 10) === rootDocumentId,
    []
  )

  return {
    editorState,
    isImported,
    rootDocumentId,
    decorate,
    onEditorStateChange,
    editor,
  }
}

export default useComponent
