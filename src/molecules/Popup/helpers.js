import { findDOMNode } from 'react-dom'

export const Positions = {
  left: 'LEFT',
  right: 'RIGHT',
  center: 'CENTER',
  rightCenter: 'RIGHT_CENTER',
  centerInner: 'CENTER_INNER',
  topRightInner: 'TOP_RIGHT_INNER',
  topLeft: 'TOP_LEFT',
  topRight: 'TOP_RIGHT',
  bottomCenter: 'BOTTOM_CENTER',
}

export const getTriggerRef = triggerRef => (
  triggerRef.current.getBoundingClientRect
    ? triggerRef.current
    : findDOMNode(triggerRef.current) // eslint-disable-line
)

export const isScrollContainer = (node) => {
  try {
    const stylesObject = window.getComputedStyle(node)
    const overflowStyles = [
      stylesObject.getPropertyValue('overflow'),
      stylesObject.getPropertyValue('overflow-y'),
    ]

    return overflowStyles.some(curr => curr === 'auto' || curr === 'scroll')
  } catch (error) {
    return false
  }
}

export const getPortalRoot = node =>
  getNode(node, curr => curr.getAttribute('data-portal') === 'true')

export const getNode = (node, condition = isScrollContainer) => {
  let startingNode = node

  while (startingNode && !condition(startingNode)) {
    startingNode = startingNode.parentElement
  }

  if (!startingNode) return window

  return startingNode
}
