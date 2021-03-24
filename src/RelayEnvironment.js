import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const getToken = () => localStorage.getItem('token')
 
function fetchQuery(operation, variables, cacheConfig = {}) {
  // Instead of making an actual HTTP request to the API, use
  // hydrated data available during the initial page load.
  if (window.data !== undefined) {
    cacheConfig.payload = window.data
    delete window.data
  }

  if (cacheConfig.payload) {
    return Promise.resolve(cacheConfig.payload)
  }

  return fetch('http://localhost:8000/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `bearer ${getToken()}`
    },
    body: JSON.stringify({ query: operation.text, variables }),
    credentials: 'include',
  })
    .then(res => res.json())
}

const recordSource = new RecordSource()
const store = new Store(recordSource)
const network = Network.create(fetchQuery)

const relay = new Environment({ store, network })

export default relay
