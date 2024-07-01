'use client'

import React from 'react'

import { TextGenerateEffect } from '@/components/ui/text-generate'
import { cn } from '@/lib/utils'

import { TracingBeam } from './ui/tracing-beam'

export function Process() {
  return (
    <div className="pb-36">
      <div className="max-w-5xl px-6 mx-auto mb-10">
        <TextGenerateEffect words="What is the process?" />
      </div>
      <TracingBeam className="px-6">
        <div className="pt-1.5 pl-4 max-w-3xl mx-auto antialiased relative">
          <div className="flex flex-col gap-10 sm:gap-20">
            {STEPS.map((step, index) => (
              <div
                key={`content-${index}`}
                className={cn(
                  'flex gap-6 sm:gap-10 sm:items-start',
                  // index % 2 !== 0 && 'sm:flex-row-reverse',
                )}
              >
                <div className="font-bold sm:font-extrabold text-4xl sm:text-7xl sm:max-w-10 sm:min-w-10 sm:w-full max-w-8">
                  {index + 1}
                </div>

                <div>
                  <div className="flex gap-4 items-center mb-4">
                    <div className="text-2xl font-bold tracking-normal text-neutral-300">
                      {step.title}
                    </div>
                    {step.badge && (
                      <div className="bg-black text-neutral-300 rounded-full text-sm w-fit px-4 py-1">
                        {step.badge}
                      </div>
                    )}
                  </div>
                  <div>{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TracingBeam>
    </div>
  )
}

const STEPS = [
  {
    title: 'Discovery Call',
    badge: '30 minutes',
    description: (
      <p>
        We will coordinate with you over Signal to schedule a call to identify
        your needs as a business.
      </p>
    ),
  },
  {
    title: 'Review Proposal',
    description: (
      <p>
        We will present you a proposal with scope of work, estimated timeline,
        price, and payment schedule for you to review.
      </p>
    ),
    badge: '1-3 days',
  },
  {
    title: 'Pay Deposit',
    description: (
      <p>
        Deposit will be paid over ACH, wire, or crypto. No work will be started
        until the proposal's deposit has been collected.
      </p>
    ),
    badge: '1-3 days',
  },
  {
    title: 'Execution',
    description: (
      <p>
        Espionage work agreed upon by the proposal will be executed. Weekly
        updates will be provided unless the proposal has stated an alternative
        communication cadence.
      </p>
    ),
    badge: '3-24 weeks',
  },
  {
    title: 'Review Work',
    description: (
      <p>
        Executed work will be reviewed and adjustments will be made based on
        feedback.
      </p>
    ),
    badge: '1-3 weeks',
  },
  {
    title: 'Renew or End Contract',
    description: (
      <p>
        More work can be contracted or the contract will be terminated. Your
        identity will remain anonymous and protected in perpetuity.
      </p>
    ),
    badge: '1-3 days',
  },
]
