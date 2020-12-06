import request from './request'

const api = request('company')

export const getCompanies = () => api.get('/available')
export const setCurrentCompany = body => api.post('/current', body)
export const createCompany = body => api.post('/', body)
