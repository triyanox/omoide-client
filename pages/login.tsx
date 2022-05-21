import type { NextPage } from 'next'
import LoginForm from '../components/Login'
import Layout from '../layout/Layout'

const Login: NextPage = () => {
  return (
    <Layout title="Omoide - Login" description="Memory sharing platform">
      <LoginForm />
    </Layout>
  )
}

export default Login
