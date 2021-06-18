import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Typography from 'molecules/Typography'

const StyledGridContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
`

const StyledTypography = styled(Typography)`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`

const StyledAvatar = styled.div`
  height: ${props => props.size || 35}px;
  width: ${props => props.size || 35}px;
  border-radius: 50%;
  border: ${({ color }) => `2px solid ${color}`};
  background-image: url(${props => props.avatar});
  background-color: ${props => props.color};
  position: relative;

  ${props => !props.avatar && `
    &:before {
      content: "${props.name.slice(0, 2)}";
      height: 100%;
      display: flex;
      font-family: Inter;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: white;
    }
  `};
`

const Avatar = (props) => {
  const { displayName, name } = props
  const [firstName] = name.split(' ')

  if (displayName) {
    return (
      <StyledGridContainer>
        <StyledAvatar {...props} />
        <StyledTypography color="rgba(0, 0, 0, 0.5)" variant="caption">
          {firstName}
        </StyledTypography>
      </StyledGridContainer>
    )
  }

  return <StyledAvatar {...props} />
}

Avatar.propTypes = {
  displayName: PropTypes.bool,
  name: PropTypes.string,
}

export default Avatar
