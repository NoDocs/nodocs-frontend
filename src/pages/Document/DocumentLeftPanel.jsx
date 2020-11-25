import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { documentSelectors } from 'logic/document'
import Label from 'atoms/Label'
import Section from './components/Section'

const StyledLeftPanelContainer = styled.div`
  padding-top: 30px;
  margin-left: 20px;
`

const StyledSectionsContainer = styled.div`
  display: grid;
  align-items: start;
  grid-row-gap: 5px;
  margin-top: 15px;
`

const DocumentLeftPanel = () => {
  const sections = useSelector(documentSelectors.selectDocumentProperty('sections'))

  return (
    <StyledLeftPanelContainer>
      <Label weight={500} color="black">Sections</Label>

      <StyledSectionsContainer>
        {sections.map(sectionId => <Section key={sectionId} id={sectionId} />)}
      </StyledSectionsContainer>
    </StyledLeftPanelContainer>
  )
}

export default DocumentLeftPanel
