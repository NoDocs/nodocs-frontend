import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import jwt_decode from 'jwt-decode'
import logout from 'utils/logout'

const requestAccessToken = async () => {
  try {
    const api = await fetch(`${process.env.BASE_API_URL}/get-access-token`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' }
    }).then(response => response.json())

    const { data } = api

    if (data.accessToken) {
      localStorage.setItem('token', data.accessToken)
      return data.accessToken
    }
  } catch (error) {
    localStorage.removeItem('token')
    logout()
  }
}

const getAccessToken = async () => {
  const token = localStorage.getItem('token')

  if (token) {
    const data = jwt_decode(token, { headers: true })
    const isExpired = new Date(data.exp * 1000) < new Date()

    return isExpired
      ? requestAccessToken()
      : Promise.resolve(token)
  }
}

const fetchQuery = async (operation, variables, cacheConfig = {}) => {
  const accessToken = await getAccessToken()

  // Instead of making an actual HTTP request to the API, use
  // hydrated data available during the initial page load.
  if (window.data !== undefined) {
    cacheConfig.payload = window.data
    delete window.data
  }

  if (cacheConfig.payload) {
    return Promise.resolve(cacheConfig.payload)
  }

  return fetch(`${process.env.BASE_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({ query: operation.text, variables }),
    credentials: 'include',
  })
    .then(res => res.json())
    .catch(console.log)
}

const recordSource = new RecordSource()
export const store = new Store(recordSource)
const network = Network.create(fetchQuery)

const relay = new Environment({ store, network })

export default relay
