import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { documentSelectors } from 'logic/document'
import PlusIcon from 'assets/components/PlusIcon'
import IconButton from 'atoms/IconButton'
import Label from 'atoms/Label'
import Section from './components/Section'

const StyledLeftPanelContainer = styled.div`
  padding-top: 25px;
  margin-left: 20px;
`

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      <StyledFlexContainer>
        <Label weight={500} color="black">Sections</Label>

        <IconButton variant="inverted">
          <PlusIcon variant="inverted" />
        </IconButton>
      </StyledFlexContainer>

      <StyledSectionsContainer>
        {sections.map(sectionId => <Section key={sectionId} id={sectionId} />)}
      </StyledSectionsContainer>
    </StyledLeftPanelContainer>
  )
}

export default DocumentLeftPanel
