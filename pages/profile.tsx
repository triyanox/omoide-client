import type { NextPage } from 'next'
import Layout from '../layout/Layout'
import Profile from '../components/Profile'
import { useUser } from '../components/UserContext'

const ProfilePage: NextPage = () => {
  const { link } = useUser()
  return (
    <Layout title="Profile" description="Memory sharing platform">
      <Profile />
    </Layout>
  )
}

export default ProfilePage
