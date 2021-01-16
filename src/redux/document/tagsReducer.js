import { Map } from 'immutable'
import * as documentActionTypes from './documentActionTypes'
import * as teamActionTypes from '../team/teamActionTypes'

const initialState = new Map()

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case documentActionTypes.CREATE_TAG:
    case documentActionTypes.ATTACH_TAG: {
      const { tag } = action.payload

      return state.set(
        tag.id,
        new Map({
          id: tag.id,
          name: tag.name,
          fullName: tag.name,
          updatedAt: tag.updatedAt,
          createdAt: tag.createdAt,
        })
      )
    }

    case teamActionTypes.INITIALIZE_TEAM: {
      return action
        .payload
        .team
        .tags
    }

    default:
      return state
  }
}

export default tagsReducer
