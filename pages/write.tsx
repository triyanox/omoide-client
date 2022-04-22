import type { NextPage } from 'next'
import Layout from '../layout/Layout'
import Write from '../components/Write'
const WritePage: NextPage = () => {
  return (
    <Layout title="Write" description="This is the Write page">
      <Write />
    </Layout>
  )
}

export default WritePage
