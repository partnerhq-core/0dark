import { EvervaultCard } from '@/components/ui/evervault-card'
import { cn } from '@/lib/utils'

interface IGridProps {
  className?: string
  children?: React.ReactNode
}
export const BentoGrid = ({ className, children }: IGridProps) => {
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

interface IItemProps {
  className?: string
  title?: string | React.ReactNode
  icon?: React.ReactNode
}

export const BentoGridItem = ({ className, title, icon }: IItemProps) => {
  return (
    <EvervaultCard
      className={cn(
        'cursor-pointer row-span-1 rounded-3xl p-1 group/bento transition duration-200',
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
