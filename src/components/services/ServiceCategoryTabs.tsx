import { cn } from '@/utils/cn'

interface ServiceCategoryTabsProps {
  categories: string[]
  onSelect: (category: string) => void
  selected: string
}

export default function ServiceCategoryTabs({
  categories,
  onSelect,
  selected,
}: ServiceCategoryTabsProps) {
  return (
    <div className="flex gap-4 mb-8">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            'px-5 py-2 rounded-full text-sm font-medium transition-colors',
            cat === selected
              ? 'bg-espresso text-ivory'
              : 'bg-ivory-soft text-espresso hover:bg-ivory/50'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}