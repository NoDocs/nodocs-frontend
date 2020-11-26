import { Map } from 'immutable'
import * as documentActionTypes from './documentActionTypes'

const initialState = new Map()

const activeDocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case documentActionTypes.INITIALIZE_DOCUMENT: {
      const { document } = action.payload

      return state
        .set('id', document.id)
        .set('activeSectionId', document.sections[0].id)
    }

    default:
      return state
  }
}

export default activeDocumentReducer
