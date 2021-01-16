import request from './request'

const api = request('team/member')

export const addMembers = (body) => api.post('/', body)
