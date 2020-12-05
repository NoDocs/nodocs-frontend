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
      const { pages } = sections[0]

      return state
        .set('id', document.id)
        .set('activeSectionId', sections[0].id)
        .set('activePageId', pages[0].pageId)
        .update('openedDocumentIds', ids => ids.push(document.id))
    }

    case documentActionTypes.SWITCH_SECTION: {
      return state
        .set('activeSectionId', action.payload.sectionId)
        .set('activePageId', action.payload.pageId)
    }

    case documentActionTypes.CLEAR_DOCUMENT: {
      return state
        .delete('id')
        .delete('activeSectionId')
        .delete('activePageId')
    }

    default:
      return state
  }
}

export default activeDocumentReducer
