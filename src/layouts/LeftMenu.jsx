import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { teamActions } from 'logic/team'

import IconButton from 'atoms/IconButton'
import ContentToggler from 'atoms/ContentToggler'
import UserCard from 'molecules/UserCard'
import ListItem from 'molecules/ListItem'
import ToggleListItem from 'molecules/ToggleListItem'
import history from 'utils/history'

import arrowLeftIcon from 'assets/arrow-left.svg'
import homeIcon from 'assets/home.svg'
import teamsIcon from 'assets/teams.svg'
import AddIcon from 'assets/components/AddIcon'
import ArrowDownIcon from 'assets/components/ArrowDownIcon'

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
const SubListContainer = styled.div`
  margin-left: 10px;
  display: grid;
  align-items: start;
  grid-row-gap: 5px;
`

const StyledIconContainer = styled.div`
  transition: all .2s ease;
  transform: ${p => p.isOpen ? null : 'rotate(180deg)'};
  display: flex;
  align-items: center;
`

const StyledAdditionButtons = styled.div`
  display: grid;
  grid-auto-flow: column;
  color: #fff;
`

const LeftMenu = ({ toggleNavbar }) => {
  const dispatch = useDispatch()
  const activeUser = useSelector(state => state.get('auth'))
  const teams = useSelector(state => state.getIn(['entities', 'teams']))

  const chooseTeam = (team) => {
    dispatch(teamActions.setActiveTeam(team.get('id')))
  }

  const renderAdditionalButtons = (active) => {
    return (
      <StyledAdditionButtons>
        <IconButton onClick={() => history.push('/create-team')}>
          <AddIcon fill="#fff" height={12} />
        </IconButton>

        <StyledIconContainer isOpen={active}>
          <ArrowDownIcon fill="#fff" />
        </StyledIconContainer>
      </StyledAdditionButtons>
    )
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
          trigger={(
            <ToggleListItem
              icon={teamsIcon}
              label="Teams"
              proportions='22px auto 22px'
              renderAdditionalButtons={renderAdditionalButtons}
            />
          )}
        >
          <SubListContainer>
            {teams.map(team => (
              <ListItem
                onClick={() => chooseTeam(team)}
                key={team.get('id')}
                label={`@ ${team.get('name')}`}
                proportions='1fr' />
            )).toList()}
          </SubListContainer>
        </ContentToggler>
      </StyledGridContainer>
    </StyledContainer>
  )
}

LeftMenu.propTypes = {
  toggleNavbar: PropTypes.func,
}

export default LeftMenu
