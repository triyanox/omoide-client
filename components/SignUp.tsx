import React, { useState } from 'react'
import { SubmitButton } from './Buttons'
import Input from './Input'
import * as userService from '../services/userService'
import toast, { Toaster } from 'react-hot-toast'

type Props = {}

const Register = (props: Props) => {
  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    })
  }

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
      toast.error('Please try again later')
    }
  }

  return (
    <section className="mt-4 flex h-screen w-full flex-col-reverse items-center justify-center gap-y-8 px-10 md:px-24 lg:flex-row xl:px-20">
      <div className="mx-8 flex w-full flex-col items-center justify-center gap-4 sm:mx-16 lg:mx-0">
        <h1 className="to:text-zinc-200 mb-8 text-4xl text-zinc-900 dark:text-zinc-200">
          Sign Up
        </h1>
        <form
          className="flex w-full flex-col items-center justify-center gap-8 py-4"
          onSubmit={handleSubmit}
        >
          <Input
            name="name"
            id="name"
            type="name"
            placeholder="Full Name"
            value={account.name}
            title="Your name should be at least 5 characters long and spaces are allowed"
            pattern="^[a-zA-Z ]{5,}$"
            onChange={handleChange}
          />
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            title="Your email should be in the right format "
            value={account.email}
            onChange={handleChange}
          />
          <Input
            name="password"
            id="password"
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Your password should be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter"
            placeholder="Password"
            value={account.password}
            onChange={handleChange}
          />
          <SubmitButton text="Sign Up" />
        </form>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </section>
  )
}

export default Register
