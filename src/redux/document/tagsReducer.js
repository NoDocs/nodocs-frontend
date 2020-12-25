import { Map } from 'immutable'
import * as documentActionTypes from './documentActionTypes'

const initialState = new Map()

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case documentActionTypes.INITIALIZE_DOCUMENT: {
      return action
        .payload
        .document
        .tags
        .reduce(
          (res, curr) => res.set(curr.id, new Map(curr)),
          new Map()
        )
    }

    case documentActionTypes.ATTACH_TAG: {
      const { tag } = action.payload

      return state.set(
        tag.id,
        new Map({
          id: tag.id,
          name: tag.name,
          updatedAt: tag.updatedAt,
          createdAt: tag.createdAt,
        })
      )
    }

    default:
      return state
  }
}

export default tagsReducer
