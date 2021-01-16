import React from 'react'
import PropTypes from 'prop-types'

import { PortalContext } from 'contexts'
import PopupContent from './PopupContent'

const Popup = React.forwardRef(({
  trigger,
  children,
  className,
  direction,
  on = 'click',
  fullWidth = true,
  onOpen,
  onClose,
  name,
  disabled,
  style,
  hidePopupContent = false,
  hideOnScroll = true,
}, handleRef) => {
  const triggerRef = React.useRef()
  const { openPortal, closePortal, getPortalState } = React.useContext(PortalContext)
  const open = !!getPortalState(name)

  const handlePopupClose = React.useCallback(
    () => {
      closePortal(name)
      if (onClose) onClose()
    },
    [closePortal, onClose, name]
  )

  const handlePopupOpen = (event) => {
    if (disabled) return
    openPortal({ name })
    if (onOpen) onOpen(event)
  }

  const getEventHandlers = () => {
    switch (on) {
      case 'click': {
        return {
          onClick: handlePopupOpen,
        }
      }

      case 'focus': {
        return {
          onFocus: handlePopupOpen,
          onBlur: (event) => {
            if (!event.relatedTarget) {
              handlePopupClose()
              return
            }

            if (!event.relatedTarget.getAttribute) {
              handlePopupClose()
              return
            }

            const openedBy = event.relatedTarget.getAttribute('data-opened-by')
            if (openedBy !== name) handlePopupClose()
          },
        }
      }

      case 'hover': {
        return {
          onMouseEnter: handlePopupOpen,
          onMouseLeave: (event) => {
            if (!event.relatedTarget.getAttribute) {
              handlePopupClose()
              return
            }

            const openedBy = event.relatedTarget.getAttribute('data-opened-by')

            if (openedBy !== name) {
              handlePopupClose()
            }
          },
          onBlur: handlePopupClose,
        }
      }

      default:
        return {}
    }
  }

  React.useEffect(
    () => {
      if (disabled) handlePopupClose()
    },
    [disabled, handlePopupClose]
  )

  const clonedTrigger = React.cloneElement(
    trigger,
    {
      ref: ref => {
        triggerRef.current = ref
        if (handleRef) handleRef(ref)
      },
      'data-opener': name,
      ...getEventHandlers()
    }
  )

  return (
    <React.Fragment>
      {clonedTrigger}
      {open && !hidePopupContent && (
        <PopupContent
          triggerRef={triggerRef}
          className={className}
          style={style}
          fullWidth={fullWidth}
          closeOnScroll={hideOnScroll}
          direction={direction}
          closePopup={handlePopupClose}
          name={name}
          closeOnOutsideClick={on === 'click'}
          on={on}
        >
          {children}
        </PopupContent>
      )}
    </React.Fragment>
  )
})

Popup.propTypes = {
  trigger: PropTypes.element,
  children: PropTypes.any,
  className: PropTypes.string,
  direction: PropTypes.string,
  on: PropTypes.string,
  onOpen: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  style: PropTypes.object,
  onClose: PropTypes.func,
  defaultOpened: PropTypes.bool,
  hideOnScroll: PropTypes.bool,
  hidePopupContent: PropTypes.bool,
  name: PropTypes.string,
}

export default Popup
