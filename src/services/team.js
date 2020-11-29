import request from './request'

const api = request('team')

export const getTeams = () => api.get('/')
