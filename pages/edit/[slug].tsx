import * as postService from '../../services/postService'
import Layout from '../../layout/Layout'
import { useState } from 'react'
import Input, { ContentInput, SelectCategory } from '../../components/Input'
import { SubmitButton } from '../../components/Buttons'
import toast, { Toaster } from 'react-hot-toast'

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
  const [updatedPost, setUpdatedPost] = useState({
    title: post.title,
    content: post.content,
    category: post.category,
  })
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUpdatedPost({ ...post, category: e.target.value })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e: Event | any) => {
    e = e || window.event
    e.preventDefault()
    const data = {
      link: post.link,
      title: updatedPost.title,
      content: updatedPost.content,
      category: updatedPost.category,
    }
    const res = postService.updatePost(data)
    try {
      toast.promise(res, {
        loading: 'Loading',
        success: 'Memory Successfully upated',
        error: 'Unable to updte your memory',
      })
      await res
    } catch (ex: any) {
      toast.error(ex.response.data)
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
            <h1 className="to:text-zinc-200 mb-4 text-4xl text-zinc-900 dark:text-zinc-200">
              {post.title}
            </h1>
            <p className="mb-8 text-zinc-400">Update your Memory</p>
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col items-center justify-center gap-8 py-4 pb-16"
            >
              <Input
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                value={updatedPost.title}
                onChange={handleChange}
                title="Title must be at least 5 characters long"
                pattern="^[a-zA-Z ]{5,}$"
              />
              <ContentInput
                name="content"
                id="content"
                type="text"
                placeholder="Memory"
                value={updatedPost.content}
                onChange={handleChange}
                title="Content must be at least 5 characters long and spaces and special characters are allowed"
                pattern="^[a-zA-Z0-9\s\.,\?\!\:\;\(\)\-\_\+\=\@\$\#\%\^\&\*\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\"
              />
              <SelectCategory
                name="category"
                id="category"
                value={updatedPost.category}
                onChange={handleSelect}
              />
              <SubmitButton text="Update" />
            </form>
          </div>
          <Toaster position="bottom-right" reverseOrder={false} />
        </section>
      ) : (
        <div></div>
      )}
    </Layout>
  )
}
