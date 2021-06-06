import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'relay-runtime'
import { useMutation } from 'react-relay'

import { industries } from 'constants'
import Label from 'atoms/Label'
import FullScreenModal from 'molecules/FullScreenModal'
import withRenderPortal from 'hocs/withRenderPortal'
import Button from 'atoms/Button'

const StyledCreateTeamContainer = styled.div`
  padding: 36px 42px;
  background-color: white;
  width: 600px;
  border-radius: 10px;
  display: grid;
  grid-row-gap: 15px;
`

const StyledInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 6px;
`

const StyledIndustriesContainer = styled.div``

const StyledIndustry = styled(Label)`
  border: 1.2px solid #000000;
  padding: 5px 12px;
  color: black;
  display: inline-block;
  border-radius: 80px;
  margin-right: 8px;
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: 500;
  cursor: pointer;

  ${props => props.selected && 'background-color: black;'}
  ${props => props.selected && 'color: white;'}
`

const StyledCreateTeamButton = styled(Button)`
  display: block;
  margin: auto;
  margin-top: 20px;
`

const createTeamMutation = graphql`
  mutation CreateTeamModalMutation ($input: CreateTeamInput!) {
    createTeam(input: $input) {
      team {
        id
        name
        company {
          id
        }
      }
    }
  }
`

const CreateTeamModal = ({ closePortal }) => {
  const [name, updateTeamName] = React.useState('')
  const [industry, updateIndustry] = React.useState('')
  const [createTeam] = useMutation(createTeamMutation)

  const handleCreateTeam = () => {
    createTeam({
      variables: {
        input: {
          name,
          industry,
        }
      },
      onCompleted: () => { closePortal() },
      updater: store => {
        const team = store
          .getRootField('createTeam')
          .getLinkedRecord('team')
        const companyId = team
          .getLinkedRecord('company')
          .getValue('id')
        const teams = store
          .getRoot()
          .getLinkedRecords('teams', { companyId })

        store
          .getRoot()
          .setLinkedRecords(
            teams.concat([team]),
            'teams',
            { companyId }
          )
        store
          .getRoot()
          .getLinkedRecord('me')
          .setLinkedRecord(team, 'currentTeam')
      }
    })
  }

  return (
    <FullScreenModal close={closePortal}>
      <StyledCreateTeamContainer>
        <Label weight={500} color="black">✍🏼 Add a team name...</Label>
        <StyledInput
          autoFocus
          value={name}
          onChange={event => updateTeamName(event.target.value)}
        />

        <Label weight={500} color="black">Industry</Label>
        <StyledIndustriesContainer>
          {industries.map(curr => (
            <StyledIndustry
              key={curr}
              onClick={() => updateIndustry(curr)}
              selected={curr === industry}
            >
              {curr}
            </StyledIndustry>
          ))}
        </StyledIndustriesContainer>
      </StyledCreateTeamContainer>

      <StyledCreateTeamButton onClick={handleCreateTeam}>Create Team</StyledCreateTeamButton>
    </FullScreenModal>
  )
}

CreateTeamModal.propTypes = {
  closePortal: PropTypes.func,
}

export default withRenderPortal(() => 'create-team-modal')(CreateTeamModal)
