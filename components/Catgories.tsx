import axios from 'axios'
import { Fragment, useState } from 'react'
import { MdOutlineError } from 'react-icons/md'
import useSWR from 'swr'
import config from '../production/config.json'
import { Button } from './Buttons'
import { SelectCategory } from './Input'
import Loader from './Loader'
import MemoryCard from './MemoryCard'
import { PostHeader } from './ProfileHeader'

const Catgories = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const [category, setCategory] = useState('Happy')
  const endPoint =
    config.endpoint + '/v1/posts/category/' + category + '/' + pageIndex
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
    setPageIndex(1)
  }
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)

  const { data, error } = useSWR(endPoint, fetcher, {
    refreshInterval: 1000,
  })

  return (
    <section className="flex flex-col items-center justify-center gap-4 px-8 md:px-24 xl:px-12">
      <PostHeader name="Select your favourite category" />
      <SelectCategory
        name="category"
        id="category"
        value={category}
        onChange={handleSelect}
      />
      {data && (
        <div className="mb-4 mt-16 grid grid-cols-1 items-center justify-center gap-6 px-8 md:px-24 lg:grid-cols-2 xl:grid-cols-3 xl:px-20">
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
        <div className="mt-16 flex flex-row items-center justify-center gap-4 text-lg text-zinc-800 dark:text-zinc-200 md:text-xl">
          Something went wrong ... <MdOutlineError />
        </div>
      )}
    </section>
  )
}

export default Catgories
