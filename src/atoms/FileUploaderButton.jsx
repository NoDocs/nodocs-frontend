import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import IconButton from './IconButton'

const StyledFileUploaderButtonContainer = styled.div``

const StyledFileInput = styled.input`
  display: none;
`

const FileUploaderButton = React.forwardRef(({ className, trigger, onChange, children }, inputRef) => {
  const openFilePicker = () => {
    inputRef.current.click()
  }

  const enhancedTrigger = React.useMemo(
    () => trigger
      ? React.cloneElement(trigger, { onClick: openFilePicker })
      : <IconButton onClick={openFilePicker}>{children}</IconButton>,
    []
  )

  return (
    <StyledFileUploaderButtonContainer className={className}>
      <StyledFileInput
        name="file"
        type="file"
        accept="image/*"
        onChange={onChange}
        ref={inputRef}
      />

      {enhancedTrigger}
    </StyledFileUploaderButtonContainer>
  )
})

FileUploaderButton.displayName = 'FileUploaderButton'
FileUploaderButton.propTypes = {
  onChange: PropTypes.func,
  trigger: PropTypes.element,
  className: PropTypes.string,
  children: PropTypes.string,
}

export default FileUploaderButton
