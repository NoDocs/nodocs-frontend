import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as documentServices from 'services/document'
import { documentActions } from 'logic/document'

const useDocument = () => {
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
}

export default useDocument
