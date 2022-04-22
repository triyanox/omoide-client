import Router from 'next/router'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { SubmitButton } from './Buttons'
import Input from './Input'

const Seacrh = () => {
  const [search, setSearch] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleSubmit = async (e: Event | any) => {
    e = e || window.event
    e.preventDefault()
    try {
      Router.replace(`/search/${search}`)
    } catch {
      toast.error('Unable to search')
    }
  }
  return (
    <section className="mt-28 flex w-full flex-col-reverse items-center justify-center gap-y-8 py-16 px-10 md:px-24 lg:flex-row xl:px-20">
      <div className="mx-8 flex w-full flex-col items-center justify-center gap-4 sm:mx-16 lg:mx-0">
        <h1 className="to:text-zinc-200 mb-4 text-4xl text-zinc-900 dark:text-zinc-200">
          Search
        </h1>
        <p className="mb-8 text-zinc-400">
          Search for a Memory by title or content.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-8 py-4 pb-16"
        >
          <Input
            name="search"
            id="search"
            type="text"
            placeholder="search"
            value={search}
            onChange={handleChange}
            title="Title must be at least 2 characters long with no special characters"
            pattern="^[a-zA-Z ]{2,}$"
          />

          <SubmitButton text="Submit" />
        </form>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </section>
  )
}

export default Seacrh
