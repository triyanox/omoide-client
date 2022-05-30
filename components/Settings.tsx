import React, { Fragment, useState } from 'react'
import { DeleteButton, SubmitButton } from './Buttons'
import Input from './Input'
import toast, { Toaster } from 'react-hot-toast'
import * as userService from '../services/userService'
import { useUser } from './UserContext'
import { Dialog, Transition } from '@headlessui/react'

type Props = {}

const Settings = (props: Props) => {
  let [isOpen, setIsOpen] = useState(false)
  const { name, email, _id } = useUser()
  const [account, setAccount] = useState({
    name: name,
    email: email,
    password: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    })
  }
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  async function deleteUser() {
    closeModal()
    const deleteUser = userService.deleteUser()
    try {
      await deleteUser
      localStorage.removeItem('token')
      toast.success('Successfully deleted, redirecting...')
      setTimeout(() => {
        window.location.replace('/')
      }, 2000)
    } catch (ex: any) {
      toast.error(ex.response.data)
    }
  }
  const handleSubmit = async (e: Event | any) => {
    e = e || window.event
    e.preventDefault()
    const data = {
      email: account.email,
      password: account.password,
      name: account.name,
    }
    const update = userService.updateUser(data)
    try {
      toast.promise(update, {
        loading: 'Loading',
        success: 'Successfully updated, redirecting...',
        error: 'Unable to update',
      })
      await update
      setTimeout(() => {
        window.location.replace('/')
      }, 2000)
    } catch (ex: any) {
      toast.error(ex.response.data)
    }
  }
  return (
    <section className="mt-28 flex w-full flex-col-reverse items-center justify-center gap-y-8 py-16 px-10 md:px-24 lg:flex-row xl:px-20">
      <div className="mx-8 flex w-full flex-col items-center justify-center gap-4 sm:mx-16 lg:mx-0">
        <h1 className="to:text-zinc-200 mb-4 text-4xl text-zinc-900 dark:text-zinc-200">
          Update Your Account
        </h1>
        <form
          className="flex w-full flex-col items-center justify-center gap-8 py-4"
          onSubmit={handleSubmit}
        >
          <Input
            name="name"
            id="name"
            type="name"
            title="Your name should be at least 5 characters long and spaces are allowed"
            pattern="^[a-zA-Z ]{5,}$"
            placeholder="Full Name"
            value={account.name}
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
          <SubmitButton text="Update" />
        </form>
        <div className="mx-8 flex w-full flex-col items-center justify-center gap-4 sm:mx-16 lg:mx-0">
          <h1 className="to:text-zinc-200 mb-4 mt-8 text-4xl text-zinc-900 dark:text-zinc-200">
            Delete Your Account
          </h1>
          <DeleteButton text="Delete Your Account" onClick={openModal} />
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 backdrop-blur-xl" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-black">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-extrabold leading-6 text-red-600 dark:text-red-700"
                >
                  Delete Account
                </Dialog.Title>

                <div className="mt-4 flex flex-col items-start justify-center gap-1 text-lg md:text-xl">
                  When you delete your account, all of your data will be
                  permanently deleted.
                </div>

                <div className="mt-8 flex items-start justify-start gap-2">
                  <button
                    type="button"
                    className="text-md trasmition-all inline-flex justify-center rounded-lg bg-zinc-900 px-12 py-2 text-sm font-medium text-white duration-300 hover:bg-zinc-700 active:scale-95 dark:bg-zinc-200 dark:text-black dark:hover:bg-zinc-300 md:text-lg"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="text-md trasmition-all inline-flex justify-center rounded-lg bg-red-500 px-12 py-2 text-sm font-medium text-black duration-300 hover:bg-red-700 active:scale-95 dark:bg-red-700 dark:text-white dark:hover:bg-red-500 md:text-lg"
                    onClick={deleteUser}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  )
}

export default Settings
