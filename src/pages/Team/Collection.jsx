import React from 'react'
import PropTypes from 'prop-types'

import * as documentServices from 'services/document'

const Collection = ({ id }) => {
  React.useEffect(
    () => {
      documentServices
        .getDocuments({ collectionId: id })
        .then(console.log)
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
