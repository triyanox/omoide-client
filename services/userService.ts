import http from './http'
import config from '../production/config.json'

const usersEndpoint = config.endpoint + '/v1/users'

// create a user
export async function createUser(user: { email: string; password: string }) {
  const response = await http.post(usersEndpoint, user)
  return localStorage.setItem('token', response.headers['x-auth-token'])
}

// update a user
export async function updateUser(user: {
  name: string
  email: string
  password: string
}) {
  const response = await http.put(usersEndpoint, user)
  return localStorage.setItem('token', response.headers['x-auth-token'])
}

// delete a user
export async function deleteUser() {
  return http.delete(usersEndpoint)
}

// get a user
export async function getUser(id: string) {
  return http.get(usersEndpoint + '/user/' + id)
}

// get a user by link
export async function getUserByLink(link: string) {
  return http.get(usersEndpoint + '/' + link)
}
