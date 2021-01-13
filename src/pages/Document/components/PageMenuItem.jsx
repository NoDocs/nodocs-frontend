import React from 'react'
import PropTypes from 'prop-types'

import Label from 'atoms/Label'

const PageMenuItem = ({ page }) => {
  return (
    <Label hoverable color="black">{page.name || 'Untitled'}</Label>
  )
}

PageMenuItem.propTypes = {
  page: PropTypes.object,
}

export default PageMenuItem
