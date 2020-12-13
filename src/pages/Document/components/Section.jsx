import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { documentSelectors, documentActions } from 'logic/document'
import arrowRightIcon from 'assets/arrow-right.svg'
import Label from 'atoms/Label'
import IconButton from 'atoms/IconButton'
import HoverableContainer from 'atoms/HoverableContainer'
import ContentToggler from 'atoms/ContentToggler'
// import PageMenuItem from './PageMenuItem'
import CreatePage from './CreatePage'

const StyledSectionContainer = styled(HoverableContainer)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 14px auto;
  grid-column-gap: 10px;
  align-items: center;
`

const Section = ({ id }) => {
  const dispatch = useDispatch()
  const activeSectionId = useSelector(documentSelectors.selectActiveSectionId)
  const title = useSelector(documentSelectors.selectSectionProperty('title', () => id))
  const pages = useSelector(documentSelectors.selectSectionProperty('pages', () => id))

  const onSectionClick = () => {
    dispatch(documentActions.switchSection({
      sectionId: id,
      pageId: pages.first(),
    }))
  }

  return (
    <ContentToggler
      displayTrigger
      trigger={(
        <StyledSectionContainer
          variant="inverted"
          active={activeSectionId === id}
          onClick={onSectionClick}
        >
          <IconButton>
            <img src={arrowRightIcon} />
          </IconButton>

          <Label color="black">{title || 'Untitled'}</Label>
        </StyledSectionContainer>
      )}
    >
      {/* {pages.map(pageId => <PageMenuItem key={pageId} id={pageId} />)} */}
      <CreatePage />
    </ContentToggler>
  )
}

Section.propTypes = {
  id: PropTypes.string,
}

export default Section
