import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { documentSelectors } from 'logic/document'
import Label from 'atoms/Label'
import HoverableContainer from 'atoms/HoverableContainer'

const PageMenuItem = ({ id }) => {
  const title = useSelector(documentSelectors.selectPageProperty('title'), () => id)

  return (
    <HoverableContainer>
      <Label color="black">{title}</Label>
    </HoverableContainer>
  )
}

PageMenuItem.propTypes = {
  id: PropTypes.string,
}

export default PageMenuItem
