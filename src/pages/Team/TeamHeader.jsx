import React from 'react'
import styled from 'styled-components'

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
  grid-column-gap: 20px;
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
const StyledMemberImage = styled(Avatar)`
  width: 22.67px;
  height: 22.67px;
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

const teamMembers = [
  { img: '../../../src/assets/photo.png', color: '#E585EA' },
  { img: '../../../src/assets/photo.png', color: '#72D374' },
  { img: '../../../src/assets/photo.png', color: '#65D9F6' },
  { img: '../../../src/assets/photo.png', color: '#FBB374' },
]

const TeamHeader = () => {
  return (
    <StyledContainer>
      <LeftContainer>
        <StyledSection>
          <StyledMembersTitle>Members:</StyledMembersTitle>
          <StyledMemberImages>
            {teamMembers.map((member, index) => <StyledMemberImage key={index} src={member.img} alt="icon" color={member.color} />)}
          </StyledMemberImages>
        </StyledSection>
        <StyledSection>
          <StyledText>Group by:</StyledText>
          <StyledText color={'rgba(0,0,0,0.5)'}>Collections</StyledText>
        </StyledSection>
        <StyledSection>
          <StyledText>Filter by:</StyledText>
          <StyledText color={'rgba(0,0,0,0.5)'}>Last Updated</StyledText>
        </StyledSection>
      </LeftContainer>
      <StyledBtn>
        <img src={addCollectionIcon} />
        <StyledLabel>Add Collection</StyledLabel>
      </StyledBtn>
    </StyledContainer>
  )
}

export default TeamHeader
