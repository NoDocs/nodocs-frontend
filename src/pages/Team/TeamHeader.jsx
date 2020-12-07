import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { teamSelectors } from 'logic/team'
import Avatar from 'atoms/Avatar'
import addCollectionIcon from 'assets/add-collection.svg'

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

const StyledBtn = styled.button`
  border: none;
  background-color: #000000;
  padding: 9px 13px;
  border-radius: 80px;
  cursor: pointer;
  font-family: quicksand;

  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 8.5px;
`

const StyledLabel = styled.span`
  color: #FFFFFF;
  font-weight: 500;
  font-size: 14px;
`

const StyledText = styled.span`
  color: ${p => p.color ? p.color : '#000000'};
  font-size: 16px;
  font-weight: 500;
`

const TeamHeader = ({ toggleNewCollection }) => {
  const members = useSelector(teamSelectors.selectTeamProperty('members'))

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
          <StyledText color={'rgba(0,0,0,0.5)'}>Collections</StyledText>
        </StyledSection>
      </LeftContainer>

      <StyledBtn onClick={() => toggleNewCollection(true)}>
        <img src={addCollectionIcon} />
        <StyledLabel>Add Collection</StyledLabel>
      </StyledBtn>
    </StyledContainer>
  )
}

TeamHeader.propTypes = {
  toggleNewCollection: PropTypes.func
}
export default TeamHeader
