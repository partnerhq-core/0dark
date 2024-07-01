'use client'

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { cn } from '@/lib/utils'
import Logo from '@/public/favicon.svg'

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, 'change', current => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <div className="mx-4">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{
            // y: visible ? 0 : -100,
            // opacity: visible ? 1 : 0,
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            'flex fixed top-2 sm:top-8 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-neutral-800 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[1] px-6 py-3 items-center justify-between w-full max-w-4xl',
            className,
          )}
        >
          <div className="flex gap-x-2 items-center text-neutral-400">
            <Image src={Logo} alt="logo" className="h-6 w-6" />
            <span className="hidden sm:block">0 Dark</span>
          </div>
          <div className="flex gap-x-4">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  'relative text-neutral-50 items-center flex space-x-1 dark:hover:text-neutral-300 hover:text-neutral-500',
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </Link>
            ))}
          </div>
          {/*<button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">*/}
          {/*  <span>Login</span>*/}
          {/*  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />*/}
          {/*</button>*/}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
