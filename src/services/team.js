import request from './request'

const api = request('team')

export const getTeams = () => api.get('/')
export const createTeam = (body) => api.post('/', body)
