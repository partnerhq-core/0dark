'use client'

import {
  IconBrain,
  IconCloudComputing,
  IconCode,
  IconFileBroken,
  IconTable,
} from '@tabler/icons-react'
import { useState } from 'react'
import { useMedia } from 'react-use'

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ScrollArea } from '@/components/ui/scroll-area'
import { TextGenerateEffect } from '@/components/ui/text-generate'

export function Services() {
  return (
    <div className="max-w-5xl px-6 w-full mx-auto mb-24 grid gap-24">
      <WhatDoYouDo />
      <ServicesGrid />
    </div>
  )
}

function WhatDoYouDo() {
  return (
    <div>
      <TextGenerateEffect words="Why use Zero Dark?" className="mb-6" />
      <TextGenerateEffect
        words="Trade secrets fuel business growth."
        className="font-semibold text-neutral-500 tracking-normal"
      />
      <TextGenerateEffect
        words="Fortune 500 companies hire top consulting firms like McKinsey and Bain to gather trade secrets from their competitors to protect their brand."
        className="font-semibold text-neutral-500 tracking-normal"
      />
      <TextGenerateEffect
        words="We provide these services with an even more experienced, capable, and discrete team."
        className="font-semibold text-neutral-500 tracking-normal"
      />
    </div>
  )
}

function ServicesGrid() {
  return (
    <div className="relative" id="services">
      <TextGenerateEffect words="Our Services" className="mb-6" />
      <BentoGrid className="max-w-5xl mx-auto">
        {services.map((item, i) => (
          <Service key={i} {...item} />
        ))}
      </BentoGrid>
    </div>
  )
}

const services = [
  {
    title: 'Reverse Engineer Systems',
    icon: <IconCloudComputing className="h-5 w-5 text-neutral-200" />,
  },
  {
    title: 'Discover Trade Secrets',
    icon: <IconFileBroken className="h-5 w-5 text-neutral-200" />,
  },
  {
    title: 'Extract Insider Knowledge',
    icon: <IconBrain className="h-5 w-5 text-neutral-200" />,
  },
  {
    title: 'Access Proprietary Datasets',
    icon: <IconTable className="h-5 w-5 text-neutral-200" />,
    className: 'md:col-span-2',
  },
  {
    title: 'Access Proprietary Codebases',
    icon: <IconCode className="h-5 w-5 text-neutral-200" />,
  },
]

interface IServiceProps {
  title: string
  icon: React.ReactNode
  className?: string
}

function Service(props: IServiceProps) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMedia('(min-width: 768px)', true)
  const trigger = (
    // <div onClick={() => setOpen(true)} className={props.className}>
    <BentoGridItem
      title={props.title}
      icon={props.icon}
      className={props.className}
    />
    // </div>
  )

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="bg-neutral-900 text-neutral-100 border-none">
          <DialogHeader className="mt-2 mb-2">
            <DialogTitle className="font-bold tracking-normal">
              {props.title}
            </DialogTitle>
            {/*<DialogDescription className="text-neutral-500 text-sm tracking-normal font-semibold mt-1">*/}
            {/*  {description}*/}
            {/*</DialogDescription>*/}
          </DialogHeader>
          {/*<ContactForm setOpen={setOpen} />*/}
        </DialogContent>
      </Dialog>
    )
  } else {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>
        <DrawerContent className="bg-neutral-900 text-neutral-100 border-none">
          <DrawerHeader className="mt-2">
            <DrawerTitle className="font-bold tracking-normal">
              {props.title}
            </DrawerTitle>
            {/*<DrawerDescription className="text-neutral-500 text-sm tracking-normal font-semibold mt-1">*/}
            {/*  {description}*/}
            {/*</DrawerDescription>*/}
          </DrawerHeader>
          <ScrollArea className="mb-6 px-6 py-6 h-full overflow-y-scroll">
            {/*<ContactForm setOpen={setOpen} />*/}
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    )
  }
}
