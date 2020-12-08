import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { teamActions, teamSelectors } from 'logic/team'

import arrowLeftIcon from 'assets/arrow-left.svg'
import MentionIcon from 'assets/components/MentionIcon'
import homeIcon from 'assets/home.svg'
import * as teamServices from 'services/team'
import IconButton from 'atoms/IconButton'
import ContentToggler from 'atoms/ContentToggler'
import UserCard from 'molecules/UserCard'
import ListItem from 'molecules/ListItem'

import ToggleTeams from './components/ToggleTeams'

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

const StyledTeamListContainer = styled.div`
  margin-left: 15px;
  margin-top: 5px;
  display: grid;
  align-items: start;
  grid-row-gap: 5px;
`

const LeftMenu = ({ toggleNavbar }) => {
  const dispatch = useDispatch()
  const activeUser = useSelector(state => state.get('auth'))
  const activeTeamId = useSelector(teamSelectors.selectActiveTeamId)
  const teams = useSelector(state => state.getIn(['entities', 'teams']))

  const chooseTeam = (team) => () => {
    if (activeTeamId === team.get('id')) return

    dispatch(teamActions.setActiveTeam(team.get('id')))
    teamServices.setCurrentTeam({ teamId: team.get('id') }) // update currentTeam on authenticated user
  }

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

        <ContentToggler
          displayTrigger
          trigger={<ToggleTeams />}
        >
          <StyledTeamListContainer>
            {teams
              .map(team => (
                <ListItem
                  onClick={chooseTeam(team)}
                  active={team.get('id') === activeTeamId}
                  key={team.get('id')}
                  icon={<MentionIcon fill="#fff" size={18} />}
                  label={team.get('name')}
                  proportions="18px auto"
                />))
              .toList()}
          </StyledTeamListContainer>
        </ContentToggler>
      </StyledGridContainer>
    </StyledContainer>
  )
}

LeftMenu.propTypes = {
  toggleNavbar: PropTypes.func,
}

export default LeftMenu
