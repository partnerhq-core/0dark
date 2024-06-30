import Image from 'next/image'

import { Action } from '@/components/action'
import Logo from '@/public/favicon.svg'

export default function Home() {
  return (
    <div className="flex items-center h-full">
      <div className="max-w-7xl px-6 w-full mx-auto grid grid-cols-2 xl:grid-cols-3 gap-8">
        {/*<Spotlight*/}
        {/*  className="-top-40 left-0 md:left-60 md:-top-20"*/}
        {/*  fill="white"*/}
        {/*/>*/}
        <div className="col-span-2 max-w-2xl flex items-center h-full">
          <div className="grid gap-y-8 items-center">
            <div className="mb-4 flex justify-start w-full">
              <Image src={Logo} alt="zero dark logo" className="w-12 h-12" />
            </div>
            <div className="text-4xl font-semibold tracking-normal text-neutral-500">
              We acquire your{' '}
              <span className="font-bold text-neutral-100">
                competition's trade secrets
              </span>{' '}
              for you.
            </div>
            <div className="text-xl font-semibold tracking-normal text-neutral-500 grid gap-3">
              Beat the competition by acquiring codebases, data sets, or insider
              secrets anonymously.
            </div>
            <div className="mt-2 flex justify-self-start items-center gap-y-3 gap-x-4">
              <Action />
              <div className="text-neutral-500 text-xs font-semibold tracking-normal">
                Min Contract: $25,000
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
