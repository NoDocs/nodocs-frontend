import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import IconButton from 'atoms/IconButton'
import ContentToggler from 'atoms/ContentToggler'
import UserCard from 'molecules/UserCard'
import ListItem from 'molecules/ListItem'

import arrowLeftIcon from 'assets/arrow-left.svg'
import homeIcon from 'assets/home.svg'
import teamsIcon from 'assets/teams.svg'

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
`

const LeftMenu = ({ toggleNavbar }) => {
  const activeUser = useSelector(state => state.get('auth'))
  const teams = useSelector(state => state.getIn(['entities', 'teams']))

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
          trigger={(<ListItem icon={teamsIcon} label="Teams" />)}
        >
          <SubListContainer>
            {teams.map(team => (
              <ListItem
                key={'123s'}
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
