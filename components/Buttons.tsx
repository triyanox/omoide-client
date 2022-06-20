import { ReactNode } from 'react'

type FilledButton = {
  text: string
  onClick?: () => void
}

export const FilledButton = (props: FilledButton) => {
  return (
    <button
      onClick={props.onClick}
      className="rounded-full bg-black px-6 py-2 text-xl font-bold text-white ring-zinc-200 transition-all duration-300 hover:scale-105 hover:ring-4 active:scale-95 dark:bg-white dark:text-black dark:ring-zinc-800"
    >
      {props.text}
    </button>
  )
}

export const ActionButton = (props: FilledButton) => {
  return (
    <button className="rounded-full bg-black px-8 py-3 text-lg font-bold text-white ring-0 ring-zinc-200 transition-all duration-300 hover:scale-105 hover:ring-4 active:scale-95 dark:bg-white dark:text-black dark:ring-zinc-800">
      {props.text}
    </button>
  )
}

type IconButton = {
  icon: ReactNode
  onclick?: () => void
}

export const IconButton = (props: IconButton) => {
  return (
    <button
      onClick={props.onclick}
      className="rounded-full bg-black p-2 text-xl font-bold text-white ring-zinc-200 transition-all duration-300 hover:scale-105 hover:ring-4 active:scale-95 dark:bg-white dark:text-black dark:ring-zinc-800"
    >
      {props.icon}
    </button>
  )
}

type SubmitButton = {
  text: string
  sm?: boolean
  onClick?: () => void
}

export const SubmitButton = (props: SubmitButton) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className={`${
        props.sm ? 'w-full sm:w-[360px]' : 'w-[360px]'
      } mt-4 rounded-2xl bg-zinc-900 py-3 px-4 font-bold text-white transition-all duration-300 hover:ring-4 hover:ring-zinc-300 active:scale-95 dark:bg-zinc-100 dark:text-black dark:hover:ring-zinc-700 md:w-[400px]`}
    >
      {props.text}
    </button>
  )
}

export const BorderButton = (props: SubmitButton) => {
  return (
    <button
      onClick={props.onClick}
      className={`${
        props.sm ? 'w-full sm:w-[360px]' : 'w-[360px]'
      } mt-4 rounded-2xl border-2 border-zinc-900 py-3 px-4 font-bold text-black transition-all duration-300 hover:ring-4 hover:ring-zinc-300 active:scale-95 dark:border-zinc-100 dark:text-white dark:hover:ring-zinc-700 md:w-[400px]`}
    >
      {props.text}
    </button>
  )
}

export const DeleteButton = (props: SubmitButton) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className={`${
        props.sm ? 'w-full sm:w-[360px]' : 'w-[360px]'
      } mt-4 rounded-2xl bg-red-500 py-3 px-4 font-bold text-white transition-all duration-300 hover:ring-4 hover:ring-red-300 active:scale-95 dark:bg-red-600 dark:text-black dark:hover:ring-red-400 md:w-[400px]`}
    >
      {props.text}
    </button>
  )
}
