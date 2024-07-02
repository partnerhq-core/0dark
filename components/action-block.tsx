import { Action } from '@/components/action'
import { Meteors } from '@/components/ui/meteors'

export function ActionBlock() {
  return (
    <div className="mx-auto px-6 max-w-5xl mb-36 pt-12">
      <div className=" w-full relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-neutral-500 to-slate-500 transform scale-[0.80] bg-red-500 rounded-full blur-2xl" />
        <div className="relative shadow-xl bg-neutral-900 border border-neutral-700 px-8 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="flex flex-col sm:flex-row sm:justify-between w-full items-center gap-4">
            <h1 className="text-center font-semibold text-2xl text-neutral-100 relative">
              Ready to grow your business?
            </h1>
            <Action />
          </div>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  )
}
