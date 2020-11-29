import request from './request'

const api = request('company')

export const createCompany = body => api.post('/', body)
