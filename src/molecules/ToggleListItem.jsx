import React from 'react'
import PropTypes from 'prop-types'

import ListItem from 'molecules/ListItem'

const ToggleListItem = ({
  active,
  icon,
  showUnderline,
  label,
  onClick,
  proportions,
  renderAdditionalButtons
}) => {
  return (
    <ListItem
      active={active}
      icon={icon}
      showUnderline={showUnderline}
      label={label}
      onClick={onClick}
      proportions={proportions}
      renderAdditionalButtons={renderAdditionalButtons}
    />
  )
}


ToggleListItem.propTypes = {
  active: PropTypes.bool,
  showUnderline: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  proportions: PropTypes.string,
  renderAdditionalButtons: PropTypes.func,
}

export default ToggleListItem