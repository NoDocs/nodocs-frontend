import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Avatar from 'atoms/Avatar'
import Label from 'atoms/Label'
import * as companyServices from 'services/company'
import { companyActions, companySelectors } from 'logic/company'
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
  const activeCompanyName = useSelector(companySelectors.selectCompanyProperty('name'))
  const availableCompanies = useSelector(companySelectors.selectAvailableCompanies)
  const dispatch = useDispatch()

  const switchCompany = companyId => () => {
    dispatch(companyActions.setActiveCompany(companyId))
    companyServices.setCurrentCompany({ companyId })
  }

  return (
    <StyledContainer>
      <Avatar userId={user.get('id')} color={user.get('color')} />

      <div>
        <StyledUserName color="active" weight={500}>{user.get('fullName')}</StyledUserName>

        <StyledPopup
          name="switch-company-popup"
          trigger={<StyledLabel color="active">{activeCompanyName}</StyledLabel>}
        >
          {availableCompanies
            .map(company => (
              <ListItem
                key={company.get('id')}
                label={company.get('name')}
                onClick={switchCompany(company.get('id'))}
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
