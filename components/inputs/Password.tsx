import { ChangeEvent, Fragment, useState } from 'react'
import { TbEye, TbEyeOff } from 'react-icons/tb'

type Props = {
  setForm: (form: any) => void
  form: {
    email: string
    password: string
    name?: string
  }
  sm?: boolean
}

const PasswordInput = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [helper, setHelper] = useState({
    text: '',
    color: '',
  })

  const validatePassword = (value: string) => {
    return value.length > 7
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    props.setForm({ ...props.form, password: e.target.value })
    if (e.target.value === '') {
      setHelper({
        text: '',
        color: '',
      })
      return
    }
    const isValid = validatePassword(e.target.value)
    setHelper({
      text: isValid
        ? 'Good Password'
        : 'Password must be at least 8 characters long',
      color: isValid ? 'success' : 'error',
    })
    return
  }

  return (
    <div
      className={`${
        props.sm ? 'w-full sm:w-[360px]' : 'w-[360px]'
      } relative flex items-center justify-center pb-2 md:w-[400px]`}
    >
      <input
        className={`w-full  rounded-2xl     
      ${
        helper.color === 'error'
          ? 'bg-red-200 text-red-600 dark:bg-red-600 dark:bg-opacity-20 dark:text-red-400'
          : helper.color === 'success'
          ? 'bg-green-200 text-green-600 dark:bg-green-600 dark:bg-opacity-20 dark:text-green-400'
          : 'bg-zinc-100 text-black dark:bg-zinc-900 dark:text-white'
      }
      
      px-6 py-3 text-lg font-medium  outline-none transition-all duration-200 focus:placeholder:invisible dark:focus:placeholder:text-zinc-900 `}
        onChange={handleChange}
        value={password}
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
      />
      <button
        type="button"
        className="absolute right-2 z-20 h-8 w-8"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <TbEyeOff className="text-2xl" />
        ) : (
          <TbEye className="text-2xl" />
        )}
      </button>
      <p
        className={`absolute top-14 mt-2 text-xs
        ${
          helper.color === 'error'
            ? 'text-red-600 dark:text-red-400'
            : helper.color === 'success'
            ? 'text-green-600 dark:text-green-400'
            : 'text-black dark:text-white'
        }
        `}
      >
        {helper.text}
      </p>
    </div>
  )
}

export default PasswordInput
