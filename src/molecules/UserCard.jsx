import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useLazyLoadQuery, useMutation } from 'react-relay'
import { graphql } from 'graphql'

import { PortalContext } from 'contexts'
import { notificationActions } from 'logic/notification'
import Avatar from 'atoms/Avatar'
import Label from 'atoms/Label'
import ListItem from 'molecules/ListItem'
import Popup from 'molecules/Popup'

const StyledContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 14px;
  grid-template-columns: 35px auto;
  align-items: center;
`

const StyledUserName = styled(Label)`
  margin-bottom: 5px;
`

const StyledPopup = styled(Popup)`
  width: 150px !important;
`

const StyledLabel = styled(Label)`
  cursor: pointer;
`

const MeQuery = graphql`
  query UserCardQuery {
    me {
      id
      fullName
      color
      email

      currentCompany {
        id
        name
      }
    }

    availableCompanies {
      id
      name
    }
  }
`

const switchCompanyMutation = graphql`
  mutation UserCardMutation($input: SwitchCompanyInput!) {
    switchCompany(input: $input) {
      company {
        id
      }
    }
  }
`

const UserCard = () => {
  const [switchCompany] = useMutation(switchCompanyMutation)
  const { me, availableCompanies } = useLazyLoadQuery(MeQuery)
  const { closePortal } = React.useContext(PortalContext)
  const dispatch = useDispatch()

  const onSwitchCompany = company => () => {
    switchCompany({
      variables: {
        input: {
          companyId: company.id,
        }
      },
      updater: (store) => {
        const newCompany = store
          .getRootField('switchCompany')
          .getLinkedRecord('company')

        store
          .getRoot()
          .getLinkedRecord('me')
          .setLinkedRecord(newCompany, 'currentCompany')
      },
      onCompleted: () => {
        dispatch(notificationActions.notify({
          type: 'success',
          message: `Switched to ${company.name} company`
        }))
        closePortal('switch-company-popup')
      }
    })
  }

  return (
    <StyledContainer>
      <Avatar name={me.fullName} avatar={me.avatar} color={me.color} />

      <div>
        <StyledUserName color="active" title={me.email} weight={500}>
          {me.fullName}
        </StyledUserName>

        <StyledPopup
          name="switch-company-popup"
          trigger={<StyledLabel color="active">{me.currentCompany.name}</StyledLabel>}
          disabled={!availableCompanies.length}
        >
          {availableCompanies
            .filter(company => company.id !== me.currentCompany.id)
            .map(company => <ListItem key={company.id} label={company.name} onClick={onSwitchCompany(company)} color="black" />)}
        </StyledPopup>
      </div>
    </StyledContainer>
  )
}

UserCard.propTypes = {
  user: PropTypes.object
}

export default UserCard
