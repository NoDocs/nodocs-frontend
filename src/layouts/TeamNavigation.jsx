import React from 'react'
import styled from 'styled-components'
import { graphql } from 'graphql'
import { useLazyLoadQuery, useMutation } from 'react-relay'

import Title from 'atoms/Title'
import CreateTeamButton from './components/CreateTeamButton'

const StyledTeamNavigationContainer = styled.div`
  height: 100vh;
  padding-top: 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 16px;
`

const StyledGridContainer = styled.div`
  display: inline-grid;
  grid-row-gap: 10px;
  justify-content: center;
`

const StyledTeam = styled.div`
  border: 2px solid rgba(255,255,255,0.2);
  box-sizing: border-box;
  border-radius: 5px 15px 5px 5px;
  height: 40px;
  width: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${props => props.active && 'border: 2px solid white;'}
`

const currentCompanyQuery = graphql`
  query TeamNavigationCompanyQuery {
    me {
      currentCompany {
        id
      }
      currentTeam {
        id
      }
    }
  }
`

const teamsQuery = graphql`
  query TeamNavigationTeamsQuery($companyId: String!) {
    teams (companyId: $companyId) {
      id
      name
    }
  }
`

const createTeamMutation = graphql`
  mutation TeamNavigationMutation($input: SwitchTeamInput!) {
    switchTeam(input: $input) {
      team {
        id
      }
    }
  }
`

const TeamNavigation = () => {
  const [createTeam] = useMutation(createTeamMutation)
  const { me: { currentCompany, currentTeam } } = useLazyLoadQuery(currentCompanyQuery, {}, { fetchPolicy: localStorage.getItem('meFetchPolicy') })
  const { teams } = useLazyLoadQuery(teamsQuery, { companyId: currentCompany.id })

  const chooseTeam = (team) => () => {
    if (currentTeam.id === team.id) {
      return
    }

    createTeam({
      variables: {
        input: {
          teamId: team.id,
        }
      },
      updater: (store) => {
        const newTeam = store
          .getRootField('switchTeam')
          .getLinkedRecord('team')

        store
          .getRoot()
          .getLinkedRecord('me')
          .setLinkedRecord(newTeam, 'currentTeam')
      },
    })
  }

  React.useEffect(
    () => { localStorage.removeItem('meFetchPolicy') },
    []
  )

  return (
    <StyledTeamNavigationContainer>
      <StyledGridContainer>
        {teams.map(team => (
          <StyledTeam
            key={team.id}
            active={currentTeam.id === team.id}
            onClick={chooseTeam(team)}
          >
            <Title color="active">{team.name.slice(0, 1)}</Title>
          </StyledTeam>
        ))}
      </StyledGridContainer>

      <CreateTeamButton />
    </StyledTeamNavigationContainer>
  )
}

export default TeamNavigation
