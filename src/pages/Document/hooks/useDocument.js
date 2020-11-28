import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createEditor } from 'slate'
import { withReact } from 'slate-react'

import * as documentServices from 'services/document'
import { documentActions, documentSelectors } from 'logic/document'
import withNodeId from '../plugins/withNodeId'
import withRectangleSelect from '../plugins/withRectangleSelect'
import withPage from '../plugins/withPage'
import withDetectComponentInsert from '../plugins/withDetectComponentInsert'
import withEditableComponentVoid from '../plugins/withEditableComponentVoid'

const useDocument = () => {
  const [editorState, updateEditorState] = React.useState(content
    ? JSON.parse(content)
    : null
  )

  const editor = React.useMemo(
    () => {
      const withPlugins = withEditableComponentVoid(
        withRectangleSelect(
          withPage(
            withDetectComponentInsert(
              withNodeId(
                withReact(
                  createEditor()
                )
              )
            )
          )
        )
      )

      return withPlugins
    },
    []
  )

  const params = useParams()
  const dispatch = useDispatch()

  const activeSectionId = useSelector(documentSelectors.selectActiveSectionId)
  const content = useSelector(documentSelectors.selectSectionProperty('content'))

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

    // documentServices
  }

  return {
    editor,
    editorState,
    onEditorChange,
  }
}

export default useDocument
