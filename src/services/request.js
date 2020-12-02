import apisauce from 'apisauce'
import jwt_decode from 'jwt-decode'

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

const requestAccessToken = async () => {
  try {
    const api = apisauce.create({
      baseURL: `${process.env.BASE_API_URL}/auth`,
      headers: {
        'Content-type': 'application/json',
      },
    })
    const { data } = await api.get('/token', {}, { withCredentials: true })
    if (data.accessToken) {
      localStorage.setItem('token', data.accessToken)
      return data.accessToken
    }
  } catch (error) {
    localStorage.removeItem('token')
  }
  return false
}

const getAccessToken = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    const data = jwt_decode(token, { headers: true })
    const isValid = new Date(data.exp * 1000) > new Date()

    if (!isValid) return await requestAccessToken()
    return token
  }
}

const getHeaders = async () => {
  const socketId = localStorage.getItem('client-socket-id')
    
  const headers = {
    'Content-type': 'application/json',
  }

  if (socketId) headers['x-socket-client-id'] = socketId

  return headers
}

const request = (parentUrl = '') => {
  const api = apisauce.create({
    baseURL: `${process.env.BASE_API_URL}/${parentUrl}`,
    headers: {
      'Content-type': 'application/json',
    },
  })

  api.axiosInstance.interceptors.request.use(async (config) => {
    const token = await getAccessToken(config.headers)
    if(token) config.headers['Authorization'] = token
    return config
  })

  const get = (url, params = {}) => {
    api.setHeaders(getHeaders())

    return api
      .get(urlWithParams(url, params), {}, { withCredentials: true })
      .then(checkStatus)
  }

  const post = (url, data = {}) => {
    api.setHeaders(getHeaders())

    return api
      .post(url, data, { withCredentials: true })
      .then(checkStatus)
  }

  const deleteRequest = (url, params = {}) => {
    api.setHeaders(getHeaders())

    return api
      .delete(url, params, { withCredentials: true })
      .then(checkStatus)
  }

  const put = (url, data = {}) => {
    api.setHeaders(getHeaders())

    return api
      .put(url, data, { withCredentials: true })
      .then(checkStatus)
  }

  return {
    get,
    post,
    delete: deleteRequest,
    put,
  }
}

export default request
