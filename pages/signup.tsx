import type { NextPage } from 'next'
import Register from '../components/SignUp'
import Layout from '../layout/Layout'

const Signup: NextPage = () => {
  return (
    <Layout title="Signup" description="This is the Signup page">
      <Register />
    </Layout>
  )
}

export default Signup
