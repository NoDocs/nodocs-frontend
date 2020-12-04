import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { teamSelectors } from 'logic/team'

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
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: white;
    }
  `};
`

const Avatar = ({ size, userId, className }) => {
  const avatar = useSelector(teamSelectors.selectTeamMemberProperty('avatar', userId))
  const name = useSelector(teamSelectors.selectTeamMemberProperty('fullName', userId))
  const color = useSelector(teamSelectors.selectTeamMemberProperty('color', userId))

  return (
    <StyledAvatar
      size={size}
      avatar={avatar}
      name={name}
      color={color}
      className={className}
    />
  )
}

Avatar.propTypes = {
  size: PropTypes.number,
  userId: PropTypes.string,
  className: PropTypes.string
}
export default Avatar
