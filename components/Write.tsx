import { useState } from 'react'
import { SubmitButton } from './Buttons'
import Input, { ContentInput, SelectCategory } from './Input'
import * as postService from '../services/postService'
import toast, { Toaster } from 'react-hot-toast'

type Props = {}

const Write = (props: Props) => {
  const [post, setPost] = useState({
    title: '',
    content: '',
    category: '',
  })
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPost({ ...post, category: e.target.value })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e: Event | any) => {
    e = e || window.event
    e.preventDefault()
    const data = {
      title: post.title,
      content: post.content,
      category: post.category,
    }
    const res = postService.createPost(data)
    try {
      toast.promise(res, {
        loading: 'Loading',
        success: 'Memory Successfully created',
        error: 'Unable to create a memory',
      })
      await res
      setPost({
        title: '',
        content: '',
        category: '',
      })
    } catch (ex: any) {
      toast.error(ex.response.data)
    }
  }
  return (
    <section className="mt-28 flex w-full flex-col-reverse items-center justify-center gap-y-8 py-16 px-10 md:px-24 lg:flex-row xl:px-20">
      <div className="mx-8 flex w-full flex-col items-center justify-center gap-4 sm:mx-16 lg:mx-0">
        <h1 className="to:text-zinc-200 mb-4 text-4xl text-zinc-900 dark:text-zinc-200">
          Write
        </h1>
        <p className="mb-8 text-zinc-400">
          Write a new Memory and share your thoughts with the world.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-8 py-4 pb-16"
        >
          <Input
            name="title"
            id="title"
            type="text"
            placeholder="Title"
            value={post.title}
            onChange={handleChange}
            title="Title must be at least 5 characters long"
            pattern="^[a-zA-Z ]{5,}$"
          />
          <ContentInput
            name="content"
            id="content"
            type="text"
            placeholder="Memory"
            value={post.content}
            onChange={handleChange}
            title="Content must be at least 5 characters long and spaces and special characters are allowed"
            pattern="^[a-zA-Z0-9\s\.,\?\!\:\;\(\)\-\_\+\=\@\$\#\%\^\&\*\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\¿\?\¡\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\|\\\/\`\~\`\´\¨\"
          />
          <SelectCategory
            name="category"
            id="category"
            value={post.category}
            onChange={handleSelect}
          />
          <SubmitButton text="Submit" />
        </form>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </section>
  )
}

export default Write
