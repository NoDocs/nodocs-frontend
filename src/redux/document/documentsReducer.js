import { Map } from 'immutable'
import * as documentActionTypes from './documentActionTypes'

const initialState = new Map()

const documentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case documentActionTypes.PUT_DOCUMENTS: {
      const normalized = action
        .payload
        .documents
        .reduce(
          (res, curr) => res.set(curr.id, new Map(curr)),
          new Map()
        )

      return normalized
    }

    case documentActionTypes.INITIALIZE_DOCUMENT: {
      const { document } = action.payload

      return state.update(
        document.id,
        doc => doc
          .set('sections', document.sections.map(curr => curr.id))
      )
    }

    case documentActionTypes.CREATE_DOCUMENT: {
      return state
        .set(action.payload.id, new Map({
          id: action.payload.id,
          content: action.payload.content,
          creator: action.payload.creator.id,
        }))
    }

    default:
      return state
  }
}

export default documentsReducer
