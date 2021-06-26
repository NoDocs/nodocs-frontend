import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router'

import SearchIcon from 'assets/search.svg'
import UpdatesIcon from 'assets/updates.svg'
import AddIcon from 'assets/add.svg'
import TeamsIcon from 'assets/teams.svg'
import LikeIcon from 'assets/star.svg'
import HomeIcon from 'assets/home.svg'
import UserCard from 'molecules/UserCard'
import ListItem from 'molecules/ListItem'
import LoadingTeams from 'loadings/LoadingTeams'
import LoadingUserCard from 'loadings/LoadingUserCard'

import TeamNavigation from './TeamNavigation'

const StyledLeftMenuContainer = styled.div`
  grid-area: left;
  width: 336px;
  background-color: #1E1F23;
  display: flex;
  align-items: flex-start;
`

const StyledContainer = styled.div`
  padding: 16px 24px 0px;
  padding-left: 16px;
  width: 280px;
  box-sizing: border-box;
`

const StyledLeftMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  align-items: center;
`

const StyledGridContainer = styled.div`
  display: grid;
  grid-row-gap: 2px;
`

const StyledSeparator = styled.div`
  opacity: 0.3;
  border: 1px solid rgba(255, 255, 255, 0.4);
  opacity: 0.3;
  margin: 12px 0px;
`

const LeftMenu = () => {
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
        </StyledLeftMenuHeader>

        <StyledGridContainer>
          <ListItem icon={<SearchIcon />} label="Search" />
          <ListItem icon={<UpdatesIcon />} label="Updates" />
          <ListItem icon={<AddIcon color="rgba(255, 255, 255, 0.5)" />} label="Invite" />

          <StyledSeparator />

          <ListItem active={pathname === '/me'} icon={<HomeIcon />} label="Personal" />
          <ListItem active={pathname === '/'} icon={<TeamsIcon />} label="Team" />

          <StyledSeparator />

          <ListItem icon={<LikeIcon />} label="Starred" />
        </StyledGridContainer>
      </StyledContainer>
    </StyledLeftMenuContainer>
  )
}

export default LeftMenu
