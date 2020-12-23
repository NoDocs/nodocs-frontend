import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { teamSelectors } from 'logic/team'
import * as local from 'utils/local'
import Avatar from 'atoms/Avatar'

const StyledContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  margin: 26px 0 45px 0;
`
const LeftContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 18px;
  align-items: center;
`

const StyledSection = styled.div`
  display: inline-grid;
  align-items: center;
  grid-auto-flow: column;
  grid-column-gap: 10px;
  font-family: quicksand;
`

const StyledMemberImages = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
`

const StyledMembersTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  grid-column-gap: 22px;
`

const StyledAvatar = styled(Avatar)`
  :not(:last-child) {
    margin-left: -10px;
  }
`

const StyledText = styled.span`
  color: ${p => p.color ? p.color : '#000000'};
  font-size: 16px;
  font-weight: 500;
`

const TeamHeader = () => {
  const members = useSelector(teamSelectors.selectTeamProperty('members'))
  const teamId = useSelector(teamSelectors.selectTeamProperty('id'))

  return (
    <StyledContainer>
      <LeftContainer>
        <StyledSection>
          <StyledMembersTitle>Members:</StyledMembersTitle>

          <StyledMemberImages>
            {members
              .map(memberId => <StyledAvatar size={23} key={memberId} userId={memberId} />)
              .toList()}
          </StyledMemberImages>
        </StyledSection>

        <StyledSection>
          <StyledText>Group by:</StyledText>
          <StyledText color={'rgba(0,0,0,0.5)'}>{local.getTeamGroupBy(teamId)}</StyledText>
        </StyledSection>
      </LeftContainer>
    </StyledContainer>
  )
}

export default TeamHeader
