import {
  IconBrain,
  IconCloudComputing,
  IconCode,
  IconFileBroken,
  IconTable,
} from '@tabler/icons-react'

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
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
        words="Trade secrets unlock business growth."
        className="font-semibold text-neutral-500 tracking-normal"
      />
      <TextGenerateEffect
        words="Fortune 500 companies protect their brand by hiring firms like McKinsey and Bain to collect trade secrets, proprietary data sets, and reverse engineer systems from their competitors."
        className="font-semibold text-neutral-500 tracking-normal"
      />
      <TextGenerateEffect
        words="We offer these same services to businesses who do not have access to these resources with a more experienced and capable team."
        className="font-semibold text-neutral-500 tracking-normal"
      />
    </div>
  )
}

function ServicesGrid() {
  return (
    <div>
      <TextGenerateEffect words="Our Services" className="mb-6" />
      <BentoGrid className="max-w-5xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)
const items = [
  {
    title: 'Reverse Engineer Systems',
    header: <Skeleton />,
    icon: <IconCloudComputing className="h-5 w-5 text-neutral-200" />,
  },
  {
    title: 'Discover Trade Secrets',
    header: <Skeleton />,
    icon: <IconFileBroken className="h-5 w-5 text-neutral-200" />,
  },
  {
    title: 'Extract Insider Knowledge',
    header: <Skeleton />,
    icon: <IconBrain className="h-5 w-5 text-neutral-200" />,
  },
  {
    title: 'Access Proprietary Datasets',
    header: <Skeleton />,
    icon: <IconTable className="h-5 w-5 text-neutral-200" />,
  },
  {
    title: 'Access Proprietary Codebases',
    header: <Skeleton />,
    icon: <IconCode className="h-5 w-5 text-neutral-200" />,
  },
]
