import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

import { WiMoonFull } from 'react-icons/wi'

const Toggle = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <motion.div whileTap={{ scale: 0.7 }} transition={{ duration: 0.3 }}>
      {mounted && (
        <button
          aria-label="Light Theme"
          onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
          }}
          className="flex cursor-pointer items-center text-2xl text-zinc-900 transition-all duration-500 active:rotate-90 dark:text-zinc-200"
        >
          <WiMoonFull />
        </button>
      )}
    </motion.div>
  )
}

export default Toggle
