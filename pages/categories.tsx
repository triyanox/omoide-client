import type { NextPage } from 'next'
import Catgories from '../components/Catgories'
import Layout from '../layout/Layout'

const CategoriesPage: NextPage = () => {
  return (
    <Layout title="Categories" description="Memory sharing platform">
      <Catgories />
    </Layout>
  )
}

export default CategoriesPage
