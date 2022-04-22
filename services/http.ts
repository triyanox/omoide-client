import axios from 'axios'
import * as auth from './authService'
import Router from 'next/router'
if (typeof window !== 'undefined') {
  axios.defaults.headers.common['x-auth-token'] = auth.getToken()
}

axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500
  if (!expectedError) {
    return Promise.reject(error)
  }
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}
