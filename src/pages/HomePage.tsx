import HeroSlideshow from '@/components/home/HeroSlideshow'
import HeroHeadlineBanner from '@/components/home/HeroHeadlineBanner'
import FeaturedServices from '@/components/home/FeaturedServices'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import Button from '@/components/common/Button'
import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main>
      <HeroSlideshow />

      <HeroHeadlineBanner />

      <section className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Curated for your beauty"
            subtitle="From hair couture to advanced skincare, every treatment is designed around you."
          />
        </Reveal>
        <FeaturedServices />
      </section>

      <section className="py-20 md:py-28 bg-espresso text-ivory">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="font-serif italic text-champagne text-xl md:text-2xl leading-relaxed">
              "Beauty is not just appearance — it is the feeling of being seen, cared for, and restored."
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionHeading
              eyebrow="Our Philosophy"
              title="A sanctuary for the senses"
              subtitle="Every visit to VENUS is a ritual of renewal — quiet music, soft light, and hands that listen."
              light
              align="left"
            />
            <div className="mt-8">
              <Button as={Link} to="/about" variant="ghost" className="text-ivory border-ivory/30 hover:bg-ivory/10">
                Discover our story <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        <Reveal>
          <SectionHeading
            eyebrow="Client Love"
            title="Moments of renewal"
            subtitle="What our guests say after walking through our doors."
          />
        </Reveal>
        <Testimonials />
      </section>

      {/* Map Section on Home Page */}
      <section className="py-12 md:py-16 bg-espresso">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Visit Us"
              title="Find our sanctuary"
              subtitle="Located on King Fahd Road, we welcome you to experience VENUS."
              light
            />
          </Reveal>
          <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden mt-8">
            <iframe
              title="VENUS Salon and Spa location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122860.00227637664!2d42.5019005!3d18.2396662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb55e38f7b287b%3A0x927023446a5da66!2sKing%20Fahd%20Rd!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-center md:justify-start gap-3 text-ivory">
              <MapPin className="w-5 h-5 text-champagne" />
              <div>
                <p className="font-medium">King Fahd Road</p>
                <p className="text-sm text-ivory/60">Abha, Saudi Arabia</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-center gap-3 text-ivory">
              <MapPin className="w-5 h-5 text-champagne" />
              <div>
                <p className="font-medium">+966 50 123 4567</p>
                <p className="text-sm text-ivory/60">Call to book</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3 text-ivory">
              <MapPin className="w-5 h-5 text-champagne" />
              <div>
                <p className="font-medium">info@venus-salon.com</p>
                <p className="text-sm text-ivory/60">Email us</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ivory-soft">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <Reveal>
            <p className="font-serif italic text-champagne text-lg mb-4">Reserve your ritual</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-espresso mb-6">
              Book your experience today
            </h2>
            <p className="text-espresso/70 max-w-xl mx-auto mb-10">
              Walk-ins are welcome, but we recommend booking ahead so your specialist is ready.
            </p>
            <Button as={Link} to="/contact" size="lg">
              Make a reservation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}