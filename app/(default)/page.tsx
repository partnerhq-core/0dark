import { IconHome, IconMessage, IconUser } from '@tabler/icons-react'
import React from 'react'

import { Hero } from '@/components/hero'
import { Process } from '@/components/how-it-works'
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
      {/*<Process />*/}
    </div>
  )
}
