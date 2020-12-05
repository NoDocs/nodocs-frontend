import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import * as teamServices from 'services/team'
import { documentActions } from 'logic/document'

import Table from 'molecules/Table'
import Toggle from 'molecules/Toggle'
import UserIcon from 'assets/userIcon.svg'

const Collection = ({ id }) => {
  const dispatch = useDispatch()
  const documents = useSelector(state => state.getIn(['entities', 'documents']))

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
    <>
      <Toggle title={`Collection: ${id}`}>
        <Table
          proportions="38px 405px 1fr 1fr 1fr 1fr"
          headerTabs={[
            { content: '', position: '' },
            { content: 'Name', position: 'left' },
            { content: 'Subscribers', position: 'center' },
            { content: 'Linked to', position: 'center' },
            { content: 'Mentions', position: 'center' },
            { content: <img key="icon" src={UserIcon} />, }
          ]}
          data={documents}
        />
      </Toggle>
    </>
  )
}

Collection.propTypes = {
  id: PropTypes.string,
}

export default Collection
