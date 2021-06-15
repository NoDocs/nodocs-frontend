import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Typography from 'molecules/Typography'

const StyledBoxContainer = styled.div`
  background: rgba(221, 227, 232, 0.2);
  border-radius: 8px;
  padding: 16px;
`

const TeamBox = ({ data }) => {
  return (
    <StyledBoxContainer>
      <Typography variant="subtitle2"># {data.name}</Typography>
    </StyledBoxContainer>
  )
}

TeamBox.propTypes = {
  data: PropTypes.object,
}

export default TeamBox
