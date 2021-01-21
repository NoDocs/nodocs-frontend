import { Map } from 'immutable'

import * as componentActionTypes from './componentActionTypes'
import * as documentActionTypes from '../document/documentActionTypes'

const initialState = new Map()

const componentsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case documentActionTypes.INITIALIZE_DOCUMENT:
    //   return action
    //     .payload
    //     .document
    //     .sections
    //     .reduce(
    //       (acc, section) => {
    //         const { components } = section

    //         return components.reduce(
    //           (acc, component) => acc.set(component.componentId, component),
    //           acc
    //         )
    //       },
    //       new Map()
    //     )

    // case componentActionTypes.PUT_COMPONENT:
    // case componentActionTypes.CREATE_COMPONENT: {
    //   return state.set(
    //     action.payload.componentId,
    //     new Map({
    //       id: action.payload.id,
    //       content: action.payload.content,
    //       rootDocument: action.payload.rootDocument
    //         ? new Map(action.payload.rootDocument)
    //         : undefined
    //     })
    //   )
    // }

    default:
      return state
  }
}

export default componentsReducer
