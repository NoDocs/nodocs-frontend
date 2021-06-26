import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useLazyLoadQuery, useMutation } from 'react-relay'
import { graphql } from 'graphql'

import { PortalContext } from 'contexts'
import { notificationActions } from 'logic/notification'
import Avatar from 'atoms/Avatar'
import Popup from 'molecules/Popup'
import Typography from 'molecules/Typography'

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 18px;
  justify-content: space-between;
`

const StyledTeamName = styled(Typography)`color: white;`
const StyledPopup = styled(Popup)`width: 150px !important;`

const MeQuery = graphql`
  query UserCardQuery {
    me {
      id
      fullName
      color
      email

      currentTeam {
        name
      }

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
      <StyledTeamName variant="h6">
        {me.currentTeam.name}
      </StyledTeamName>

      <StyledPopup
        name="user-popup"
        trigger={<Avatar name={me.fullName} size={24} avatar={me.avatar} color={me.color} />}
      >
        Something here !!
      </StyledPopup>
    </StyledContainer>
  )
}

UserCard.propTypes = {
  user: PropTypes.object
}

export default UserCard
