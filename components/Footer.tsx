import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="dark:text-bright-gray-50 my-8 mt-24 px-8 text-zinc-800 dark:text-zinc-200 md:px-24 xl:px-8">
      <div className="container mx-auto flex flex-col items-center justify-center px-5 py-8 sm:flex-row">
        <a className="title-font flex items-center justify-center font-medium text-zinc-800 dark:text-zinc-200 lg:justify-start">
          <span className="ml-3 text-xl">Omoide</span>
        </a>
        <p className="text-md mt-4 text-zinc-800 dark:text-zinc-200 sm:ml-4 sm:mt-0 sm:border-l-2 sm:py-2 sm:pl-4">
          © 2022 Omoide — Made By
          <a
            href="https://achaq.codes"
            className="ml-2 font-bold"
            rel="noopener noreferrer"
            target="_blank"
          >
            Mohamed Achaq
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
