import * as postService from '../../services/postService'
import * as userService from '../../services/userService'
import Layout from '../../layout/Layout'
import { useEffect, useState } from 'react'
import { RiHeart2Fill } from 'react-icons/ri'
import Link from 'next/link'
import { useUser } from '../../components/UserContext'

export const getServerSideProps = async ({ query }: any) => {
  try {
    const { slug } = query
    const res = await postService.getPostByLink(slug)
    const post = res.data
    return {
      props: {
        post,
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

type Post = {
  title: string
  content: string
  category: string
  likes: number
  reads: number
  link: string
  userId: string
}

export default function Post({ post }: { post: Post }) {
  const { loggedIn } = useUser()
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    link: '',
    isDemo: true,
    loggedIn: false,
  })
  useEffect(() => {
    try {
      userService
        .getUser(post.userId)
        .then((res) => {
          setUser({
            id: res.data.id,
            name: res.data.name,
            email: res.data.email,
            link: res.data.link,
            isDemo: res.data.isDemo,
            loggedIn: true,
          })
        })
        .catch(() => {
          setUser({
            id: '',
            name: '',
            email: '',
            link: '',
            isDemo: true,
            loggedIn: false,
          })
        })
    } catch {}
  }, [])
  const [likes, setLikes] = useState(post.likes)
  const handleLike = async () => {
    const like = postService.updateLikes(post.link)
    try {
      await like
      setLikes(likes + 1)
    } catch {
      setLikes(likes)
    }
  }
  return (
    <Layout
      title={post ? post.title : 'Nothing to show'}
      description={post ? post.title : 'Nothing to show'}
    >
      {post ? (
        <section className="mt-28 flex w-full flex-col-reverse items-center justify-center gap-y-8 py-16 px-10 md:px-24 lg:flex-row xl:px-20">
          <div className="mx-8 flex w-full flex-col items-center justify-center gap-4 sm:mx-16 lg:mx-0">
            <h1 className="to:text-zinc-50 mb-16 text-4xl font-bold text-zinc-900 dark:text-zinc-200">
              {post.title}
            </h1>
            <div className="mx-8 w-full rounded-xl bg-zinc-50 px-8 py-12 dark:bg-zinc-900 md:w-2/3 lg:w-1/2">
              <p className="dark:bg-text-200 mb-8 text-lg text-zinc-600 dark:text-zinc-400 md:text-xl lg:text-2xl">
                {post.content}
              </p>
            </div>
            <div className="mx-8 flex w-full items-start justify-between rounded-xl bg-zinc-50 px-8 py-8 text-lg dark:bg-zinc-900 md:w-2/3 md:items-center md:text-xl lg:w-1/2">
              <div className="flex flex-col items-center justify-start gap-1 md:flex-row md:gap-4">
                <p className="text-cyan-500">{post.reads} reads</p>
                <p className="text-fuchsia-600">{likes} likes</p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                Category : {post.category}
              </p>
            </div>
            <div className="mx-8 flex w-full items-center justify-between rounded-xl bg-zinc-50 px-8 py-8 text-lg dark:bg-zinc-900 md:w-2/3 md:text-xl lg:w-1/2">
              <Link
                href={`/user/${user.link}`}
                as={`/user/${user.link}`}
                passHref
              >
                <a className="text-zinc-600 dark:text-zinc-400">
                  Written by : <span className="underline">{user.name}</span>
                </a>
              </Link>
              <div className="flex items-center justify-center gap-4">
                {loggedIn && (
                  <button
                    onClick={handleLike}
                    className="flex items-center justify-center gap-2 text-2xl text-red-600 transition-all duration-150 active:scale-90 dark:text-red-500"
                  >
                    <span>Like</span> <RiHeart2Fill />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div></div>
      )}
    </Layout>
  )
}
