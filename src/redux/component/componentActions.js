import * as componentActionTypes from './componentActionTypes'

export const putComponent = (component) => ({
  type: componentActionTypes.PUT_COMPONENT,
  payload: component
})

export const createComponent = ({ componentId, content, sectionId }) => ({
  type: componentActionTypes.CREATE_COMPONENT,
  payload: {
    componentId,
    content,
    sectionId
  },
})
