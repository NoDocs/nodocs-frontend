import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Avatar from 'atoms/Avatar'
import Label from 'atoms/Label'

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

const UserCard = ({ user }) => (
  <StyledContainer>
    <Avatar src={'../../src/assets/photo.png'} color={user.get('color')} />

    <div>
      <StyledUserName color="active" weight={500}>{user.get('fullName')}</StyledUserName>
      <Label color="active">Apple Inc.</Label>
    </div>
  </StyledContainer>
)

UserCard.propTypes = {
  user: PropTypes.object
}
export default UserCard
