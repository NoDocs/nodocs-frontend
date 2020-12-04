import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { memberActions } from 'logic/member'
import * as membersService from 'services/member'

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

const TeamHeader = ({ team }) => {
  const dispatch = useDispatch()
  const members = useSelector(state => state.getIn(['entities', 'members']))
  const membersBody = { teamId: team && team.get('id') }

  React.useEffect(
    () => {
      if (!team) return
      membersService
        .getMembers(membersBody)
        .then(response => {
          dispatch(memberActions.putMembers(response.data))
        })
        .catch(err => console.log('err', err))
    }, [team])

  return (
    <StyledContainer>
      <LeftContainer>
        <StyledSection>
          <StyledMembersTitle>Members:</StyledMembersTitle>
          <StyledMemberImages>
            {members.map((member, index) => (
              <StyledMemberImage
                key={index} src={'../../../src/assets/photo.png'}
                alt="icon"
                color={member.getIn(['user', 'color'])}
              />
            )).toList()}
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

TeamHeader.propTypes = {
  team: PropTypes.object
}
export default TeamHeader
