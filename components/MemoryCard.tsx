import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { DeleteButtonWithIcon, EditButtonWithIcon } from './Buttons'
import { MdDelete } from 'react-icons/md'
import { FiEdit2 } from 'react-icons/fi'
import { BsHeartFill } from 'react-icons/bs'
import { VscEye } from 'react-icons/vsc'
import * as postService from '../services/postService'
import toast, { Toaster } from 'react-hot-toast'
import Router from 'next/router'

type Props = {
  title: string
  content: string
  category: string
  likes: number
  reads: number
  link: string
}

const MemoryCard = (props: Props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          transformOrigin: 'center',
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
          dump: 0.8,
          ease: 'easeInOut',
          stiffness: 100,
          elapsed: 1,
        }}
        whileTap={{ scale: 0.8 }}
        className="relative flex h-full w-full flex-col justify-center rounded-[12px] bg-gray-50 p-8 transition-all duration-200 hover:scale-105 dark:bg-zinc-900"
      >
        <Link href={`/memory/${props.link}`} passHref>
          <div className="flex cursor-pointer flex-col gap-4">
            <h1 className="text-xl font-semibold text-black dark:text-white md:text-2xl">
              {props.title}
            </h1>
            <div className="mb-1 flex flex-col justify-start text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              {props.content.slice(0, 80)}
            </div>
            <div className="flex w-full items-center justify-start">
              <div className="flex items-center justify-start gap-4">
                <p className="flex flex-row items-center justify-center gap-2 text-cyan-500">
                  {props.reads} <VscEye />
                </p>
                <p className="flex flex-row items-center justify-center gap-2 text-fuchsia-600">
                  {props.likes} <BsHeartFill />
                </p>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  )
}

export default MemoryCard

export const MemoryCardWithDelete = (props: Props) => {
  const handleDelete = async (e: Event | any) => {
    e = e || window.event
    e.preventDefault()
    const deleted = postService.deletePostByLink(props.link)
    try {
      toast.promise(deleted, {
        loading: 'Loading',
        success: 'Deleted',
        error: 'Error',
      })
      await deleted
    } catch (ex: any) {
      toast.error('Unable to delete the post')
    }
  }
  const handleEdit = (e: Event | any) => {
    e = e || window.event
    e.preventDefault()
    Router.replace(`/edit/${props.link}`)
  }
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          transformOrigin: 'center',
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        whileTap={{ scale: 0.9 }}
        transition={{
          duration: 0.6,
          dump: 0.8,
          ease: 'easeInOut',
          stiffness: 100,
          elapsed: 1,
        }}
        className="relative flex h-full w-full flex-col justify-center rounded-[12px] bg-gray-50 p-8 transition-all duration-300 hover:scale-105 dark:bg-zinc-900"
      >
        <Link href={`/memory/${props.link}`} passHref>
          <div className="flex cursor-pointer flex-col gap-4">
            <h1 className="text-xl font-semibold text-black dark:text-white md:text-2xl">
              {props.title}
            </h1>

            <div className="mb-1 flex flex-col justify-start text-lg text-zinc-600 dark:text-zinc-400 md:text-xl">
              {props.content.slice(0, 80)}
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center justify-start gap-4">
                <p className="flex flex-row items-center justify-center gap-2 text-cyan-500">
                  {props.reads} <VscEye />
                </p>
                <p className="flex flex-row items-center justify-center gap-2 text-fuchsia-600">
                  {props.likes} <BsHeartFill />
                </p>
              </div>
              <div className="flex items-center justify-end">
                <EditButtonWithIcon onClick={handleEdit}>
                  Edit <FiEdit2 />
                </EditButtonWithIcon>
                <DeleteButtonWithIcon onClick={handleDelete}>
                  Delete <MdDelete />
                </DeleteButtonWithIcon>
              </div>
            </div>
            <Toaster position="bottom-right" reverseOrder={false} />
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  )
}
