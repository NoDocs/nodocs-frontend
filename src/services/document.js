import request from './request'

const api = request('document')

export const getDocuments = () => api.get('/')
export const getDocument = documentId => api.get(`/${documentId}`)
export const createDocument = body => api.post('/', body)
export const updateDocument = (documentId, body) => api.put(`/${documentId}`, body)
