import React from 'react'

import { AboutUs } from '@/components/about-us'
import { ActionBlock } from '@/components/action-block'
import { Hero } from '@/components/hero'
import { Process } from '@/components/process'
import { Services } from '@/components/services'
import { Footer } from '@/components/ui/footer'
import { Navbar } from '@/components/ui/navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <ActionBlock />
      <Process />
      <ActionBlock />
      <Footer />
    </div>
  )
}
