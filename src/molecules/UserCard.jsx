import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { PortalContext } from 'contexts'
import { companyActions, companySelectors } from 'logic/company'
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

const UserCard = ({ user }) => {
  const { closePortal } = React.useContext(PortalContext)
  const activeCompanyName = useSelector(companySelectors.selectCompanyProperty('name'))
  const availableCompanies = useSelector(companySelectors.selectAvailableCompanies)
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
      <Avatar userId={user.get('id')} color={user.get('color')} />

      <div>
        <StyledUserName
          color="active"
          title={user.get('email')}
          weight={500}
        >
          {user.get('fullName')}
        </StyledUserName>

        <StyledPopup
          name="switch-company-popup"
          trigger={<StyledLabel color="active">{activeCompanyName}</StyledLabel>}
          disabled={!availableCompanies.size}
        >
          {availableCompanies
            .map(company => (
              <ListItem
                key={company.get('id')}
                label={company.get('name')}
                onClick={switchCompany(company)}
                color="black"
              />
            ))
            .toList()}
        </StyledPopup>
      </div>
    </StyledContainer>
  )
}

UserCard.propTypes = {
  user: PropTypes.object
}
export default UserCard
