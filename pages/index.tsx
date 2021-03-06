import type { NextPage } from 'next'
import Hero from '../components/Hero'
import { useUser } from '../components/UserContext'
import Layout from '../layout/Layout'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  const { loggedIn } = useUser()
  return (
    <Layout
      title={loggedIn ? 'Welcome' : 'Omoide'}
      description="Memory sharing platform"
    >
      {loggedIn ? <Feed /> : <Hero />}
    </Layout>
  )
}

export default Home
