import { createContext, useContext } from 'react'

export const UserContext = createContext({
  _id: '',
  name: '',
  email: '',
  link: '',
  isDemo: true,
  iat: 0,
  loggedIn: false,
})

export const useUser = () => {
  return useContext(UserContext)
}
