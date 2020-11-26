import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import arrowLeftIcon from 'assets/arrow-left.svg'
import homeIcon from 'assets/home.svg'
import teamsIcon from 'assets/teams.svg'
import IconButton from 'atoms/IconButton'
import UserCard from 'molecules/UserCard'
import ListItem from 'molecules/ListItem'

const StyledContainer = styled.div`
  grid-area: left;
  width: 300px;
  background-color: black;
  padding-left: 28px;
  padding-top: 13px;
  padding-right: 17px;
  box-sizing: border-box;
`

const StyledLeftMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

const StyledGridContainer = styled.div`
  display: grid;
  grid-row-gap: 2px;
`

const LeftMenu = ({ toggleNavbar }) => {
  const activeUser = useSelector(state => state.get('auth'))

  return (
    <StyledContainer>
      <StyledLeftMenuHeader>
        <UserCard user={activeUser} />

        <IconButton onClick={() => toggleNavbar(false)}>
          <img src={arrowLeftIcon} />
        </IconButton>
      </StyledLeftMenuHeader>

      <StyledGridContainer>
        <ListItem active icon={homeIcon} label="Home" />
        <ListItem icon={homeIcon} label="Explore" />
        <ListItem icon={homeIcon} label="Community" />
        <ListItem icon={homeIcon} label="Private" />
        <ListItem icon={teamsIcon} label="Teams" />
      </StyledGridContainer>
    </StyledContainer>
  )
}

LeftMenu.propTypes = {
  toggleNavbar: PropTypes.func,
}

export default LeftMenu
