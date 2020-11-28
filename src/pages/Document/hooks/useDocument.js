import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createEditor } from 'slate'
import { withReact } from 'slate-react'
import { withIOCollaboration } from '@slate-collaborative/client'

import * as documentServices from 'services/document'
import { documentActions, documentSelectors } from 'logic/document'
import { authSelectors } from 'logic/auth'
import withNodeId from '../plugins/withNodeId'
import withRectangleSelect from '../plugins/withRectangleSelect'
import withDetectComponentInsert from '../plugins/withDetectComponentInsert'
import withEditableComponentVoid from '../plugins/withEditableComponentVoid'

const useDocument = () => {
  const [editorState, updateEditorState] = React.useState(content
    ? JSON.parse(content)
    : null
  )

  const name = useSelector(authSelectors.selectCurrUserProperty('name'))
  const color = useSelector(authSelectors.selectCurrUserProperty('color')) || '#ffffff'
  const activeSectionId = useSelector(documentSelectors.selectActiveSectionId)
  const content = useSelector(documentSelectors.selectSectionProperty('content'))

  const editor = React.useMemo(
    () => {
      const withPlugins = withEditableComponentVoid(
        withRectangleSelect(
          withDetectComponentInsert(
            withNodeId(
              withReact(
                createEditor()
              )
            )
          )
        )
      )

      const origin = process.env.NODE_ENV === 'production'
        ? window.location.origin
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

      return withIOCollaboration(withPlugins, options)
    },
    [activeSectionId]
  )

  const params = useParams()
  const dispatch = useDispatch()

  React.useEffect(
    () => {
      const fetchDocument = async () => {
        const docId = params.documentId
        const { data: doc } = await documentServices.getDocument(docId)

        dispatch(documentActions.initializeDocument(doc))
      }

      fetchDocument()
    },
    []
  )

  React.useEffect(
    () => {
      if (activeSectionId) {
        const parsed = JSON.parse(content)
        updateEditorState(parsed)
      }
    },
    [activeSectionId]
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

export default useDocument
