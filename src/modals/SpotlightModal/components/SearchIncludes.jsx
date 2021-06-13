import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Typography from 'molecules/Typography'

const StyledSpotlightBodyContainer = styled.div`
  padding: 16px;
`

const StyledButtonsContainer = styled.div`
  margin-top: 8px;
  display: grid;
  justify-content: start;
  grid-auto-flow: column;
  grid-column-gap: 8px;
`

const StyledButton = styled.button`
  border: none;
  background-color: #222222;
  padding: 8px 16px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  border-radius: 16px;
  cursor: pointer;

  ${props => props.active && `
    box-shadow: inset 0px 0px 24px rgba(53, 162, 241, 0.8);
    border: 2px solid #18A0FB;
    color: #FFFFFF;
  `}
`

const SearchIncludes = ({ setFieldValue, values }) => {
  const handleButtonClick = type => () => {
    setFieldValue(
      'include',
      values.include.includes(type)
        ? values.include.filter(curr => curr !== type)
        : values.include.concat([type])
    )
  }

  return (
    <StyledSpotlightBodyContainer>
      <Typography variant="caption">I&apos;m looking for</Typography>
  
      <StyledButtonsContainer>
        <StyledButton
          active={values.include.includes('image')}
          onClick={handleButtonClick('image')}
        >
          Images
        </StyledButton>

        <StyledButton
          active={values.include.includes('document')}
          onClick={handleButtonClick('document')}
        >
          Documents
        </StyledButton>
  
        <StyledButton
          active={values.include.includes('component')}
          onClick={handleButtonClick('component')}
        >
          Components
        </StyledButton>
      </StyledButtonsContainer>
    </StyledSpotlightBodyContainer>
  )
}

SearchIncludes.propTypes = {
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
}

export default SearchIncludes
