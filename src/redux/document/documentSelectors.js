import { createSelector } from 'reselect'

const activeDocumentDomain = state => state.getIn(['ui', 'activeDocument'])
const documentsDomain = state => state.getIn(['entities', 'documents'])
const sectionsDomain = state => state.getIn(['entities', 'sections'])

export const selectActiveDocumentId = createSelector(
  activeDocumentDomain,
  domain => domain.get('id')
)

export const selectActiveSectionId = createSelector(
  activeDocumentDomain,
  domain => domain.get('activeSectionId')
)

export const selectDocumentProperty = (property, getDocumentId) => createSelector(
  [selectActiveDocumentId, documentsDomain, (_, props) => props],
  (activeDocumentId, documents, props) => {
    const documentId = getDocumentId
      ? getDocumentId(props)
      : activeDocumentId

    return documents.getIn([documentId, property])
  }
)

export const selectSectionProperty = (property, getSectionId) => createSelector(
  [selectActiveSectionId, sectionsDomain, (_, props) => props],
  (activeSectionId, sections, props) => {
    const sectionId = getSectionId
      ? getSectionId(props)
      : activeSectionId

    return sections.getIn([sectionId, property])
  }
)
