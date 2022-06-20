import React, { useState } from 'react'
import { SubmitButton } from './Buttons'
import * as userService from '../services/userService'
import toast, { Toaster } from 'react-hot-toast'
import PasswordInput from './inputs/Password'
import EmailInput from './inputs/Email'
import NameInput from './inputs/Name'

type Props = {}

const Register = (props: Props) => {
  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = async (e: Event | any) => {
    e = e || window.event
    e.preventDefault()
    const data = {
      email: account.email,
      password: account.password,
      name: account.name,
    }
    const register = userService.createUser(data)
    try {
      toast.promise(register, {
        loading: 'Loading',
        success: 'Successfully registered , redirecting...',
        error: 'Unable to register',
      })
      await register
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
          Sign Up
        </h1>
        <form
          className="flex w-full flex-col items-center justify-center gap-4 py-4"
          onSubmit={handleSubmit}
        >
          <NameInput form={account} setForm={setAccount} sm={true} />
          <EmailInput form={account} setForm={setAccount} sm={true} />
          <PasswordInput form={account} setForm={setAccount} sm={true} />
          <SubmitButton text="Signup" sm={true} />
        </form>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </section>
  )
}

export default Register
