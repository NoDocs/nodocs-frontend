import * as componentActionTypes from './componentActionTypes'

export const putComponents = (components) => ({
  type: componentActionTypes.PUT_COMPONENTS,
  payload: {
    components,
  }
})

export const createComponent = ({ id, content }) => ({
  type: componentActionTypes.CREATE_COMPONENT,
  payload: {
    id,
    content,
  },
})
