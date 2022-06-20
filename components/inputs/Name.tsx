import { ChangeEvent, useState } from 'react'

type Props = {
  setForm: (form: any) => void
  form: {
    email: string
    password: string
    name?: string
  }
  sm?: boolean
}

const NameInput = (props: Props) => {
  const [name, setName] = useState('')
  const [helper, setHelper] = useState({
    text: '',
    color: '',
  })

  const validatePassword = (value: string) => {
    return value.length > 1
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    props.setForm({ ...props.form, name: e.target.value })
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
        ? 'Good name format'
        : 'Name must be at least 2 characters long',
      color: isValid ? 'success' : 'error',
    })
    return
  }

  return (
    <input
      className={`${
        props.sm ? 'w-full sm:w-[360px]' : 'w-[360px]'
      }  rounded-2xl md:w-[400px]    
      ${
        helper.color === 'error'
          ? 'bg-red-200 text-red-600 dark:bg-red-600 dark:bg-opacity-20 dark:text-red-400'
          : helper.color === 'success'
          ? 'bg-green-200 text-green-600 dark:bg-green-600 dark:bg-opacity-20 dark:text-green-400'
          : 'bg-zinc-100 text-black dark:bg-zinc-900 dark:text-white'
      }
      
      px-6  py-3 text-lg font-medium  outline-none transition-all duration-200 focus:placeholder:invisible dark:focus:placeholder:text-zinc-900 `}
      onChange={handleChange}
      value={name}
      color={helper.color}
      type="name"
      placeholder="Name"
    />
  )
}

export default NameInput
