import React from 'react'
import { createEditor } from 'slate'
import { withReact, useSlate } from 'slate-react'
import { useSelector } from 'react-redux'
import { withIOCollaboration } from '@slate-collaborative/client'

import { authSelectors } from 'logic/auth'
import { documentSelectors } from 'logic/document'

import withEditableComponentVoid from '../plugins/withEditableComponentVoid'
import withDetectComponentInsert from '../plugins/withDetectComponentInsert'
import withRectangleSelect from '../plugins/withRectangleSelect'
import withPage from '../plugins/withPage'
import withNodeId from '../plugins/withNodeId'

const usePage = ({ id }) => {
  const sectionEditor = useSlate()
  const content = useSelector(documentSelectors.selectPageProperty('content'), () => id)
  const [editorState, updateEditorState] = React.useState(content
    ? JSON.parse(content)
    : null
  )

  const name = useSelector(authSelectors.selectCurrUserProperty('fullName'))
  const color = useSelector(authSelectors.selectCurrUserProperty('color')) || '#ffffff'

  React.useEffect(
    () => {
      const parsed = JSON.parse(content)
      updateEditorState(parsed)
    },
    []
  )

  const editor = React.useMemo(
    () => {
      const withPlugins = withEditableComponentVoid(
        withRectangleSelect(
          withDetectComponentInsert(
            withPage(sectionEditor)(
              withReact(
                createEditor()
              )
            )
          )
        )
      )

      const origin = process.env.NODE_ENV === 'production'
        ? process.env.BASE_API_URL
        : 'http://localhost:8000'

      const options = {
        docId: `/${id}`,
        cursorData: {
          name,
          color,
          alphaColor: color.slice(0, -2) + '0.2)'
        },
        url: `${origin}/${id}`,
        connectOpts: {
          query: {
            name,
            token: 'id',
            type: 'document',
            slug: id,
          }
        },
      }

      const withCollaborativeEditor = withIOCollaboration(withPlugins, options)

      return withNodeId(withCollaborativeEditor)
    },
    []
  )

  React.useEffect(
    () => {
      if (!editor.connect) return

      editor.connect()
      return editor.destroy
    },
    [editor]
  )

  const onEditorChange = (newEditorState) => {
    updateEditorState(newEditorState)
  }

  return {
    editor,
    editorState,
    onEditorChange,
  }
}

export default usePage

