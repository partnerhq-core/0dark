'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

interface IProps {
  setOpen: (open: boolean) => void
}

const Schema = z.object({
  contact: z.string(),
  competitor: z.string(),
  services: z
    .array(z.string())
    .min(1, { message: 'Select at least 1 service.' }),
  budget: z.string(),
  additional: z.string().optional(),
})

type FormData = z.infer<typeof Schema>

enum Service {
  'Acquiring proprietary codebase' = 'CODEBASE',
  'Acquiring proprietary data set' = 'DATASET',
  'Obtaining insider secrets with expert call' = 'EXPERT_CALL',
  Other = 'OTHER',
}

export function ContactForm({ setOpen }: IProps) {
  const form = useForm<FormData>({
    defaultValues: {
      contact: '+1 760 583 5578',
      competitor: 'https://cabal.com',
      services: [Service.Other],
      budget: '50000',
      additional: '',
    },
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
        <fieldset
          disabled={form.formState.isSubmitting}
          className="space-y-6 pb-8"
        >
          <FormField
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What phone number can we reach you at?</FormLabel>
                <FormControl>
                  <Input placeholder="+1 815 593 7800" type="text" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription className="-mt-0.5 text-neutral-500">
                  We prefer to use Signal to communicate with you over an
                  encrypted channel.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            name="competitor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is your competitors' websites?</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://google.com, https://apple.com"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription className="-mt-0.5 text-neutral-500">
                  List all the competitors you are interesting in acquiring
                  secrets from separated by commas.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            name="services"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What services are you interested in?</FormLabel>
                <FormControl>
                  <div className="mt-2 grid gap-3">
                    {Object.entries(Service).map(([key, value]) => (
                      <div
                        id={key}
                        className="flex items-center text-sm gap-2 cursor-pointer"
                      >
                        <Checkbox
                          checked={field.value.includes(value)}
                          onCheckedChange={checked => {
                            const existing: Service[] = field.value
                            const updated = checked
                              ? [...existing, value]
                              : existing.filter(service => service !== value)
                            form.setValue('services', updated)
                          }}
                        />
                        <label
                          className="cursor-pointer"
                          onClick={() => {
                            const existing: Service[] = field.value
                            const current = existing.includes(value)
                            const updated = current
                              ? existing.filter(service => service !== value)
                              : [...existing, value]
                            form.setValue('services', updated)
                          }}
                        >
                          {key}
                        </label>
                      </div>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is your budget?</FormLabel>
                <FormControl>
                  <Input placeholder="$50,000" type="text" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription className="-mt-0.5 text-neutral-500">
                  We have a contract minimum of $25,000.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            name="additional"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Optional: Provide any additional relevant information.
                </FormLabel>
                <FormControl>
                  <Textarea rows={2} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="fixed left-0 bottom-0 h-12 w-full">
            <div className="px-6 py-4 bg-neutral-900">
              <Button
                variant="outline"
                type="submit"
                className="w-full text-neutral-100 text-sm border-neutral-100 bg-neutral-900"
              >
                Submit
              </Button>
            </div>
          </div>
        </fieldset>
      </form>
    </Form>
  )
}
