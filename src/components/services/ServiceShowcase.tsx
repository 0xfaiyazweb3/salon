import ServiceCard from '@/components/services/ServiceCard'
import { cn } from '@/utils/cn'
import { servicesData } from '@/data/servicesData'

export default function ServiceShowcase() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}