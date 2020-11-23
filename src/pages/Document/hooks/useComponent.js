import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createEditor } from 'slate'
import { withReact } from 'slate-react'
import { withIOCollaboration } from '@slate-collaborative/client'

import * as componentServices from 'services/component'
import { componentActions } from 'logic/component'

const useComponent = ({ componentId }) => {
  const params = useParams()
  const dispatch = useDispatch()
  const content = useSelector(state => state.getIn(['components', componentId, 'content']))
  const rootDocumentId = useSelector(state => state.getIn(['components', componentId, 'rootDocument', 'id']))
  const userName = useSelector(state => state.getIn(['auth', 'fullName']))
  const [editorState, updateEditorState] = React.useState(content
    ? JSON.parse(content)
    : null)

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
    () => {
      const slateEditor = withReact(createEditor())

      const origin =
      process.env.NODE_ENV === 'production'
        ? window.location.origin
        : 'https://api.nodocs.app'

      const options = {
        docId: '/' + componentId,
        url: `${origin}/${componentId}`,
        connectOpts: {
          query: {
            name: userName,
            token: 'id',
            type: 'component',
            slug: componentId
          },
          'transports': ['websocket'],
          secure: true
        },
      }

      return withIOCollaboration(slateEditor, options)
    },
    []
  )

  React.useEffect(
    () => {
      editor.connect()
      return editor.destroy
    },
    []
  )

  const onEditorStateChange = (newEditorState) => {
    updateEditorState(newEditorState)
  }

  const isImported = React.useMemo(
    () => parseInt(params.documentId, 10) === rootDocumentId,
    []
  )

  return {
    editorState,
    onEditorStateChange,
    isImported,
    rootDocumentId,
    editor,
  }
}

export default useComponent
