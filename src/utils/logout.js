import history from './history'

const logout = () => {
  localStorage.clear()
  history.push('/login')
}

export default logout
