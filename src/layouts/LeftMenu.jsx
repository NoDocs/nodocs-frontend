import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useLocation } from 'react-router'

import SearchIcon from 'assets/search.svg'
import UpdatesIcon from 'assets/updates.svg'
import AddIcon from 'assets/add.svg'
import ExploreIcon from 'assets/explore.svg'
import TeamsIcon from 'assets/teams.svg'
import LikeIcon from 'assets/star.svg'
import ArrowLeftIcon from 'assets/arrow-left.svg'
import HomeIcon from 'assets/home.svg'

import IconButton from 'atoms/IconButton'
import UserCard from 'molecules/UserCard'
import ListItem from 'molecules/ListItem'

import TeamNavigation from './TeamNavigation'
import LoadingTeams from 'loaders/LoadingTeams'
import LoadingUserCard from 'loaders/LoadingUserCard'

const StyledLeftMenuContainer = styled.div`
  grid-area: left;
  width: 352px;
  background-color: black;
  display: flex;
  align-items: flex-start;
`

const StyledContainer = styled.div`
  padding: 16px 24px 0px;
  width: 280px;
  box-sizing: border-box;
`

const StyledLeftMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
`

const StyledGridContainer = styled.div`
  display: grid;
  grid-row-gap: 2px;
`

const StyledSeparator = styled.div`
  opacity: 0.3;
  border: 1px solid #F2F2F2;
  margin: 20px 0px;
`

const StyledIconButton = styled(IconButton)`
  position: relative;
  right: -10px;
`

const LeftMenu = ({ toggleNavbar }) => {
  const { pathname } = useLocation()

  return (
    <StyledLeftMenuContainer>
      <React.Suspense fallback={<LoadingTeams />}>
        <TeamNavigation />
      </React.Suspense>

      <StyledContainer>
        <StyledLeftMenuHeader>
          <React.Suspense fallback={<LoadingUserCard />}>
            <UserCard />
          </React.Suspense>

          <StyledIconButton onClick={() => toggleNavbar(false)}>
            <ArrowLeftIcon />
          </StyledIconButton>
        </StyledLeftMenuHeader>

        <StyledGridContainer>
          <ListItem icon={<SearchIcon />} label="Search" />
          <ListItem icon={<UpdatesIcon />} label="Updates" />
          <ListItem icon={<AddIcon />} label="Invite" />

          <StyledSeparator />

          <ListItem icon={<ExploreIcon />} label="Explore" />
          <ListItem active={pathname === '/me'} icon={<HomeIcon />} label="Private" />
          <ListItem active={pathname === '/'} icon={<TeamsIcon />} label="Team" />

          <StyledSeparator />

          <ListItem icon={<LikeIcon />} label="Starred" />
        </StyledGridContainer>
      </StyledContainer>
    </StyledLeftMenuContainer>
  )
}

LeftMenu.propTypes = {
  toggleNavbar: PropTypes.func,
}

export default LeftMenu
