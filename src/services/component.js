import request from './request'

const api = request('component')

export const createComponent = body => api.post('/', body)
export const getComponent = componentId => api.get(`/${componentId}`)
export const updateComponent = (componentId, body) => api.put(`/${componentId}`, body)
