import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import main from '../assets/hero-light.svg'
import { useEffect } from 'react'
import Image from 'next/image'
import Headline from './HeroHeadline'

const Hero = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <section className="flex w-full flex-col-reverse items-center justify-center gap-8 px-6 pt-8 sm:px-8 md:flex-row md:px-12">
      <Headline />
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: {
            translateY: 0,
            scale: 1,
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
            translateY: 100,
            scale: 0.6,
            opacity: 0.2,
            transformOrigin: 'bottom',
            transition: {
              duration: 0.5,
              dump: 0.8,
              stiffness: 100,
              ease: 'easeInOut',
            },
          },
        }}
        className="hidden w-full items-center justify-center lg:flex"
      >
        <Image src={main} alt="dark" width={500} height={500} />
      </motion.div>
    </section>
  )
}

export default Hero
