import type { NextPage } from 'next'
import Register from '../components/SignUp'
import Layout from '../layout/Layout'

const Signup: NextPage = () => {
  return (
    <Layout title="Omoide - Signup" description="Memory sharing platform">
      <Register />
    </Layout>
  )
}

export default Signup
