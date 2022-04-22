import type { NextPage } from 'next'
import Catgories from '../components/Catgories'
import Layout from '../layout/Layout'

const CategoriesPage: NextPage = () => {
  return (
    <Layout title="Categories" description="This is the Categories page">
      <Catgories />
    </Layout>
  )
}

export default CategoriesPage
