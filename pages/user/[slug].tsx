import * as userService from '../../services/userService'
import config from '../../production/config.json'
import axios from 'axios'
import useSWR from 'swr'
import { Fragment } from 'react'
import MemoryCard from '../../components/MemoryCard'
import { ProfileHeaderUser } from '../../components/ProfileHeader'
import Layout from '../../layout/Layout'
import Loader from '../../components/Loader'
import { MdOutlineError } from 'react-icons/md'

export const getServerSideProps = async ({ query }: any) => {
  try {
    const { slug } = query
    const res = await userService.getUserByLink(slug)
    const user = res.data
    return {
      props: {
        user,
      },
    }
  } catch {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
}

const endPoint = config.endpoint + '/v1/posts'
const fetcher = (url: string) => axios.get(url).then((res) => res.data)

type UserProps = {
  _id: string
  name: string
  email: string
  link: string
  isDemo: boolean
}

export default function User({ user }: { user: UserProps }) {
  const { data, error } = useSWR(endPoint + '/user/' + user.link, fetcher)

  return (
    <Layout
      title={`Omoide | ${user.name}`}
      description={`${user.name} Memories`}
    >
      <ProfileHeaderUser name={user.name} />
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
        <div className="flex flex-row items-center justify-center gap-4 text-lg text-zinc-800 dark:text-zinc-200 md:text-xl">
          Something went wrong ... <MdOutlineError />
        </div>
      )}
    </Layout>
  )
}
