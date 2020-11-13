import React from 'react'
import styled from 'styled-components'

import arrowLeftIcon from 'assets/arrow-left.svg'
import Label from 'atoms/Label'
import Avatar from 'atoms/Avatar'
import UserCard from 'molecules/UserCard'

const StyledContainer = styled.div`
  width: 300px;
  background-color: black;
  padding-left: 28px;
  padding-top: 13px;
  padding-right: 17px;
`

const StyledLeftMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const LeftMenu = () => (
  <StyledContainer>
    <StyledLeftMenuHeader>
      <UserCard />
      <img src={arrowLeftIcon} alt="collapse" />
    </StyledLeftMenuHeader>
  </StyledContainer>
)

export default LeftMenu
