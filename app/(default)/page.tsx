'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { useMedia } from 'react-use'

import { Action } from '@/components/action'
import { LampContainer } from '@/components/ui/lamp'
import Logo from '@/public/favicon.svg'

export default function Home() {
  const isDesktop = useMedia('(min-width: 768px)', true)
  if (isDesktop) {
    return (
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="from-neutral-300 to-neutral-500 bg-clip-text gap-y-6 flex flex-col justify-self-center max-w-2xl mx-auto"
        >
          <div className="mb-4 flex justify-start w-full">
            <Image
              src={Logo}
              alt="zero dark logo"
              className="w-12 h-12 mx-auto"
            />
          </div>
          <div className="text-4xl font-semibold tracking-normal text-neutral-500">
            We acquire your{' '}
            <span className="font-bold text-neutral-50">
              competition's trade secrets
            </span>{' '}
            for you.
          </div>
          <div className="text-xl font-semibold tracking-normal text-neutral-500 grid gap-3 mx-auto">
            Beat the competition by acquiring codebases, data sets, or insider
            knowledge anonymously.
          </div>
          <div className="mt-2 flex justify-self-start items-center gap-y-3 gap-x-4">
            <Action />
            <div className="text-neutral-500 text-xs font-semibold tracking-normal">
              Min Contract: $25,000
            </div>
          </div>
        </motion.h1>
      </LampContainer>
    )
  } else {
    return (
      <div className="flex items-center h-full">
        <div className="max-w-7xl px-6 w-full mx-auto grid grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="col-span-2 max-w-2xl flex items-center h-full">
            <div className="grid gap-y-8 items-center -mt-24">
              <div className="mb-4 flex justify-start w-full">
                <Image src={Logo} alt="zero dark logo" className="w-12 h-12" />
              </div>
              <div className="text-4xl font-semibold tracking-normal text-neutral-500">
                We acquire your{' '}
                <span className="font-bold text-neutral-100">
                  competition's trade secrets
                </span>{' '}
                for you.
              </div>
              <div className="text-xl font-semibold tracking-normal text-neutral-500 grid gap-3">
                Beat the competition by acquiring codebases, data sets, or
                insider knowledge anonymously.
              </div>
              <div className="mt-2 flex justify-self-start items-center gap-y-3 gap-x-4">
                <Action />
                <div className="text-neutral-500 text-xs font-semibold tracking-normal">
                  Min Contract: $25,000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
