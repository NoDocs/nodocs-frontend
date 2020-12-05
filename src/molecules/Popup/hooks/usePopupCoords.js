import React from 'react'

import { getTriggerRef, Positions } from '../helpers'

export default ({ direction, fullWidth, triggerRef }) => {
  const contentRef = React.useRef()
  const [contentCoords, updateContentCoords] = React.useState({})

  const captureRef = ref => contentRef.current = ref

  React.useEffect(
    () => {
      const setContentCoords = () => {
        const finalCoords = {}
        const triggerCoords = getTriggerRef(triggerRef).getBoundingClientRect()
        const content = contentRef.current.getBoundingClientRect()

        switch (direction) {
          case Positions.topLeft: {
            finalCoords.top = triggerCoords.top
            finalCoords.left = triggerCoords.left - content.width
            break
          }

          case Positions.right: {
            finalCoords.top = triggerCoords.bottom + 10
            finalCoords.left = triggerCoords.left
            break
          }

          case Positions.centerInner: {
            finalCoords.top = triggerCoords.bottom - (content.height / 2)
            finalCoords.left = triggerCoords.left + (Math.abs(content.width - triggerCoords.width) / 2)
            break
          }

          case Positions.bottomCenter: {
            finalCoords.top = triggerCoords.bottom + 10
            finalCoords.left = triggerCoords.left + ((triggerCoords.width - content.width) / 2)
            break
          }

          case Positions.rightCenter: {
            finalCoords.top = triggerCoords.top + (triggerCoords.height - content.height) / 2
            finalCoords.left = triggerCoords.right + 10
            break
          }

          default: {
            finalCoords.top = triggerCoords.bottom + 10
            finalCoords.left = triggerCoords.right - content.width
          }
        }

        if (fullWidth) {
          finalCoords.width = triggerCoords.width
          finalCoords.left = triggerCoords.left
        }

        updateContentCoords(finalCoords)
      }

      setContentCoords()
    },
    [contentRef, triggerRef, direction, fullWidth]
  )

  return {
    captureRef,
    contentCoords
  }
}
