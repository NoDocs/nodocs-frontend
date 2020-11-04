import { Map } from 'immutable'
import * as componentActionTypes from './componentActionTypes'

const initialState = new Map()

const componentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case componentActionTypes.PUT_COMPONENTS: {
      const normalized = action.payload.components.reduce(
        (res, curr) => res.set(curr.id, new Map(curr)),
        new Map()
      )

      return normalized
    }

    case componentActionTypes.CREATE_COMPONENT: {
      return state.set(
        action.payload.id,
        new Map({
          id: action.payload.id,
          content: action.payload.content,
        })
      )
    }

    default:
      return state
  }
}

export default componentsReducer
