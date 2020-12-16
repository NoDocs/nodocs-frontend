import React from 'react'
// import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { withReact } from 'slate-react'
import { createEditor } from 'slate'
// import { withIOCollaboration } from '@slate-collaborative/client'
import Websocket from 'reconnecting-websocket'
import * as sharedb from 'sharedb/lib/client'
import * as jsondiff from 'json0-ot-diff'

const ws_client = new Websocket('ws://localhost:8000')
const connection = new sharedb.Connection(ws_client)

const doc = connection.get('documents', '55111004-4cba-44b0-96ea-45801231a5b7')


import { authSelectors } from 'logic/auth'
import {documentSelectors } from 'logic/document'

// import withEditableComponentVoid from '../plugins/withEditableComponentVoid'
// import withRectangleSelect from '../plugins/withRectangleSelect'
// import withDetectComponentInsert from '../plugins/withDetectComponentInsert'
// import withPagination from '../plugins/withPagination'
// import withNodeId from '../plugins/withNodeId'
import { withHistory } from 'slate-history'

const useDocument = () => {
  const syncMutex = React.useRef()
  const oldValue = React.useRef()

  const oldSelection = React.useRef({ anchor: { path: [0, 0], offset: 0 }, focus: { path: [0, 0], offset: 0 } })
  // const content = useSelector(documentSelectors.selectSectionProperty('content'))
  const [editorState, updateEditorState] = React.useState([
  {
    type: 'paragraph',
    children: [{ text: '' }]
  }
])

  const name = useSelector(authSelectors.selectCurrUserProperty('fullName'))
  const color = useSelector(authSelectors.selectCurrUserProperty('color')) || '#ffffff'
  const activeSectionId = useSelector(documentSelectors.selectSectionProperty('sectionId'))

  // React.useEffect(
  //   () => {
  //     const parsed = JSON.parse(content)
  //     // updateEditorState(parsed)
  //   },
  //   [content]
  // )

  const editor = React.useMemo(
    () => {
      return withHistory(withReact(createEditor()))

      // const origin = process.env.NODE_ENV === 'production'
      //   ? process.env.BASE_API_URL
      //   : 'http://localhost:8000'

      // const options = {
      //   docId: `/${activeSectionId}`,
      //   cursorData: {
      //     name,
      //     color,
      //     alphaColor: color.slice(0, -2) + '0.2)'
      //   },
      //   url: `${origin}/${activeSectionId}`,
      //   connectOpts: {
      //     'transports': ['websocket'],
      //     query: {
      //       name,
      //       token: 'id',
      //       type: 'document',
      //       slug: activeSectionId,
      //     }
      //   },
      // }

      // return withNodeId(withPlugins)
    },
    []
  )

  const sendOp = (...args) => {
    console.log("🚀 ~ file: App.js ~ line 56 ~ sendOp ~ args", args)
    return new Promise((resolve, reject) => {
      doc.submitOp(...args, () => {
        resolve()
      })
    })
  }

  React.useEffect(() => {
    doc.subscribe(() => {
      syncMutex.current = true
      updateEditorState(doc.data.children)
      console.log("🚀 ~ file: useCollaborative.js ~ line 45 ~ doc.subscribe ~ doc.data.children", doc.data.children)
      syncMutex.current = false
    })

    doc.on('op', () => {
      console.log('doc data', doc.data)
      syncMutex.current = true
      editor.selection = doc.data.selection
      updateEditorState(doc.data.children)
      syncMutex.current = false
    })

  }, [])

  const onEditorStateChange = (newValue) => {
    oldValue.current = { selection: oldSelection.current, children: editorState }
    const diff = jsondiff(oldValue, { selection: editor.selection, children: newValue })
    oldSelection.current = editor.selection
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
    activeSectionId
  }
}

export default useDocument
