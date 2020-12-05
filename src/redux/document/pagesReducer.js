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
        .reduce(
          (res, curr) => {
            const { pages } = curr

            pages.forEach(page => { res = res.set(page.pageId, new Map(page)) })

            return res
          },
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
