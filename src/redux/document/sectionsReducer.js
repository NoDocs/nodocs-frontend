import { Map, List } from 'immutable'
import * as documentActionTypes from './documentActionTypes'

const initialState = new Map()

const sectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case documentActionTypes.INITIALIZE_DOCUMENT: {
      return action
        .payload
        .document
        .sections
        .map(section => ({ ...section, pages: section.pages.map(curr => curr.id) }))
        .reduce(
          (res, curr) => res.set(curr.id, new Map(curr)),
          new Map()
        )
    }

    case documentActionTypes.CREATE_DOCUMENT: {
      return action
        .payload
        .sections
        .map(section => ({ ...section, pages: section.pages.map(curr => curr.id) }))
        .reduce(
          (res, curr) => res.set(curr.id, new Map(curr)),
          new Map()
        )
    }

    case documentActionTypes.CREATE_SECTION: {
      const { section } = action.payload

      return state.set(
        section.id,
        new Map({
          id: section.id,
          title: section.title,
          sectionId: section.sectionId,
          content: section.content,
          componentIds: new List()
        })
      )
    }

    case documentActionTypes.CLEAR_DOCUMENT: {
      return initialState
    }

    default:
      return state
  }
}

export default sectionsReducer
