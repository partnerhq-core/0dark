import { IconHome, IconMessage, IconUser } from '@tabler/icons-react'
import React from 'react'

import { AboutUs } from '@/components/about-us'
import { ActionBlock } from '@/components/action-block'
import { Hero } from '@/components/hero'
import { Process } from '@/components/process'
import { Services } from '@/components/services'
import { FloatingNav } from '@/components/ui/floating-navbar'

const navItems = [
  {
    name: 'Home',
    link: '/',
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: 'About',
    link: '/about',
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: 'Contact',
    link: '/contact',
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
]

export default function Home() {
  return (
    <div>
      {/*<FloatingNav navItems={navItems} />*/}
      <Hero />
      <AboutUs />
      {/*<ActionBlock />*/}
      <Services />
      <ActionBlock />
      <Process />
      <ActionBlock />
    </div>
  )
}
