import { TextGenerateEffect } from '@/components/ui/text-generate'

export function AboutUs() {
  return (
    <div className="max-w-5xl px-6 w-full mx-auto mb-24 grid gap-24">
      <WhoAreWe />
    </div>
  )
}

function WhoAreWe() {
  return (
    <div>
      <TextGenerateEffect words="Who are you?" className="mb-6" />
      <TextGenerateEffect
        words="Zero Dark: corporate espionage as a service."
        className="font-semibold text-neutral-500 tracking-normal mb-2"
      />
      <TextGenerateEffect
        words="Team of 5 based in the SF bay area."
        className="font-semibold text-neutral-500 tracking-normal mb-2"
      />
      <TextGenerateEffect
        words="We are founders, engineers, and ex-consultants from Stanford, MIT, and Yale who have raised $10M+ from a16z, YCombinator, and General Catalyst."
        className="font-semibold text-neutral-500 tracking-normal"
      />
    </div>
  )
}
