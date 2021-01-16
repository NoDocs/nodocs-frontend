import React from 'react'

import { getNode, getTriggerRef } from '../helpers'

export default ({ closePopup, closeOnScroll, triggerRef }) => {
  const [scrollTop, updateScrollTop] = React.useState(0)
  const [initialScrollTop, updateInitialScrollTop] = React.useState(0)
  const scrollContainerRef = React.useRef()

  const onScrollContainerScroll = React.useCallback(
    (event) => {
      if (closeOnScroll) {
        closePopup()
        return
      }

      updateScrollTop(event.target.scrollTop)
    },
    [updateScrollTop, closePopup, closeOnScroll]
  )

  React.useEffect(
    () => {
      const setInitialScrollTop = () => {
        const parentDomNode = getNode(getTriggerRef(triggerRef))
    
        scrollContainerRef.current = parentDomNode
        const nodeScrollTop = parentDomNode.scrollTop === undefined
          ? parentDomNode.scrollX // for window object
          : parentDomNode.scrollTop
    
        updateInitialScrollTop(nodeScrollTop)
        updateScrollTop(nodeScrollTop)
      }

      setInitialScrollTop()

      scrollContainerRef.current.addEventListener('scroll', onScrollContainerScroll)

      return () => {
        scrollContainerRef.current.removeEventListener('scroll', onScrollContainerScroll)
      }
    },
    [triggerRef, onScrollContainerScroll]
  )

  return {
    scrollTop,
    initialScrollTop,
  }
}
