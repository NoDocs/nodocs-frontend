import { Map } from 'immutable'
import * as documentActionTypes from './documentActionTypes'

const initialState = new Map()

const pagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case documentActionTypes.INITIALIZE_DOCUMENT: {
      return action
        .payload
        .document
        .sections
        .reduce((pages, section) => pages.concat(section.pages), [])
        .reduce((res, curr) => res.set(curr.id, new Map(curr)), new Map())
    }

    case documentActionTypes.CREATE_DOCUMENT: {
      return action
        .payload
        .sections
        .map(section => ({ ...section, pages: section.pages.map(page => page.id) }))
        .reduce(
          (res, curr) => res.set(curr.id, new Map(curr)),
          new Map()
        )
    }

    case documentActionTypes.CLEAR_DOCUMENT: {
      return initialState
    }

    default:
      return state
  }
}

export default pagesReducer
