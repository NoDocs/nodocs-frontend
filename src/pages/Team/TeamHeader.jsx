import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { teamSelectors, teamActions } from 'logic/team'
import { PortalContext } from 'contexts'
import Avatar from 'atoms/Avatar'
import Popup from 'molecules/Popup'
import ListItem from 'molecules/ListItem'

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
  cursor: pointer;
`

const TeamHeader = () => {
  const { closePortal } = React.useContext(PortalContext)
  const members = useSelector(teamSelectors.selectTeamProperty('members'))
  const groupBy = useSelector(teamSelectors.selectActiveTeamGroupBy)
  const dispatch = useDispatch()

  const changeGroupBy = (value) => () => {
    dispatch(teamActions.changeGroupBy(value))
    closePortal('switch-group-by-popup')
  }

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

          <Popup
            name="switch-group-by-popup"
            fullWidth={false}
            direction="RIGHT"
            trigger={<StyledText color={'rgba(0,0,0,0.5)'}>{groupBy}</StyledText>}
          >
            <ListItem
              active={groupBy === 'members'}
              label="Members"
              onClick={changeGroupBy('members')}
              color="black"
            />

            <ListItem
              active={groupBy === 'tags'}
              label="Tags"
              onClick={changeGroupBy('tags')}
              color="black"
            />
          </Popup>
        </StyledSection>
      </LeftContainer>
    </StyledContainer>
  )
}

export default TeamHeader
