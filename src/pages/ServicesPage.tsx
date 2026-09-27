import ServiceShowcase from '@/components/services/ServiceShowcase'

export default function ServicesPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-8">Our Services</h2>
        <p className="text-espresso/70 mb-12">Explore our curated categories - each treatment is a journey.</p>
        <ServiceShowcase />
      </div>
    </section>
  )
}