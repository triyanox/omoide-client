import type { NextPage } from 'next'
import LoginForm from '../components/Login'
import Seacrh from '../components/Seacrh'
import Layout from '../layout/Layout'

const SearchPage: NextPage = () => {
  return (
    <Layout title="Search" description="Memory sharing platform">
      <Seacrh />
    </Layout>
  )
}

export default SearchPage
