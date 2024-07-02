import React from 'react'

import { AboutUs } from '@/components/about-us'
import { ActionBlock } from '@/components/action-block'
import { Hero } from '@/components/hero'
import { Process } from '@/components/process'
import { Services } from '@/components/services'
import { FloatingNav } from '@/components/ui/floating-navbar'

export default function Home() {
  return (
    <div>
      <FloatingNav />
      <Hero />
      <Services />
      <AboutUs />
      <ActionBlock />
      <Process />
      <ActionBlock />
    </div>
  )
}
