import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Typography from 'molecules/Typography'

const StyledBoxContainer = styled.div`
  background: rgba(221, 227, 232, 0.2);
  border-radius: 8px;
  padding: 16px;
`

const StyledCardsContainer = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, 200px);
`

const TeamBox = ({ data, children }) => {
  return (
    <StyledBoxContainer>
      <Typography variant="subtitle2"># {data.name}</Typography>

      <StyledCardsContainer>
        {children}
      </StyledCardsContainer>
    </StyledBoxContainer>
  )
}

TeamBox.propTypes = {
  data: PropTypes.object,
  children: PropTypes.any,
}

export default TeamBox
