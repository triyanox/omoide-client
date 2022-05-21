import type { NextPage } from 'next'
import Layout from '../layout/Layout'
import Settings from '../components/Settings'

const SettingsPage: NextPage = () => {
  return (
    <Layout title="Settings" description="Memory sharing platform">
      <Settings />
    </Layout>
  )
}

export default SettingsPage
