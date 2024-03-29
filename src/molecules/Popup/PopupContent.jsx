import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useOutsideClick from './hooks/useOutsideClick'
import useParentScroll from './hooks/useParentScroll'
import usePopupCoords from './hooks/usePopupCoords'

const modalsRoot = document.getElementById('portals')
const StyledPopupContainer = styled.div`
  outline: none;
  position: ${({ modal }) => (modal ? 'static' : 'absolute')};
  padding: 5px 0px;
  border: 1px solid grey;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 1999;
  border-radius: 8px;
`

const PopupContent = ({
  triggerRef,
  direction,
  style,
  className,
  closeOnScroll,
  closePopup,
  fullWidth,
  children,
  name,
  on,
}) => {
  const contentRef = React.useRef()

  const { captureRef: captureRefCoords, contentCoords } = usePopupCoords({ contentRef, triggerRef, direction, fullWidth })
  const { captureRef: captureRefOutside } = useOutsideClick({ closeOnOutsideClick: on === 'click', closePopup })
  const { scrollTop, initialScrollTop } = useParentScroll({ triggerRef, closePopup, closeOnScroll })

  return ReactDOM.createPortal(
    <StyledPopupContainer
      data-portal
      data-opened-by={name}
      className={className}
      tabIndex={0}
      ref={(ref) => {
        contentRef.current = ref
        captureRefCoords(ref)
        captureRefOutside(ref)
      }}
      {...(on === 'hover' ? { onMouseLeave: closePopup } : {})}
      style={{
        left: contentCoords.left,
        ...(contentCoords.top ? { top: contentCoords.top - (scrollTop - initialScrollTop) } : {}),
        ...(contentCoords.width ? { width: contentCoords.width } : {}),
        ...style,
      }}
    >
      {children}
    </StyledPopupContainer>,
    modalsRoot
  )
}

PopupContent.propTypes = {
  triggerRef: PropTypes.object,
  direction: PropTypes.string,
  style: PropTypes.object,
  closeOnScroll: PropTypes.bool,
  closePopup: PropTypes.func,
  closeOnOutsideClick: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  name: PropTypes.string,
  on: PropTypes.string,
}

export default PopupContent
