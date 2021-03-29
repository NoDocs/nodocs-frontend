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
    case documentActionTypes.SET_ACTIVE_PAGE_ID: {
      return state.set('activePageId', action.payload.activePageId)
    }

    case documentActionTypes.SET_ACTIVE_SECTION_ID: {
      return state.set('activeSectionId', action.payload.activeSectionId)
    }

    default:
      return state
  }
}

export default activeDocumentReducer
