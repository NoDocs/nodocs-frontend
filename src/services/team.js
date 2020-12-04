import request from './request'

const api = request('team')

export const getTeams = () => api.get('/')
export const getTeam = teamId => api.get(`/${teamId}`)
export const createTeam = (body) => api.post('/', body)
