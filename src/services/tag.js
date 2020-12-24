import request from './request'

const api = request('tag')

export const getTags = () => api.get('/')
export const createTag = body => api.post('/', body)

