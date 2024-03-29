import request from './request'

const api = request('auth')

export const signIn = body => api.post('sign-in', body)
export const register = body => api.post('register', body)
export const me = () => api.get('/me')
