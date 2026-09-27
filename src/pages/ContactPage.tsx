import { useState } from 'react'
import Button from '@/components/common/Button'
import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-20 md:py-28 bg-ivory-soft">
      <div className="max-w-2xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-8">Get in Touch</h2>
        {submitted ? (
          <p className="text-espresso">Thank you! Your message has been received. We will reply within 24h.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full rounded border-espresso/20 p-3 focus:outline-none focus:ring-2 focus:ring-champagne"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full rounded border-espresso/20 p-3 focus:outline-none focus:ring-2 focus:ring-champagne"
            />
            <textarea
              placeholder="Your message"
              required
              rows={4}
              className="w-full rounded border-espresso/20 p-3 focus:outline-none focus:ring-2 focus:ring-champagne"
            />
            <Button type="submit" variant="primary" size="lg">
              Send Message <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
        )}
        <div className="mt-8 text-center">
          <Link to="/" className="text-espresso hover:text-champagne transition">← Back to Home</Link>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 md:mt-24 bg-espresso rounded-2xl overflow-hidden max-w-5xl mx-auto px-4 md:px-8">
        <div className="py-12 px-4 md:px-8 text-center text-ivory">
          <p className="font-serif text-3xl md:text-4xl font-medium mb-4">Find Us</p>
          <p className="text-ivory/70 mb-8 max-w-xl mx-auto">
            Located on King Fahd Road, our sanctuary awaits your visit.
          </p>
        </div>
        <div className="relative h-[400px] md:h-[500px]">
          <iframe
            title="VENUS Salon and Spa location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122860.00227637664!2d42.5019005!3d18.2396662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb55e38f7b287b%3A0x927023446a5da66!2sKing%20Fahd%20Rd!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="py-8 px-4 md:px-8 border-t border-espresso-soft">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
      </div>
    </section>
  )
}