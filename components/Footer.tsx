import Link from 'next/link'
import { SiTwitter } from 'react-icons/si'
import { IconButton } from './Buttons'

const Footer = () => {
  return (
    <footer className="mt-24 flex w-full flex-col items-center justify-between px-6 py-4 pb-8 sm:px-8 md:flex-row md:px-12">
      <div className="flex w-full flex-col items-start justify-center gap-2">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Omoide
        </h1>
        <h2 className="text-xl text-black dark:text-white">Share a memory !</h2>
      </div>
      <Link href="https://twitter.com/ac__haq" passHref>
        <a className="mt-8 flex w-full flex-row items-start justify-start md:justify-end">
          <IconButton icon={<SiTwitter />} />
        </a>
      </Link>
    </footer>
  )
}

export default Footer
