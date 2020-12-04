import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { teamSelectors } from 'logic/team'
import atIcon from 'assets/at.svg'
import Label from 'atoms/Label'
import Title from 'atoms/Title'
import defaultBackgroundImage from 'assets/team-default-background.png'

const StyledContainer = styled.div`
  height: 210px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${defaultBackgroundImage});
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
`

const StyledCaptionContainer = styled.div`
  margin-left: 200px;
  display: grid;
  grid-row-gap: 5px;
  margin-bottom: 30px;
`

const StyledTitleContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 3px;
  grid-template-columns: 25px auto;
  align-items: center;
`

const TeamDescription = () => {
  const name = useSelector(teamSelectors.selectTeamProperty('name'))
  const description = useSelector(teamSelectors.selectTeamProperty('description'))

  return (
    <StyledContainer>
      <StyledCaptionContainer>
        <StyledTitleContainer>
          <img src={atIcon} alt="Team Name" />
          <Title>{name}</Title>
        </StyledTitleContainer>

        <Label weight={500}>{description}</Label>
      </StyledCaptionContainer>
    </StyledContainer>
  )
}

export default TeamDescription
