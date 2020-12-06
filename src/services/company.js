import request from './request'

const api = request('company')

export const getCompanies = () => api.get('/available')
export const createCompany = body => api.post('/', body)
