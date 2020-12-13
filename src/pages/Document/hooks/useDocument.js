import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { withReact } from 'slate-react'
import { createEditor } from 'slate'
import { withIOCollaboration } from '@slate-collaborative/client'

import { authSelectors } from 'logic/auth'
import {documentSelectors } from 'logic/document'

import withEditableComponentVoid from '../plugins/withEditableComponentVoid'
import withRectangleSelect from '../plugins/withRectangleSelect'
import withDetectComponentInsert from '../plugins/withDetectComponentInsert'
import withPagination from '../plugins/withPagination'
import withNodeId from '../plugins/withNodeId'

const useDocument = () => {
  const content = useSelector(documentSelectors.selectSectionProperty('content'))
  const [editorState, updateEditorState] = React.useState(
    content
      ? JSON.parse(content)
      : null
  )

  const name = useSelector(authSelectors.selectCurrUserProperty('fullName'))
  const color = useSelector(authSelectors.selectCurrUserProperty('color')) || '#ffffff'
  const activeSectionId = useSelector(documentSelectors.selectSectionProperty('sectionId'))

  React.useEffect(
    () => {
      const parsed = JSON.parse(content)
      updateEditorState(parsed)
    },
    [content]
  )

  const editor = React.useMemo(
    () => {
      const withPlugins = withEditableComponentVoid(
        withRectangleSelect(
          withDetectComponentInsert(
            withPagination(
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
        docId: `/${activeSectionId}`,
        cursorData: {
          name,
          color,
          alphaColor: color.slice(0, -2) + '0.2)'
        },
        url: `${origin}/${activeSectionId}`,
        connectOpts: {
          query: {
            name,
            token: 'id',
            type: 'document',
            slug: activeSectionId,
          }
        },
      }

      return withNodeId(withIOCollaboration(withPlugins, options))
    },
    []
  )

  React.useEffect(
    () => {
      editor.connect()
      return editor.destroy
    },
    [editor]
  )

  return {
    editor,
    editorState,
    updateEditorState,
  }
}

export default useDocument
