import React from 'react'
import { createEditor } from 'slate'
import { withReact } from 'slate-react'
import { useSelector } from 'react-redux'
import { withIOCollaboration } from '@slate-collaborative/client'

import { authSelectors } from 'logic/auth'
import { documentSelectors } from 'logic/document'

import withEditableComponentVoid from '../plugins/withEditableComponentVoid'
import withDetectComponentInsert from '../plugins/withDetectComponentInsert'
import withRectangleSelect from '../plugins/withRectangleSelect'
import withPage from '../plugins/withPage'
import withNodeId from '../plugins/withNodeId'

const usePage = () => {
  const [editorState, updateEditorState] = React.useState(content
    ? JSON.parse(content)
    : null
  )

  const name = useSelector(authSelectors.selectCurrUserProperty('name'))
  const color = useSelector(authSelectors.selectCurrUserProperty('color')) || '#ffffff'
  const activePageId = useSelector(documentSelectors.selectActivePageId)
  const content = useSelector(documentSelectors.selectPageProperty('content'))

  const editor = React.useMemo(
    () => {
      const withPlugins = withEditableComponentVoid(
        withRectangleSelect(
          withDetectComponentInsert(
            withPage(
              withNodeId(
                withReact(
                  createEditor()
                )
              )
            )
          )
        )
      )

      if (!activePageId) return withPlugins

      const origin = process.env.NODE_ENV === 'production'
        ? window.location.origin
        : 'http://localhost:8000'

      const options = {
        docId: `/${activePageId}`,
        cursorData: {
          name,
          color,
          alphaColor: color.slice(0, -2) + '0.2)'
        },
        url: `${origin}/${activePageId}`,
        connectOpts: {
          query: {
            name,
            token: 'id',
            type: 'document',
            slug: activePageId,
          }
        },
      }

      return withIOCollaboration(withPlugins, options)
    },
    [activePageId]
  )

  React.useEffect(
    () => {
      if (activePageId) {
        const parsed = JSON.parse(content)
        updateEditorState(parsed)
      }
    },
    [activePageId]
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

