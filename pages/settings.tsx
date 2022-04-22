import type { NextPage } from 'next'
import Layout from '../layout/Layout'
import Settings from '../components/Settings'

const SettingsPage: NextPage = () => {
  return (
    <Layout title="Settings" description="This is the Settings page">
      <Settings />
    </Layout>
  )
}

export default SettingsPage
