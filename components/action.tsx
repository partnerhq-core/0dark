'use client'

import { useState } from 'react'
import { useMedia } from 'react-use'

import { ContactForm } from '@/components/contact-form'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Button } from './ui/moving-border'

interface IProps {
  trigger?: React.ReactNode
}

export function Action(props: IProps) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMedia('(min-width: 768px)', true)
  const title = 'Submit a Request'
  const description = 'Zero Dark: Corporate espionage as a service'
  const trigger = props.trigger || (
    <Button
      borderRadius="0.5rem"
      className={cn(
        'rounded-lg bg-neutral-800 text-neutral-100 border-2 border-neutral-800',
      )}
    >
      Submit a Request
    </Button>
  )
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="bg-neutral-900 text-neutral-100 border-none">
          <DialogHeader className="mt-2 mb-2">
            <DialogTitle className="font-bold tracking-normal">
              {title}
            </DialogTitle>
            <DialogDescription className="text-neutral-500 text-sm tracking-normal font-semibold mt-1">
              {description}
            </DialogDescription>
          </DialogHeader>
          <ContactForm setOpen={setOpen} />
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
              {title}
            </DrawerTitle>
            <DrawerDescription className="text-neutral-500 text-sm tracking-normal font-semibold mt-1">
              {description}
            </DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="mb-6 px-6 py-6 h-full overflow-y-scroll">
            <ContactForm setOpen={setOpen} />
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    )
  }
}
