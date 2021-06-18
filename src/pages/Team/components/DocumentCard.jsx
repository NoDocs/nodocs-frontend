import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Avatar from 'atoms/Avatar'
import Typography from 'molecules/Typography'

const StyledImageContainer = styled.div`
  padding: 8px 6px 0px;
  background-color: transparent;
  border-radius: 8px;
  grid-area: image;
`

const StyledShortTextContainer = styled.div`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 5px 5px 3px 3px;
  padding: 8px;
  height: 60px;
`

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-areas:
    "image title"
    "image description";
  grid-template-columns: 70px auto;
  grid-row-gap: 8px;
  align-items: center;
  grid-column-gap: 6px;
  max-width: 200px;
  cursor: pointer;

  &:hover ${StyledImageContainer} { background-color: #8F85FF; }
  &:hover ${StyledShortTextContainer} { border-color: white; }
`

const StyledDescriptionContainer = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-column-gap: 2px;
  align-self: start;
`

const StyledSeparator = styled.div`
  width: 2px;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1px;
`

const StyledDocumentName = styled(Typography)`align-self: end;`

const StyledShortDescriptionText = styled(Typography)`
  font-size: 4px;
  line-height: 6px;
`

const DocumentCard = ({ data }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(data.__typename === 'Document'
      ? `/d/${data.id}`
      : `?neuronId=${data.neuronId}`)
  }

  return (
    <StyledCardContainer onClick={handleClick}>
      <StyledImageContainer>
        <StyledShortTextContainer>
          <StyledShortDescriptionText variant="subtitle1">{data.shortDescription}</StyledShortDescriptionText>
        </StyledShortTextContainer>
      </StyledImageContainer>

      <StyledDocumentName variant="subtitle2">{data.name}</StyledDocumentName>

      <StyledDescriptionContainer>
        <Avatar
          size={16}
          name={data.owner.fullName}
          color={data.owner.color}
          displayName
        />

        <StyledSeparator />

        <Typography color="rgba(0, 0, 0, 0.5)" variant="caption">
          {data.createdAt}
        </Typography>
      </StyledDescriptionContainer>
    </StyledCardContainer>
  )
}

DocumentCard.propTypes = {
  data: PropTypes.object,
}

export default DocumentCard
