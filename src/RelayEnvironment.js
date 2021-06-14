import { Environment, Network, RecordSource, Store, Observable } from 'relay-runtime'
import jwt_decode from 'jwt-decode'
import logout from 'utils/logout'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import size from 'lodash/fp/size'

import { notificationActions } from 'logic/notification'
import reduxStore from './store'

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

const errorDescriptions = {
  'USER_NOT_WHITELISTED': 'Application is in Beta, so you must be invited in order to access the platform. Please contact faraday@nodocs.app',
}

const fetchQuery = async (operation, variables, cacheConfig = {}, uploadables) => {
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

  let body = JSON.stringify({ query: operation.text, variables })

  if (uploadables) {
    body = new FormData()
    body.append('query', operation.text)
    body.append('variables', JSON.stringify(variables))

    Object
      .keys(uploadables)
      .forEach(key => { body.append(key, uploadables[key]) })
  }

  return fetch(`${process.env.BASE_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      ...(uploadables ? {} : { 'content-type': 'application/json' }),
      'Authorization': `Bearer ${accessToken}`
    },
    body,
    credentials: 'include',
  })
    .then(res => res.json())
    .then((response) => {
      if (size(response.errors)) {
        const [{ message }] = response.errors
        const errorDescription = errorDescriptions[message] || message
        throw new Error(errorDescription)
      }

      return response
    })
    .catch(error => reduxStore.dispatch(notificationActions.notify({
      type: 'error',
      message: error.toString()
    })))
}

const subscriptionClient = new SubscriptionClient(process.env.SUBSCRIPTION_SERVER_WS, { reconnect: true })
const subscribeQuery = (operation, variables) => {
  const subscribeObservable = subscriptionClient.request({
    query: operation.text,
    operationName: operation.name,
    variables,
  })

  // Important: Convert subscriptions-transport-ws observable type to Relay's
  return Observable.from(subscribeObservable)
}

const recordSource = new RecordSource()
const store = new Store(recordSource)
const network = Network.create(fetchQuery, subscribeQuery)

const relay = new Environment({ store, network })

export default relay
