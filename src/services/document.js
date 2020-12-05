import request from './request'

const api = request('document')

export const getDocuments = params => api.get('/', params)
export const getDocument = documentId => api.get(`/${documentId}`)
export const createDocument = body => api.post('/', body)
export const updateDocument = (documentId, body) => api.put(`/${documentId}`, body)
export const createSection = body => api.post('/section', body)
export const updateSection = (sectionId, body) => api.post(`/section/${sectionId}`, body)
export const createPage = body => api.post('/page', body)
