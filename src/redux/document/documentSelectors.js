import { createSelector } from 'reselect'

const activeDocumentDomain = state => state.getIn(['ui', 'activeDocument'])
const documentsDomain = state => state.getIn(['entities', 'documents'])
const sectionsDomain = state => state.getIn(['entities', 'sections'])
const pagesDomain = state => state.getIn(['entities', 'pages'])
const groupsDomain = state => state.getIn(['entities', 'groups'])

export const selectActiveDocumentId = createSelector(
  activeDocumentDomain,
  domain => domain.get('id')
)

export const selectActiveSectionId = createSelector(
  activeDocumentDomain,
  domain => domain.get('activeSectionId')
)

export const selectActivePageId = createSelector(
  activeDocumentDomain,
  domain => domain.get('activePageId')
)

export const selectOpenedDocuments = createSelector(
  [activeDocumentDomain, documentsDomain],
  (domain, documents) => domain
    .get('openedDocumentIds')
    .map(id => documents
      .get(id)
      .filter((_, key) => ['id', 'title'].includes(key))
    )
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
  [
    selectActiveSectionId,
    sectionsDomain,
    pagesDomain,
    (_, props) => props
  ],
  (activeSectionId, sections, pages, props) => {
    const sectionId = getSectionId
      ? getSectionId(props)
      : activeSectionId

    const field = sections.getIn([sectionId, property])

    if (!field) return null

    return property !== 'pages'
      ? field
      : field
  }
)

export const selectPageProperty = (property, getPageId) => createSelector(
  [selectActivePageId, pagesDomain, (_, props) => props],
  (activePageId, pages, props) => {
    const pageId = getPageId
      ? getPageId(props)
      : activePageId

    return pages.getIn([pageId, property])
  }
)

export const selectDocumentsByGroup = (groupId) => createSelector(
  [groupsDomain, documentsDomain],
  (groups, documents) => groups
    .get(groupId)
    .get('documents')
    .map(id => documents.get(id))
)
