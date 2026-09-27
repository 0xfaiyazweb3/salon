import { cn } from '@/utils/cn'

interface ServiceCardProps {
  title: string
  description: string
  price?: string
  image?: string
}

export default function ServiceCard({ title, description, price, image }: ServiceCardProps) {
  return (
    <div className="border border-espresso/10 bg-ivory-soft hover:shadow-glow transition-shadow rounded-lg overflow-hidden">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-espresso font-serif text-xl mb-2">{title}</h3>
        <p className="text-espresso/70 mb-3">{description}</p>
        {price && (
          <p className="font-medium text-espresso">Starting at {price}</p>
        )}
      </div>
    </div>
  )
}