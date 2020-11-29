import apisauce from 'apisauce'

const checkStatus = (response) => {
  const { data, error, status } = response

  if (status >= 200 && status < 300) {
    return Promise.resolve({
      message: data.message,
      data: data.data,
    })
  }

  if (status === 401) {
    return Promise.reject({ message: 'NotAuthorized' })
  }

  return Promise.reject(error)
}

const serialize = (obj, prefix) => {
  const str = []

  Object.keys(obj).forEach((p) => {
    if (Object.prototype.hasOwnProperty.call(obj, p)) {
      const k = prefix ? `${prefix}[${p}]` : p
      const v = obj[p]
      str.push((v !== null && typeof v === 'object') ?
        serialize(v, k) :
        `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    }
  })

  return str.join('&')
}

const urlWithParams = (urlString, params = {}) => {
  const url = urlString
  const query = serialize(params)

  return `${url}?${query}`
}

const getHeaders = () => {
  const token = localStorage.getItem('token')
  const socketId = localStorage.getItem('client-socket-id')

  const headers = {
    'Content-type': 'application/json',
  }

  if (token) headers['Authorization'] = token
  if (socketId) headers['x-socket-client-id'] = socketId

  return headers
}

export default (parentUrl = '') => {
  console.log(`${process.env.BASE_API_URL}/${parentUrl}`)
  const api = apisauce.create({
    baseURL: `${process.env.BASE_API_URL}/${parentUrl}`,
    headers: {
      'Content-type': 'application/json',
    },
  })

  const get = (url, params = {}) => {
    api.setHeaders(getHeaders())

    return api
      .get(urlWithParams(url, params))
      .then(checkStatus)
  }

  const post = (url, data = {}) => {
    api.setHeaders(getHeaders())

    return api
      .post(url, data)
      .then(checkStatus)
  }

  const deleteRequest = (url, params = {}) => {
    api.setHeaders(getHeaders())

    return api
      .delete(url, params)
      .then(checkStatus)
  }

  const put = (url, data = {}) => {
    api.setHeaders(getHeaders())

    return api
      .put(url, data)
      .then(checkStatus)
  }

  return {
    get,
    post,
    delete: deleteRequest,
    put,
  }
}
