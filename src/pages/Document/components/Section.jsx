import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { documentSelectors } from 'logic/document'
import arrowRightIcon from 'assets/arrow-right.svg'
import Label from 'atoms/Label'
import IconButton from 'atoms/IconButton'
import HoverableContainer from 'atoms/HoverableContainer'

const StyledSectionContainer = styled(HoverableContainer)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 14px auto;
  grid-column-gap: 10px;
  align-items: center;
`

const Section = ({ id }) => {
  const activeSectionId = useSelector(documentSelectors.selectActiveSectionId)
  const title = useSelector(documentSelectors.selectSectionProperty('title', () => id))

  return (
    <StyledSectionContainer variant="inverted" active={activeSectionId === id}>
      <IconButton>
        <img src={arrowRightIcon} />
      </IconButton>

      <Label color="black">{title || 'Untitled'}</Label>
    </StyledSectionContainer>
  )
}

Section.propTypes = {
  id: PropTypes.string,
}

export default Section
