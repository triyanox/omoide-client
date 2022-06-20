import React, { Fragment } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import config from '../production/config.json'
import MemoryCard from './MemoryCard'
import Loader from './Loader'
import { MdOutlineError } from 'react-icons/md'

const endPoint = config.endpoint + '/v1/posts/allposts/reads'
const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const MostPopular = () => {
  const { data, error } = useSWR(endPoint, fetcher)
  return (
    <Fragment>
      <div className="items-cernter my-16 flex flex-col justify-start gap-4 px-8 md:px-24 xl:px-20">
        <h1 className="text-xl font-bold md:text-2xl">Most Popular Posts</h1>
        <p className="text-md md:text-lg">Here are the most popular posts</p>
      </div>
      {data && (
        <div className="mb-20 grid grid-cols-1 items-center justify-center gap-6 px-8 md:px-24 lg:grid-cols-2 xl:grid-cols-3 xl:px-20">
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
              <MemoryCard
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
        <div className="mb-8 flex flex-row items-center justify-center gap-4 text-lg text-zinc-800 dark:text-zinc-200 md:text-xl">
          Something went wrong ... <MdOutlineError />
        </div>
      )}
    </Fragment>
  )
}

export default MostPopular
