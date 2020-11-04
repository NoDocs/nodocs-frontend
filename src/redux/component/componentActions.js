import * as componentActionTypes from './componentActionTypes'

export const putComponent = (component) => ({
  type: componentActionTypes.PUT_COMPONENT,
  payload: component
})

export const createComponent = ({ componentId, content }) => ({
  type: componentActionTypes.CREATE_COMPONENT,
  payload: {
    componentId,
    content,
  },
})
