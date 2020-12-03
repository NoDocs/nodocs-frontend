import request from './request'

const api = request('team/member')

export const getMembers = (body) => api.get('/', body)
