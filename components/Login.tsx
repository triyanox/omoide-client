import React, { useState } from 'react'
import { BorderButton, SubmitButton } from './Buttons'
import * as authService from '../services/authService'
import toast, { Toaster } from 'react-hot-toast'
import EmailInput from './inputs/Email'
import PasswordInput from './inputs/Password'

type Props = {}

const LoginForm = (props: Props) => {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  })

  async function handleDemo() {
    const data = {
      email: 'demo@omoide.com',
      password: 'Omoide2022@',
    }

    const login = authService.userLogin(data)
    try {
      toast.promise(login, {
        loading: 'Loading',
        success: 'Successfully logged in , redirecting...',
        error: 'Unable to login',
      })
      await login
      setTimeout(() => {
        window.location.replace('/')
      }, 2000)
    } catch {
      toast.error('Unable to login')
    }
  }

  const handleSubmit = async (e: Event | any) => {
    e = e || window.event
    e.preventDefault()
    const data = {
      email: account.email,
      password: account.password,
    }

    const login = authService.userLogin(data)
    try {
      toast.promise(login, {
        loading: 'Loading',
        success: 'Successfully logged in , redirecting...',
        error: 'Unable to login',
      })
      await login
      setTimeout(() => {
        window.location.replace('/')
      }, 2000)
    } catch (ex: any) {
      toast.error(ex.response.data)
    }
  }
  return (
    <section className="mt-4 flex h-screen w-full flex-col-reverse items-center justify-center gap-y-8 px-10 md:px-24 lg:flex-row xl:px-20">
      <div className="mx-8 flex w-full flex-col items-center justify-center gap-4 sm:mx-16 lg:mx-0">
        <h1 className="mb-8 text-5xl font-bold text-zinc-900 dark:text-zinc-200">
          Log in
        </h1>
        <form
          className="flex w-full flex-col items-center justify-center gap-4 py-4"
          onSubmit={handleSubmit}
        >
          <EmailInput form={account} setForm={setAccount} sm={true} />
          <PasswordInput form={account} setForm={setAccount} sm={true} />
          <SubmitButton text="Login" sm={true} />
        </form>
        <BorderButton text="Demo Login" onClick={handleDemo} sm={true} />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </section>
  )
}

export default LoginForm
