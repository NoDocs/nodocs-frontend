import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import * as documentServices from 'services/document'
import { documentActions, documentSelectors } from 'logic/document'
import SectionEditor from './SectionEditor'

const Document = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const activeSectionId = useSelector(documentSelectors.selectActiveSectionId)

  React.useEffect(
    () => {
      const fetchDocument = async () => {
        const docId = params.documentId
        const { data: doc } = await documentServices.getDocument(docId)

        dispatch(documentActions.putDocuments({ documents: [doc] }))
        dispatch(documentActions.initializeDocument(doc))
      }

      fetchDocument()
    },
    []
  )

  return activeSectionId
    ? <SectionEditor />
    : <p>Loading Document...</p>
}

export default Document
