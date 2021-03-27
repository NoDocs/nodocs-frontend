import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { PortalContext } from 'contexts'
import { companyActions } from 'logic/company'
import { notificationActions } from 'logic/notification'
import Avatar from 'atoms/Avatar'
import Label from 'atoms/Label'
import ListItem from 'molecules/ListItem'
import Popup from 'molecules/Popup'
import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'graphql'

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
        name
      }
    }
  }
`

const UserCard = () => {
  const { me } = useLazyLoadQuery(MeQuery)
  const { closePortal } = React.useContext(PortalContext)
  const dispatch = useDispatch()

  const switchCompany = company => () => {
    dispatch(companyActions.setActiveCompany(company.get('id')))
    dispatch(notificationActions.notify({
      type: 'success',
      message: `Switched to ${company.get('name')} company`
    }))
    closePortal('switch-company-popup')
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
        >
          mda
        </StyledPopup>
      </div>
    </StyledContainer>
  )
}

UserCard.propTypes = {
  user: PropTypes.object
}

export default UserCard
