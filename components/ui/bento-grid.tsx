import { EvervaultCard } from '@/components/ui/evervault-card'
import { cn } from '@/lib/utils'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <EvervaultCard
      className={cn(
        'row-span-1 rounded-2xl p-2 group/bento hover:shadow-xl transition duration-200 shadow-none bg-neutral-800 border-white/[0.2] border justify-between flex flex-col space-y-4',
        className,
      )}
    >
      <div className="group-hover/bento:-translate-y-1 transition duration-200">
        <div className="flex justify-center -mt-2 mb-2">{icon}</div>
        <div className="text-base text-center font-bold text-neutral-200">
          {title}
        </div>
      </div>
    </EvervaultCard>
  )
}
