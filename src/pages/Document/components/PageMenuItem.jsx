import React from 'react'
import PropTypes from 'prop-types'

import Label from 'atoms/Label'
import { DocumentContext } from 'contexts'

const PageMenuItem = ({ page }) => {
  const { activePageId, updateActivePageId } = React.useContext(DocumentContext)

  const switchActivePage = () => {
    updateActivePageId(page.id)
  }

  return (
    <Label
      hoverable
      weight={activePageId === page.id ? 500 : 300}
      onClick={switchActivePage}
      color="black"
    >
      {page.title}
    </Label>
  )
}

PageMenuItem.propTypes = {
  page: PropTypes.object,
}

export default PageMenuItem
