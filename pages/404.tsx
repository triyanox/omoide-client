import type { NextPage } from 'next'
import Layout from '../layout/Layout'
import NothingToShow from '../components/NothingToShow'
const Custom404: NextPage = () => {
  return (
    <Layout title="404" description="404 page">
      <NothingToShow />
    </Layout>
  )
}

export default Custom404
