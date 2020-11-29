import request from './request'

const api = request('team_member')

export const getTeamMembers = () => api.get('/')
