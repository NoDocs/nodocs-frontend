import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import * as documentServices from 'services/document'
import { documentActions, documentSelectors } from 'logic/document'

const useDocument = () => {
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

  return { pages }
}

export default useDocument
