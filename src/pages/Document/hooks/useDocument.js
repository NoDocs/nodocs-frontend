import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createEditor } from 'slate'
import { withReact } from 'slate-react'

import * as documentServices from 'services/document'
import { documentActions, documentSelectors } from 'logic/document'
import withEditablePageVoid from '../plugins/withEditablePageVoid'

const useDocument = () => {
  const [sectionState, updateSectionState] = React.useState()

  const params = useParams()
  const dispatch = useDispatch()
  const pages = useSelector(documentSelectors.selectSectionProperty('pages'))

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
      if (!pages) return

      const newSectionState = pages.map(pageId => ({
        type: 'page',
        id: pageId,
        children: [{ text: '' }],
      }))

      updateSectionState(newSectionState)
    },
    [pages]
  )

  const editor = withEditablePageVoid(withReact(createEditor()))

  return { pages, editor, sectionState, updateSectionState }
}

export default useDocument
