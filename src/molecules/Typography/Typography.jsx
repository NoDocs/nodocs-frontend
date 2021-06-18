import React from 'react'
import PropTypes from 'prop-types'

import Heading from './Heading'
import Caption from './Caption'
import TypographyBody from './TypographyBody'
import TypographySubtitle from './TypographySubTitle'

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
]

const Typography = ({ variant, children, ...rest }) => {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return <Heading as={variant} {...rest}>{children}</Heading>

    case 'caption':
      return <Caption {...rest}>{children}</Caption>

    case 'body1':
    case 'body2':
      return <TypographyBody variant={variant} {...rest}>{children}</TypographyBody>

    case 'subtitle1':
    case 'subtitle2':
      return <TypographySubtitle variant={variant} {...rest}>{children}</TypographySubtitle>

    default:
      return children
  }
}

Typography.propTypes = {
  variant: PropTypes.oneOf(variants),
}

export default Typography
