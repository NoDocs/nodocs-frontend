import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TypographyBody from './TypographyBody'

const StyledLink = styled(TypographyBody)`
  color: blue;
  display: inline-block;
`

const TypographyLink = ({ children }) => {
  return (
    <StyledLink
      href={children}
      target="_blank"
      rel="noopener noreferrer"
      variant="body1"
      as="a"
    >
      {children}
    </StyledLink>
  )
}

TypographyLink.propTypes = {
  children: PropTypes.string,
}

export default TypographyLink
