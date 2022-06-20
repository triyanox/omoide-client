import React from 'react'

type Props = {
  name: string
}

export const ProfileHeaderUser = (props: Props) => {
  return (
    <section className="mt-28 flex w-full flex-col-reverse items-center justify-center gap-y-8 py-16 px-10 md:px-24 lg:flex-row xl:px-20">
      <div className="mx-8 flex w-full flex-col items-center justify-center gap-4 sm:mx-16 lg:mx-0">
        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-200">
          {props.name}
        </h1>
        <p className="mb-8 text-zinc-400">Memories by {props.name}</p>
      </div>
    </section>
  )
}

export const PostHeader = (props: Props) => {
  return (
    <section className="mt-28 flex w-full flex-col-reverse items-center justify-center gap-y-8 py-16 px-10 md:px-24 lg:flex-row xl:px-20">
      <div className="mx-4 flex w-full flex-col items-center justify-center gap-4 sm:mx-16 lg:mx-0">
        <h1 className="to:text-zinc-200 mb-4 text-4xl text-zinc-900 dark:text-zinc-200">
          {props.name}
        </h1>
      </div>
    </section>
  )
}

const ProfileHeader = () => {
  return (
    <section className="mt-28 flex w-full flex-col-reverse items-center justify-center gap-y-8 py-16 px-10 md:px-24 lg:flex-row xl:px-20">
      <div className="mx-8 flex w-full flex-col items-center justify-center gap-4 sm:mx-16 lg:mx-0">
        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-200">
          Profile
        </h1>
        <p className="mb-8 text-zinc-400">All your memories are here.</p>
      </div>
    </section>
  )
}

export default ProfileHeader
