import { Map, List, fromJS } from 'immutable'
import * as documentActionTypes from './documentActionTypes'

const initialState = new Map()

const documentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case documentActionTypes.PUT_DOCUMENTS: {
      const normalized = action
        .payload
        .documents
        .reduce(
          (res, curr) => res.set(curr.id, fromJS(curr)),
          new Map()
        )

      return state.merge(normalized)
    }

    case documentActionTypes.INITIALIZE_DOCUMENT: {
      const { document } = action.payload

      return state.update(
        document.id,
        doc => doc
          .set('sections', new List(document.sections.map(curr => curr.id)))
      )
    }

    case documentActionTypes.CREATE_DOCUMENT: {
      return state
        .set(action.payload.id, fromJS({
          ...action.payload,
          sections: action
            .payload
            .sections
            .map(curr => curr.id)
        }))
    }

    case documentActionTypes.CREATE_SECTION: {
      const { section } = action.payload

      return state.updateIn(
        [section.document.id, 'sections'],
        sections => sections.push(section.id)
      )
    }

    case documentActionTypes.ATTACH_TAG: {
      const { tag, documentId } = action.payload

      return state.updateIn(
        [documentId, 'tags'],
        tags => tags.push(tag)
      )
    }

    default:
      return state
  }
}

export default documentsReducer
