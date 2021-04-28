import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import IconButton from './IconButton'

const StyledFileUploaderButtonContainer = styled.div``

const StyledFileInput = styled.input`
  display: none;
`

const FileUploaderButton = ({ className, onChange, children }) => {
  const inputRef = React.useRef()

  const openFilePicker = () => {
    inputRef.current.click()
  }

  return (
    <StyledFileUploaderButtonContainer className={className}>
      <StyledFileInput
        name="file"
        type="file"
        accept="image/*"
        onChange={onChange}
        ref={inputRef}
      />

      <IconButton onClick={openFilePicker}>
        {children}
      </IconButton>
    </StyledFileUploaderButtonContainer>
  )
}

FileUploaderButton.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.string,
}

export default FileUploaderButton
