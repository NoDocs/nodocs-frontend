import React from 'react'
import styled from 'styled-components'
import { graphql } from 'graphql'
import { useLazyLoadQuery } from 'react-relay'

import Title from 'atoms/Title'

const StyledTeamNavigationContainer = styled.div`
  width: 72px;
  height: 100vh;
  display: grid;
  grid-row-gap: 10px;
  justify-content: center;
  border-right: 2px solid rgba(255, 255, 255, 0.2);
  padding-top: 18px;
  box-sizing: border-box;
`

const StyledTeam = styled.div`
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 5px 15px 5px 5px;
  height: 40px;
  width: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${props => props.active && 'box-shadow: 0px 0px 5px white;'}
`

const TeamsQuery = graphql`
  query TeamNavigationQuery {
    me {
      currentTeam {
        id
      }
    }
    teams {
      id
      name
    }
  }
`

const TeamNavigation = () => {
  const { teams, me } = useLazyLoadQuery(TeamsQuery)

  const chooseTeam = (team) => () => {
    if (me.currentTeam.id === team.id) return
    console.log('do something here !!')
  }

  return (
    <StyledTeamNavigationContainer>
      {teams.map(team => (
        <StyledTeam
          key={team.id}
          active={me.currentTeam.id === team.id}
          onClick={chooseTeam}
        >
          <Title color="active">{team.name.slice(0, 1)}</Title>
        </StyledTeam>
      ))}
    </StyledTeamNavigationContainer>
  )
}

export default TeamNavigation
