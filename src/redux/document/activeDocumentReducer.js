import { Map } from 'immutable'
import * as documentActionTypes from './documentActionTypes'

const initialState = new Map()

const activeDocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case documentActionTypes.INITIALIZE_DOCUMENT: {
      const { document } = action.payload
      const { sections } = document
      const { pages } = sections[0]

      return state
        .set('id', document.id)
        .set('activeSectionId', sections[0].id)
        .set('activePageId', pages[0].id)
    }

    case documentActionTypes.SWITCH_SECTION: {
      return state
        .set('activeSectionId', action.payload.sectionId)
        .set('activePageId', action.payload.pageId)
    }

    default:
      return state
  }
}

export default activeDocumentReducer
