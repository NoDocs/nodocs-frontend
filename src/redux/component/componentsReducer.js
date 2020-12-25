import { Map } from 'immutable'
import * as componentActionTypes from './componentActionTypes'

const initialState = new Map()

const componentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case componentActionTypes.PUT_COMPONENT:
    case componentActionTypes.CREATE_COMPONENT: {
      console.log(action)

      return state.set(
        action.payload.componentId,
        new Map({
          id: action.payload.id,
          content: action.payload.content,
          rootDocument: action.payload.rootDocument
            ? new Map(action.payload.rootDocument)
            : undefined
        })
      )
    }

    default:
      return state
  }
}

export default componentsReducer
