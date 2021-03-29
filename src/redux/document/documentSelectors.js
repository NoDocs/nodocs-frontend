import { createSelector } from 'reselect'

const activeDocumentDomain = state => state.getIn(['ui', 'activeDocument'])
const documentsDomain = state => state.getIn(['entities', 'documents'])

export const selectOpenedDocuments = createSelector(
  [activeDocumentDomain, documentsDomain],
  (domain, documents) => domain
    .get('openedDocumentIds')
    .map(id => documents
      .get(id)
      .filter((_, key) => ['id', 'title'].includes(key))
    )
)
