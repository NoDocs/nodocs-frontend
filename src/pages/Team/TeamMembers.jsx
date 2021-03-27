import React from 'react'
import styled from 'styled-components'
import { graphql } from 'graphql'
import { useLazyLoadQuery } from 'react-relay'

import UsersIcon from 'assets/users.svg'
import AddIcon from 'assets/add.svg'
import Avatar from 'atoms/Avatar'
import IconButton from 'atoms/IconButton'

const StyledGridContainer = styled.div`
  display: grid;
  grid-column-gap: 6px;
  grid-auto-flow: column;
  align-items: center;
`

const StyledMembersContainer = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
`

const StyledAvatar = styled(Avatar)`
  :not(:last-child) {
    margin-left: -10px;
  }
`

const StyledAddButton = styled(IconButton)`
  height: 15px;
  box-sizing: content-box;
`

const TeamMembersQuery = graphql`
  query TeamMembersQuery {
    currentTeam {
      members {
        id
        user {
          color
          fullName
          avatar
        }
      }
    }
  }
`

const TeamMembers = () => {
  const { currentTeam } = useLazyLoadQuery(TeamMembersQuery)

  return (
    <StyledGridContainer>
      <UsersIcon size={18} />

      <StyledMembersContainer>
        {currentTeam.members.map(member => (
          <StyledAvatar
            key={member.id}
            size={22}
            avatar={member.user.avatar}
            name={member.user.fullName}
            color={member.user.color}
          />
        ))}
      </StyledMembersContainer>

      <StyledAddButton variant="white">
        <AddIcon fill="black" />
      </StyledAddButton>
    </StyledGridContainer>
  )
}

export default TeamMembers
