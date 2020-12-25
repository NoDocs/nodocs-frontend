import React from 'react'
import PropTypes from 'prop-types'

const ContentToggler = ({ trigger, children, displayTrigger = false, onToggled, toggled = false }) => {
  const [isToggled, toggle] = React.useState(toggled)
  const unToggleContent = () => {
    toggle(false)
  }

  const content = typeof children === 'function' ? children(unToggleContent) : children

  React.useEffect(() => toggle(toggled), [toggled])

  if (!isToggled && !trigger) return null
  if (isToggled && !trigger) return content

  const toggleContent = () => {
    if (onToggled) onToggled()
    toggle(flag => !flag)
  }

  const clonedTrigger = React.cloneElement(trigger, { onClick: toggleContent, active: isToggled })

  if (!isToggled) return clonedTrigger

  return (
    <React.Fragment>
      {displayTrigger && clonedTrigger}
      {content}
    </React.Fragment>
  )
}

ContentToggler.propTypes = {
  trigger: PropTypes.element,
  children: PropTypes.any,
  toggled: PropTypes.bool,
  displayTrigger: PropTypes.bool,
  onToggled: PropTypes.func,
}

export default ContentToggler
