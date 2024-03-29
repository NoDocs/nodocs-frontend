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

      return state
        .set('id', document.id)
        .set('activeSectionId', sections[0].id)
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
