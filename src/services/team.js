import request from './request'

const api = request('team')
const collectionsAPI = request('collection')

export const getTeams = () => api.get('/')
export const getTeam = teamId => api.get(`/${teamId}`)
export const createTeam = (body) => api.post('/', body)

export const createCollection = body => collectionsAPI.post('/', body)
export const getCollection = collectionId => collectionsAPI.get(`/${collectionId}`)
