import { RiSearchEyeFill } from 'react-icons/ri'
import MemoryCard from '../../components/MemoryCard'
import { PostHeader } from '../../components/ProfileHeader'
import Layout from '../../layout/Layout'
import * as postService from '../../services/postService'

export const getServerSideProps = async ({ query }: any) => {
  try {
    const { slug } = query
    const res = await postService.searchPost(slug)
    const posts = res.data
    return {
      props: {
        posts,
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

export default function Post({ posts }: { posts: any }) {
  return (
    <Layout
      title={posts ? 'Results' : 'No Results'}
      description={posts ? 'Results' : 'No Results'}
    >
      <PostHeader name="Search Results" />
      {posts && (
        <div className="mb-4 grid grid-cols-1 items-center justify-center gap-6 px-8 md:px-24 lg:grid-cols-2 xl:grid-cols-3 xl:px-20">
          {posts.map(
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
      {posts.length === 0 && (
        <div className="flex flex-row items-center justify-center gap-4 text-xl text-zinc-800 dark:text-zinc-200 md:text-2xl">
          No results found ... <RiSearchEyeFill />
        </div>
      )}
    </Layout>
  )
}
