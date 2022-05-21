import type { NextPage } from 'next'
import Layout from '../layout/Layout'
import NothingToShow from '../components/NothingToShow'
const Custom500: NextPage = () => {
  return (
    <Layout title="500" description="Memory sharing platform">
      <NothingToShow />
    </Layout>
  )
}

export default Custom500
