import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import * as teamServices from 'services/team'
import { documentActions } from 'logic/document'

const Collection = ({ id }) => {
  const dispatch = useDispatch()

  React.useEffect(
    () => {
      teamServices
        .getCollection(id)
        .then(response => {
          const { data: { documents } } = response

          dispatch(documentActions.putDocuments({ collectionId: id, documents }))
        })
    },
    []
  )

  return (
    <div>Collection: {id}</div>
  )
}

Collection.propTypes = {
  id: PropTypes.string,
}

export default Collection
