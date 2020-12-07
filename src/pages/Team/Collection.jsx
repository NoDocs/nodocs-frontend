import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import { useDispatch, useSelector } from 'react-redux'

import history from 'utils/history'
import * as teamServices from 'services/team'
import * as documentServices from 'services/document'
import { documentActions, documentSelectors } from 'logic/document'
import { teamSelectors } from 'logic/team'

import Table from 'molecules/Table'
import Toggle from 'molecules/Toggle'
import UserIcon from 'assets/userIcon.svg'

const StyledToggle = styled(Toggle)`
  margin-bottom: 10px;
`

const Collection = ({ id }) => {
  const [loading, setLoading] = React.useState(true)

  const dispatch = useDispatch()
  const documents = useSelector(documentSelectors.selectDocumentsByCollection(id))
  const collectionName = useSelector(teamSelectors.selectCollectionProperty('name', id))

  React.useEffect(
    () => {
      teamServices
        .getCollection(id)
        .then(response => {
          const { data: { documents } } = response
          dispatch(documentActions.putDocuments({ collectionId: id, documents }))
          setLoading(false)
        })
        .catch(() => setLoading(false))
    },
    []
  )

  const createDocument = () => {
    const params = {
      collectionId: id,
      content: JSON.stringify([
        { type: 'paragraph', id: shortid.generate(), children: [{ text: '' }] },
      ])
    }

    documentServices
      .createDocument(params)
      .then(response => {
        const { data } = response

        dispatch(documentActions.createDocument(data))
        history.push(`/d/${data.id}`)
      })
  }

  if (loading) return <div>Loading</div>

  return (
    <StyledToggle title={collectionName}>
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
        createDocument={createDocument}
      />
    </StyledToggle>
  )
}

Collection.propTypes = {
  id: PropTypes.string,
}

export default Collection
