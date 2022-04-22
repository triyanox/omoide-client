import Link from 'next/link'
import Image from 'next/image'
import light from '../assets/hero-light.svg'
import dark from '../assets/hero-dark.svg'
import { Button } from './Buttons'

const Hero = () => {
  return (
    <section className="mt-28 mb-20 flex w-full flex-col-reverse items-center justify-center gap-y-8 px-10 md:px-24 lg:mt-4 lg:h-screen lg:flex-row xl:px-20">
      <div className="flex w-full flex-col items-start justify-center gap-y-2 text-black dark:text-white">
        <h1 className="text-4xl font-semibold text-black dark:text-white">
          Omoide
        </h1>
        <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          A memory is a treazure
        </h2>
        <p className="mb-8 text-xl font-normal text-gray-600 dark:text-gray-400">
          The best place to share your memories and experiences with the world
          and inspire others.
        </p>
        <div className="flex w-full flex-row items-center justify-start gap-8">
          <Link href="/signup" passHref>
            <a className="w-full">
              <Button text="Write a memory" />
            </a>
          </Link>
        </div>
      </div>
      <div className="z-10 flex w-full flex-col items-center justify-center p-2 dark:z-0 dark:hidden">
        <Image
          src={light}
          width={512}
          height={512}
          alt="Omoide Light"
          quality={100}
        />
      </div>
      <div className="z-0 hidden flex-col items-center justify-center p-2 dark:z-10 dark:flex dark:w-full">
        <Image
          src={dark}
          width={512}
          height={512}
          alt="Omoide Dark"
          quality={100}
        />
      </div>
    </section>
  )
}

export default Hero
