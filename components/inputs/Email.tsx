import { ChangeEvent, useState } from 'react'
type Props = {
  setForm: (form: any) => void
  form: {
    email: string
    password?: string
    name?: string
  }
  sm?: boolean
}

const EmailInput = (props: Props) => {
  const [email, setEmail] = useState('')
  const [helper, setHelper] = useState({
    text: '',
    color: '',
  })

  const validateEmail = (value: string) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    props.setForm({ ...props.form, email: e.target.value })
    if (e.target.value === '') {
      setHelper({
        text: '',
        color: '',
      })
      return
    }
    const isValid = validateEmail(e.target.value)
    setHelper({
      text: isValid ? 'Correct email' : 'Enter a valid email',
      color: isValid ? 'success' : 'error',
    })
    return
  }

  return (
    <input
      className={`${
        props.sm ? 'w-full sm:w-[360px]' : 'w-[360px]'
      } rounded-2xl md:w-[400px]  
      ${
        helper.color === 'error'
          ? 'bg-red-200 text-red-600 dark:bg-red-600 dark:bg-opacity-20 dark:text-red-400'
          : helper.color === 'success'
          ? 'bg-green-200 text-green-600 dark:bg-green-600 dark:bg-opacity-20 dark:text-green-400'
          : 'bg-zinc-100 text-black dark:bg-zinc-900 dark:text-white'
      }
      
      px-6 py-3 text-lg font-medium  outline-none transition-all duration-200 focus:placeholder:invisible dark:focus:placeholder:text-zinc-900 `}
      value={email}
      onChange={handleChange}
      color={helper.color}
      type="email"
      placeholder="Email"
    />
  )
}

export default EmailInput
