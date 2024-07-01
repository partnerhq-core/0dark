'use client'

import { useMotionValue } from 'framer-motion'
import { motion, useMotionTemplate } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

export const EvervaultCard = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  let mouseX = useMotionValue(50)
  let mouseY = useMotionValue(50)

  const [randomString, setRandomString] = useState('')

  useEffect(() => {
    let str = generateRandomString(4500)
    setRandomString(str)
  }, [])

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)

    const str = generateRandomString(1500)
    setRandomString(str)
  }

  return (
    <div
      className={cn(
        'p-0.5 bg-transparent flex items-center justify-center w-full h-full relative',
        className,
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl py-4 w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative h-40 w-40 px-3 flex items-center justify-center text-white font-bold">
            <div className="absolute w-full h-full bg-black/[0.7] blur-sm rounded-full" />
            <span className="text-neutral-400 font-bold z-20">{children}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-lg [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  )
}

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const generateRandomString = (length: number) => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
