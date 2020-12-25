import React from 'react'
import PropTypes from 'prop-types'

import Label from 'atoms/Label'
import HoverableContainer from 'atoms/HoverableContainer'

const PageMenuItem = ({ page }) => {
  return (
    <HoverableContainer>
      <Label color="black">{page.name || 'Untitled'}</Label>
    </HoverableContainer>
  )
}

PageMenuItem.propTypes = {
  page: PropTypes.object,
}

export default PageMenuItem
