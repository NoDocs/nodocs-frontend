import React from 'react'
import delay from 'lodash/delay'

import { getPortalRoot } from '../helpers'

export default ({ closePopup, closeOnOutsideClick }) => {
  let contentRef = React.useRef()

  const captureRef = ref => {
    contentRef.current = ref
  }

  React.useEffect(
    () => {
      const onOutsideClick = ({ pageX, pageY, target }) => {
        const { current } = contentRef
        if (!current) { return }

        const {
          left: parentLeft,
          right: parentRight,
          top: parentTop,
          bottom: parentBottom,
        } = current.getBoundingClientRect()

        const conditions = [
          pageX >= parentLeft && pageX <= parentRight,
          pageY >= parentTop && pageY <= parentBottom,
        ]

        const shouldClosePortal = !conditions.every(condition => condition)
        const rootNode = getPortalRoot(target)

        if (!shouldClosePortal) return

        // The window obect does not have getAttribute function
        // So if outside click is detected in non portal element close curr portal
        if (!rootNode.getAttribute) {
          closePopup()
          return
        }

        const openerName = rootNode.getAttribute('data-opened-by')
        const openerNode = document.querySelector(`[data-opener="${openerName}"]`)

        if (!current.contains(openerNode)) {
          closePopup()
        }
      }

      if (closeOnOutsideClick) {
        delay(() => window.addEventListener('click', onOutsideClick), 0)
      }

      return () => {
        if (closeOnOutsideClick) window.removeEventListener('click', onOutsideClick)
      }
    },
    [closeOnOutsideClick, closePopup, contentRef]
  )

  return {
    captureRef
  }
}
