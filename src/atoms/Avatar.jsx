import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledAvatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: ${({ color = '#EB5C68' }) => `2px solid ${color}`};
`

const Avatar = ({ src, color, className }) => (
  <StyledAvatar src={src} color={color} className={className} alt="img" />
)

Avatar.propTypes = {
  src: PropTypes.oneOfType(PropTypes.string, PropTypes.object),
  color: PropTypes.string,
  className: PropTypes.string
}
export default Avatar
