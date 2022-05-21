import type { NextPage } from 'next'
import Layout from '../layout/Layout'
import Write from '../components/Write'
const WritePage: NextPage = () => {
  return (
    <Layout title="Write" description="Memory sharing platform">
      <Write />
    </Layout>
  )
}

export default WritePage
