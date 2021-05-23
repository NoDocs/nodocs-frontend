import React from 'react'
import PropTypes from 'prop-types'

import Label from 'atoms/Label'
import { DocumentContext } from 'contexts'

const PageItem = ({ page }) => {
  const { activePageId, updateActivePageId } = React.useContext(DocumentContext)

  const switchActivePage = () => {
    updateActivePageId(page.id)
  }

  return (
    <Label
      weight={activePageId === page.id ? 500 : 300}
      onClick={switchActivePage}
      color="black"
    >
      {page.title}
    </Label>
  )
}

PageItem.propTypes = {
  page: PropTypes.object,
}

export default PageItem
