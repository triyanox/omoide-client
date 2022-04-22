import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { UserContext } from '../components/UserContext'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import jwtDecode from 'jwt-decode'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    try {
      let jwt: any = localStorage.getItem('token')
      let decoded: {
        _id: string
        name: string
        email: string
        link: string
        isDemo: boolean
        iat: number
        loggedIn: boolean
      } = jwtDecode(jwt)
      setUser({
        _id: decoded._id,
        name: decoded.name,
        email: decoded.email,
        link: decoded.link,
        isDemo: decoded.isDemo,
        iat: decoded.iat,
        loggedIn: true,
      })
      if (router.pathname === '/login' || router.pathname === '/signup') {
        window.location.replace('/')
      }
    } catch {
      if (
        router.pathname !== '/login' &&
        router.pathname !== '/' &&
        router.pathname !== '/signup'
      ) {
        window.location.replace('/login')
      }
      setUser({ ...user, loggedIn: false })
    }
  }, [])

  const [user, setUser] = useState({
    _id: '',
    name: '',
    email: '',
    link: '',
    isDemo: true,
    iat: 0,
    loggedIn: false,
  })

  return (
    <UserContext.Provider value={user}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContext.Provider>
  )
}

export default MyApp
