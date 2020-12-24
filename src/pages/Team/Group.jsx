import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import { useDispatch, useSelector } from 'react-redux'

import history from 'utils/history'
import * as documentServices from 'services/document'
import { documentActions, documentSelectors } from 'logic/document'

import Table from 'molecules/Table'
import Toggle from 'molecules/Toggle'
import UserIcon from 'assets/userIcon.svg'

const StyledToggle = styled(Toggle)`
  margin-bottom: 10px;
`

const Group = ({ group }) => {
  const [loading, setLoading] = React.useState(true)

  const documents = useSelector(documentSelectors.selectDocumentsByGroup(group.get('id')))
  const dispatch = useDispatch()

  React.useEffect(
    () => {
      documentServices
        .getDocuments({ userId: group.get('id') })
        .then(response => {
          const { data } = response
          dispatch(documentActions.putDocuments({ groupId: group.get('id'), documents: data }))
          setLoading(false)
        })
        .catch(() => setLoading(false))
    },
    []
  )

  const createDocument = () => {
    const params = {
      content: JSON.stringify([{
        type: 'page',
        id: shortid.generate(),
        name: 'Untitled',
        children: [{ type: 'paragraph', id: shortid.generate(), children: [{ text: '' }] }]
      }])
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
    <StyledToggle title={group.get('fullName')}>
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

Group.propTypes = {
  group: PropTypes.object,
}

export default Group
