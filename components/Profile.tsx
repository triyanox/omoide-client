import React, { Fragment } from 'react'
import ProfileHeader from './ProfileHeader'
import axios from 'axios'
import useSWR from 'swr'
import config from '../production/config.json'
import { MemoryCardWithDelete } from './MemoryCard'
import { useUser } from './UserContext'
import Loader from './Loader'
import { MdOutlineError } from 'react-icons/md'

const endPoint = config.endpoint + '/v1/posts'
const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const Profile = () => {
  const { _id } = useUser()
  const { data, error } = useSWR(endPoint + '/userid/' + _id, fetcher, {
    refreshInterval: 2000,
  })
  return (
    <Fragment>
      <ProfileHeader />
      {data && (
        <div className="mb-4 grid grid-cols-1 items-center justify-center gap-6 px-8 md:px-24 lg:grid-cols-2 xl:grid-cols-3 xl:px-20">
          {data.map(
            (memory: {
              id: React.Key | null | undefined
              title: string
              content: string
              category: string
              likes: number
              reads: number
              link: string
            }) => (
              <MemoryCardWithDelete
                link={memory.link}
                key={memory.id}
                title={memory.title}
                content={memory.content}
                category={memory.category}
                likes={memory.likes}
                reads={memory.reads}
              />
            )
          )}
        </div>
      )}
      {!data && !error && <Loader />}
      {error && (
        <div className="flex flex-row items-center justify-center gap-4 text-lg text-zinc-800 dark:text-zinc-200 md:text-xl">
          Something went wrong ... <MdOutlineError />
        </div>
      )}
    </Fragment>
  )
}

export default Profile
