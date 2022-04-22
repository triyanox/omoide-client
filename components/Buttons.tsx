import { ReactNode } from 'react'
type Props = {
  text: string
  onClick?: () => void
}

export const Button = (props: Props) => {
  return (
    <button className="flex w-full flex-row items-center justify-center gap-2 rounded-xl bg-black px-6 py-2 text-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_35px_60px_-15px] active:scale-95 dark:bg-white dark:text-black md:w-auto">
      {props.text}{' '}
    </button>
  )
}

export const ButtonWhite = (props: Props) => {
  return (
    <button className="flex flex-row items-center justify-center gap-2 rounded-xl px-6 py-2 text-xl text-black transition-all duration-200 hover:scale-105 active:scale-95 dark:text-white">
      {props.text}{' '}
    </button>
  )
}

export const ShareButton = (props: { elements: ReactNode[] }) => {
  return (
    <button className="flex flex-row items-center justify-center gap-2 rounded-xl bg-black px-6 py-2 text-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_35px_60px_-15px] active:scale-95 dark:bg-white dark:text-black">
      {props.elements}
    </button>
  )
}

export const SubmitButton = (props: Props) => {
  return (
    <button
      type="submit"
      className="flex w-full flex-row items-center justify-center gap-2 rounded-xl bg-black px-20 py-3 text-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_35px_60px_-15px] active:scale-95 dark:bg-white dark:text-black md:w-2/3 lg:w-1/2"
    >
      {props.text}{' '}
    </button>
  )
}

export const DeleteButton = (props: Props) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className="flex w-full flex-row items-center justify-center gap-2 rounded-xl bg-red-600 px-20 py-3 text-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_35px_60px_-15px] active:scale-95 dark:bg-red-700 dark:text-black md:w-2/3 lg:w-1/2"
    >
      {props.text}{' '}
    </button>
  )
}

type PropsDel = {
  children: ReactNode
  onClick: (e: Event | any) => void
}

export const DeleteButtonWithIcon = (props: PropsDel) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className="flex flex-row items-center justify-center gap-2 rounded-xl px-4 py-2 text-xl text-red-700 active:scale-95 dark:text-red-600"
    >
      {props.children}
    </button>
  )
}

export const EditButtonWithIcon = (props: PropsDel) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className="flex flex-row items-center justify-center gap-2 rounded-xl px-4 py-2 text-xl text-zinc-800 active:scale-95 dark:text-zinc-200"
    >
      {props.children}
    </button>
  )
}
