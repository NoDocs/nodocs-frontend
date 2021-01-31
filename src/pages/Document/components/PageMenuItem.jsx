import React from 'react'
import PropTypes from 'prop-types'

import Label from 'atoms/Label'

const PageMenuItem = ({ pageId }) => {
  return (
    <Label hoverable color="black">{pageId || 'Untitled'}</Label>
  )
}

PageMenuItem.propTypes = {
  pageId: PropTypes.string,
}

export default PageMenuItem
