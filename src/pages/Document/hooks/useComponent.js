import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useComponent = ({ componentId }) => {
  const params = useParams()
  const rootDocumentId = useSelector(state => state.getIn(['components', componentId, 'rootDocument', 'id']))

  const isImported = React.useMemo(
    () => parseInt(params.documentId, 10) === rootDocumentId,
    []
  )

  return {
    isImported,
    rootDocumentId,
  }
}

export default useComponent
