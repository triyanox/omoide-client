import { FaUserAstronaut } from 'react-icons/fa'
import Link from 'next/link'
import { useUser } from './UserContext'
import { BiCategoryAlt } from 'react-icons/bi'
import { RiSettings3Fill, RiEditCircleLine, RiSearchFill } from 'react-icons/ri'
const Toolbar = () => {
  const { name } = useUser()

  return (
    <section className="mt-4 flex w-full flex-row items-center py-4 px-12 md:px-24 xl:px-8">
      <div
        className=" flex h-16 w-full items-center justify-between   rounded-xl   py-4 md:mx-0 
md:px-12"
      >
        <div className="flex flex-row gap-4">
          <Link href="/profile" passHref>
            <a className="text-end group flex flex-row justify-center gap-x-4 text-3xl md:text-4xl">
              <FaUserAstronaut />
              <span
                className="absolute  mt-12 w-auto min-w-max origin-top scale-0 rounded-md
                    bg-zinc-900 p-2  px-3 text-sm font-semibold 
    text-white shadow-xl 
    transition-all duration-100 group-hover:scale-100 dark:bg-zinc-200 dark:text-black"
              >
                {name.split(' ')[0]}&apos;s Profile
              </span>
            </a>
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          <Link href="/search" passHref>
            <a className="text-end group flex flex-row justify-center gap-x-4 text-3xl md:text-4xl">
              <RiSearchFill />
              <span
                className="absolute  mt-12 w-auto min-w-max origin-top scale-0 rounded-md
                    bg-zinc-900 p-2  px-3 text-sm font-semibold 
    text-white shadow-xl 
    transition-all duration-100 group-hover:scale-100 dark:bg-zinc-200 dark:text-black"
              >
                Search
              </span>
            </a>
          </Link>
          <Link href="/categories" passHref>
            <a className="text-end group flex flex-row justify-center gap-x-4 text-3xl md:text-4xl">
              <BiCategoryAlt />
              <span
                className="absolute  mt-12 w-auto min-w-max origin-top scale-0 rounded-md
                    bg-zinc-900 p-2  px-3 text-sm font-semibold 
    text-white shadow-xl 
    transition-all duration-100 group-hover:scale-100 dark:bg-zinc-200 dark:text-black"
              >
                Categories
              </span>
            </a>
          </Link>
          <Link href="/write" passHref>
            <a className="text-end group flex flex-row justify-center gap-x-4 text-3xl md:text-4xl">
              <RiEditCircleLine />
              <span
                className="absolute  mt-12 w-auto min-w-max origin-top scale-0 rounded-md
                    bg-zinc-900 p-2  px-3 text-sm font-semibold 
    text-white shadow-xl 
    transition-all duration-100 group-hover:scale-100 dark:bg-zinc-200 dark:text-black"
              >
                Write
              </span>
            </a>
          </Link>
          <Link href="/settings" passHref>
            <a className="text-end group flex flex-row justify-center gap-x-4 text-3xl md:text-4xl">
              <RiSettings3Fill />
              <span
                className="absolute  mt-12 w-auto min-w-max origin-top scale-0 rounded-md
                    bg-zinc-900 p-2  px-3 text-sm font-semibold 
    text-white shadow-xl 
    transition-all duration-100 group-hover:scale-100 dark:bg-zinc-200 dark:text-black"
              >
                Settings
              </span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Toolbar
