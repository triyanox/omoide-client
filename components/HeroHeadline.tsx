import Link from 'next/link'
import { ActionButton } from './Buttons'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Headline = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          translateX: 0,
          opacity: 1,
          transformOrigin: 'bottom',
          transition: {
            duration: 0.5,
            dump: 0.8,
            stiffness: 100,
            ease: 'easeInOut',
          },
        },
        hidden: {
          translateX: -100,
          opacity: 0,
          transformOrigin: 'bottom',
          transition: {
            duration: 0.5,
            dump: 0.8,
            stiffness: 100,
            ease: 'easeInOut',
          },
        },
      }}
      className="flex w-full flex-col items-start justify-center gap-2"
    >
      <h1 className="mb-4 py-2 text-5xl font-semibold text-black dark:text-white xl:text-7xl">
        Omoide
      </h1>
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        A memory is a treazure
      </h2>
      <p className="text-2xl text-zinc-800 dark:text-zinc-200">
        The best place to share your memories and experiences with the world and
        inspire others.
      </p>
      <Link href="/signup" passHref>
        <a className="mt-4">
          <ActionButton text="Get started" />
        </a>
      </Link>
    </motion.div>
  )
}
export default Headline
