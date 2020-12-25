import React from 'react'
import { useSelector } from 'react-redux'
import { withReact } from 'slate-react'
import { createEditor } from 'slate'
import Websocket from 'reconnecting-websocket'
import flow from 'lodash/flow'
import { withPaging } from 'slate-paged'
import * as sharedb from 'sharedb/lib/client'
import * as jsondiff from 'json0-ot-diff'
import shortid from 'shortid'

const token = localStorage.getItem('token') || ''
const parsedToken = token.startsWith('Bearer') ? token.slice(7) : token

import { authSelectors } from 'logic/auth'
import {documentSelectors } from 'logic/document'

import withEditableComponentVoid from '../plugins/withEditableComponentVoid'
import withRectangleSelect from '../plugins/withRectangleSelect'
import withDetectComponentInsert from '../plugins/withDetectComponentInsert'
import withNodeId from '../plugins/withNodeId'
import { withHistory } from 'slate-history'

import useCursors from './useCursors'

const useDocument = () => {
  const syncMutex = React.useRef()
  const oldValue = React.useRef()

  const [editorState, updateEditorState] = React.useState([{
    type: 'page',
    id: shortid.generate(),
    children: [{ type: 'paragraph', id: shortid.generate(), children: [{ text: '' }] }]
  }])

  const userId = useSelector(authSelectors.selectCurrUserProperty('id'))
  const name = useSelector(authSelectors.selectCurrUserProperty('fullName'))
  const activeSectionId = useSelector(documentSelectors.selectSectionProperty('id'))

  const doc = React.useMemo(
    () => {
      if (!activeSectionId) return

      const ws_client = new Websocket(`ws://localhost:8000/doc/${activeSectionId}`, parsedToken) // sectionId
      const connection = new sharedb.Connection(ws_client)

      return connection.get('sections', activeSectionId) // sectionId
    },
    [activeSectionId]
  )

  const { decorate, setSelections } = useCursors({ userId })

  const oldSelection = React.useRef([{
    id: userId,
    selection: { anchor: { path: [0, 0], offset: 0 }, focus: { path: [0, 0], offset: 0 } }
  }])

  const editor = React.useMemo(
    () => {
      return flow(
        withEditableComponentVoid,
        withRectangleSelect,
        withDetectComponentInsert,
        withPaging({}),
        withNodeId,
        withHistory,
        withReact,
      )(createEditor())
    },
    []
  )

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

      const { mySelection, otherSelections } = doc.data.selections.reduce((acc, curr) => {
        if (curr.id === userId) return { ...acc, mySelection: curr }
        return { ...acc, otherSelections: [...acc.otherSelections, curr] }
      }, { mySelection, otherSelections: [] })

      if (mySelection) editor.selection = mySelection.selection

      setSelections(otherSelections)

      updateEditorState(doc.data.children)
      syncMutex.current = false
    })
  }, [setSelections, doc])

  const onEditorStateChange = (newValue) => {
    oldValue.current = { selections: oldSelection.current, children: editorState }

    const selections = oldSelection.current.map((selection) => {
      if (selection.id === userId) return { id: userId, selection: editor.selection, name }
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

  return {
    editor,
    editorState,
    onEditorStateChange,
    activeSectionId,
    decorate
  }
}

export default useDocument
