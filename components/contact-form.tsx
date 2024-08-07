'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

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
import { Input } from '@/components/ui/input'
import { LinkPreview } from '@/components/ui/link-preview'
import { Button } from '@/components/ui/moving-border'
import { Textarea } from '@/components/ui/textarea'
import { Dark } from '@/lib/airtable'

interface IProps {
  setOpen: (open: boolean) => void
}

const Schema = z.object({
  contact: z.string().min(1, { message: 'Phone number is required.' }),
  competitor: z.string().optional(),
  services: z
    .array(z.string())
    .min(1, { message: 'Select at least 1 service.' }),
  budget: z.string().optional(),
  additional: z.string().optional(),
})

type FormData = z.infer<typeof Schema>

enum Service {
  'Acquiring proprietary codebase' = 'CODEBASE',
  'Acquiring proprietary data set' = 'DATASET',
  'Obtaining insider knowledge with expert call' = 'EXPERT_CALL',
  Other = 'OTHER',
}

export function ContactForm({ setOpen }: IProps) {
  const form = useForm<FormData>({
    defaultValues: {
      contact: '',
      competitor: '',
      services: [],
      budget: '',
      additional: '',
    },
    resolver: zodResolver(Schema),
  })
  async function submit(values: FormData) {
    try {
      await Dark.create([
        {
          fields: {
            Contact: values.contact,
            Competitors: values.competitor,
            Services: values.services.join(', '),
            Budget: values.budget,
            Notes: values.additional,
          },
        },
      ])
      setOpen(false)
      form.reset()
      toast.success('Request submitted. We will be in touch within 24 hours.')
      return true
    } catch (err) {
      toast.error('Failed to submit request. Try again later.')
      return false
    }
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
            render={({ field }) => (
              <FormItem>
                <FormLabel>What phone number can we reach you at?</FormLabel>
                <FormControl>
                  <Input placeholder="+1 815 593 7800" type="text" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription className="-mt-0.5 text-neutral-500">
                  We use{' '}
                  <LinkPreview
                    url="https://signal.org/download/"
                    className="underline underline-offset-2 text-neutral-400"
                  >
                    Signal
                  </LinkPreview>{' '}
                  to communicate over an encrypted channel.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            name="competitor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What are your competitors' websites?</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://google.com, https://apple.com"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription className="-mt-0.5 text-neutral-500">
                  List all the competitors you are interested in acquiring trade
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
                  <div className="mt-2 grid gap-2">
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
          <Button
            borderRadius="0.5rem"
            containerClassName="w-full"
            className="rounded-lg bg-neutral-800 text-neutral-100 border-2 border-neutral-800"
            type="submit"
          >
            Submit
          </Button>
          {/*<Button*/}
          {/*  variant="outline"*/}
          {/*  type="submit"*/}
          {/*  className="w-full text-neutral-100 text-sm border-neutral-100 bg-neutral-900"*/}
          {/*>*/}
          {/*  Submit*/}
          {/*</Button>*/}
        </fieldset>
      </form>
    </Form>
  )
}
