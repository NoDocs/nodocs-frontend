import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DocumentIcon from 'assets/document.svg'
import Label from 'atoms/Label'
import Avatar from 'atoms/Avatar'

const StyledDocumentContainer = styled.div`
  border: 1px solid #D9E0E2;
  box-sizing: border-box;
  border-radius: 5px 15px 5px 5px;
  display: grid;
  grid-row-gap: 8px;
  padding: 12px 14px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border: 1px solid #000000;
  }
`

const StyledDocumentHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 6px;
  grid-template-columns: 18px auto;
`

const StyledDocumentIcon = styled(DocumentIcon)`
  width: 18px;
  height: 18px;
`

const StyledMembersContainer = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
`

const StyledAvatar = styled(Avatar)`
  :not(:last-child) {
    margin-left: -10px;
  }
`

const DocumentElement = ({ name, authorName, createdAt, members }) => {
  return (
    <StyledDocumentContainer>
      <StyledDocumentHeader>
        <StyledDocumentIcon />
        <Label weight={600} color="black">{name}</Label>
      </StyledDocumentHeader>

      <StyledMembersContainer>
        {members.map(member => (
          <StyledAvatar
            key={member.id}
            name={member.fullName}
            color={member.color}
            avatar={member.avatar}
            size={18}
          />
        ))}

        <Label ml={6} mr={6} color="black" weight={600}>@{authorName}</Label>

        <Label color="black">{createdAt}</Label>
      </StyledMembersContainer>
    </StyledDocumentContainer>
  )
}

DocumentElement.propTypes = {
  name: PropTypes.string,
  authorName: PropTypes.string,
  createdAt: PropTypes.string,
  members: PropTypes.array,
}

export default DocumentElement
