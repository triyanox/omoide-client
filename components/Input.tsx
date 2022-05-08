import React, { ChangeEventHandler } from 'react'

type Props = {
  name: string
  id: string
  type: string
  value: string
  pattern?: string
  placeholder: string
  title?: string
  onChange: ChangeEventHandler
}

const Input = (props: Props) => {
  return (
    <input
      name={props.name}
      id={props.id}
      type={props.type}
      pattern={props.pattern}
      title={props.title}
      value={props.value}
      onChange={props.onChange}
      className="w-full rounded-lg bg-gray-50 px-8 py-5 text-lg font-medium text-black placeholder-gray-500 ring-gray-500 ring-offset-4 ring-offset-white transition duration-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-500 hover:ring-2 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:text-gray-400 disabled:ring-0 group-hover:ring-2 group-hover:ring-gray-500 group-focus:ring-2 group-focus:ring-gray-800 dark:bg-zinc-900 dark:text-white dark:ring-offset-gray-900 dark:disabled:text-gray-500 md:w-2/3 lg:w-1/2"
      placeholder={props.placeholder}
      required
    />
  )
}

export default Input

export const ContentInput = (props: Props) => {
  return (
    <input
      name={props.name}
      id={props.id}
      type={props.type}
      title={props.title}
      pattern={props.pattern}
      value={props.value}
      onChange={props.onChange}
      className="h-48 w-full rounded-lg bg-gray-50 px-8 py-5 text-lg font-medium text-black placeholder-gray-500 ring-gray-500 ring-offset-4 ring-offset-white transition duration-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-500 hover:ring-2 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:text-gray-400 disabled:ring-0 group-hover:ring-2 group-hover:ring-gray-500 group-focus:ring-2 group-focus:ring-gray-800 dark:bg-zinc-900 dark:text-white dark:ring-offset-gray-900 dark:disabled:text-gray-500 md:w-2/3 lg:w-1/2"
      placeholder={props.placeholder}
      required
    />
  )
}

type SelectProps = {
  name: string
  id: string
  onChange: ChangeEventHandler
  value: string
}

export const SelectCategory = (props: SelectProps) => {
  return (
    <select
      className="w-full rounded-lg bg-gray-50 px-8 py-5 text-lg font-medium text-black placeholder-gray-500 ring-gray-500 ring-offset-4 ring-offset-white transition duration-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-500 hover:ring-2 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:text-gray-400 disabled:ring-0 group-hover:ring-2 group-hover:ring-gray-500 group-focus:ring-2 group-focus:ring-gray-800 dark:bg-zinc-900 dark:text-white dark:ring-offset-gray-900 dark:disabled:text-gray-500 md:w-2/3 lg:w-1/2"
      required
      name={props.name}
      id={props.id}
      onChange={props.onChange}
      value={props.value}
    >
      <option value="">Select Category</option>
      <option value="Happy">Happy</option>
      <option value="Sad">Sad</option>
      <option value="Angry">Angry</option>
      <option value="Scared">Scared</option>
      <option value="Surprised">Surprised</option>
      <option value="Disgusted">Disgusted</option>
      <option value="Afraid">Afraid</option>
      <option value="Confused">Confused</option>
      <option value="Disappointed">Disappointed</option>
      <option value="Annoyed">Annoyed</option>
      <option value="Frustrated">Frustrated</option>
      <option value="Tired">Tired</option>
      <option value="Bored">Bored</option>
      <option value="Excited">Excited</option>
      <option value="Worried">Worried</option>
      <option value="Nervous">Nervous</option>
      <option value="Stressed">Stressed</option>
      <option value="Anxious">Anxious</option>
    </select>
  )
}
