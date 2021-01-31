import { fromJS } from 'immutable'
import * as documentActionTypes from './documentActionTypes'

const initialState = fromJS({
  id: '',
  activeSectionId: '',
  activePageId: '',
  openedDocumentIds: [],
})

const activeDocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case documentActionTypes.INITIALIZE_DOCUMENT: {
      const { document } = action.payload
      const { sections } = document

      const activeSection = sections[0]
      const activePage = activeSection.pages[0]

      return state
        .set('id', document.id)
        .set('activeSectionId', activeSection.id)
        .set('activePageId', activePage.id)
        .update('openedDocumentIds', ids => ids.includes(document.id) ? ids : ids.push(document.id))
    }

    case documentActionTypes.SWITCH_SECTION: {
      return state
        .set('activeSectionId', action.payload.sectionId)
        .set('activePageId', action.payload.pageId)
    }

    case documentActionTypes.CLEAR_DOCUMENT:
      return state
        .set('id', '')
        .set('activeSectionId', '')
        .set('activePageId', '')

    default:
      return state
  }
}

export default activeDocumentReducer
