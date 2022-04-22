import http from './http'
import config from '../production/config.json'

export function getToken() {
  let token
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token')
  }
  return token || ''
}

const authEndpoint = config.endpoint + '/v1/auth'

export async function userLogin(user: { email: string; password: string }) {
  const response = await http.post(authEndpoint, user)
  return localStorage.setItem('token', response.data)
}

export function loginWithToken(token: string) {
  localStorage.setItem('token', token)
}

export function logout() {
  localStorage.removeItem('token')
}
