'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Form, FormField } from '@/components/ui/form'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

interface IProps {
  setOpen: (open: boolean) => void
}

const Schema = z.object({
  contact: z.string(),
  competitor: z.string(),
  services: z.array(z.string()),
  budget: z.string(),
  additional: z.string().optional(),
})

type FormData = z.infer<typeof Schema>

export function ContactForm({ setOpen }: IProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(Schema),
  })
  async function submit(values: FormData) {
    await new Promise(res => setTimeout(res, 2000))
    // todo: send data to airtable
    return true
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(async values => {
          const success = await submit(values)
          if (success) setOpen(false)
        })}
      >
        <fieldset disabled={form.formState.isSubmitting} className="space-y-6">
          <FormField
            name="contact"
            render={({ field }) => {
              return (
                <LabelInputContainer>
                  <Label htmlFor="contact">How can we reach you?</Label>
                  <Input
                    id="contact"
                    placeholder="Email or phone"
                    type="text"
                  />
                </LabelInputContainer>
              )
            }}
          />
          <LabelInputContainer>
            <Label htmlFor="competitor">
              What is your competitor's website?
            </Label>
            <Input
              id="competitor"
              placeholder="https://google.com"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="data">What are you looking to acquire?</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="budget">What is your budget?</Label>
            <Input id="budget" placeholder="$50,000" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="request">
              Optional: Provide any additional relevant information.
            </Label>
            <Textarea id="request" rows={2} />
          </LabelInputContainer>
          <div className="-mt-2 space-y-2 text-center">
            <HoverBorderGradient
              containerClassName="w-full rounded-lg"
              as="button"
              className="rounded-lg bg-neutral-900 text-neutral-100 flex items-center space-x-2"
            >
              <span>Contact Us</span>
            </HoverBorderGradient>
            <div className="text-neutral-500 text-xs font-semibold tracking-normal">
              Min Contract: $25,000
            </div>
          </div>
        </fieldset>
      </form>
    </Form>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('flex flex-col space-y-3 w-full', className)}>
      {children}
    </div>
  )
}
