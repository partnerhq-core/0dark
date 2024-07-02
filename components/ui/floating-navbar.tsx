'use client'

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Action } from '@/components/action'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Logo from '@/public/favicon.svg'

interface IProps {
  className?: string
}

export const FloatingNav = ({ className }: IProps) => {
  return (
    <div className="fixed top-2 sm:top-8 w-full z-30">
      <div className="max-w-5xl mx-auto w-full px-6">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 1, y: -100 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'w-full flex inset-x-0 border border-white/[0.2] rounded-full bg-neutral-800 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-6 py-3 items-center justify-between opacity-25 bg-transparent backdrop-blur-2xl',
              className,
            )}
          >
            <Link
              href="/"
              className="flex gap-x-3 text-base items-center font-semibold text-neutral-300"
            >
              <Image src={Logo} alt="logo" className="h-8 w-8" />
              <span className="hidden md:block">Zero Dark</span>
            </Link>
            <div className="">
              <Action
                trigger={
                  <Button
                    size="sm"
                    className={cn(
                      'bg-neutral-800 p-3 py-2 text-neutral-200 font-normal text-sm',
                      'hover:animate-shimmer hover:bg-[linear-gradient(110deg,#171717,45%,#262626,55%,#171717)] bg-[length:200%_100%] transition-colors',
                    )}
                  >
                    Submit a Request
                  </Button>
                }
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
