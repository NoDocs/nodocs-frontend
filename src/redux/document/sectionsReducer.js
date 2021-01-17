import { Map, List } from 'immutable'
import * as documentActionTypes from './documentActionTypes'

import * as componentActionTypes from '../component/componentActionTypes'

const initialState = new Map()

const sectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case documentActionTypes.INITIALIZE_DOCUMENT: {
      return action
        .payload
        .document
        .sections
        .reduce(
          (res, curr) => res
            .set(
              curr.id,
              new Map(curr)
                .delete('components')
                .set('componentIds', curr.components.map(component => component.componentId))
            ),
          new Map()
        )
    }

    case documentActionTypes.CREATE_DOCUMENT: {
      return action
        .payload
        .sections
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

    case componentActionTypes.CREATE_COMPONENT:
    case componentActionTypes.PUT_COMPONENT: {
      const { componentId, sectionId } = action.payload

      return state.updateIn(
        [sectionId, 'components'],
        (componentIds = new List()) => componentIds.push(componentId))
    }

    case documentActionTypes.CLEAR_DOCUMENT:
      return initialState

    default:
      return state
  }
}

export default sectionsReducer
