import React from 'react'
import { motion } from 'framer-motion'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import Button from '@/components/common/Button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroHeadlineBanner() {
  return (
    <section className="py-24 md:py-32 bg-ivory text-espresso border-b border-espresso/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne/10 text-champagne-deep text-xs uppercase tracking-widest font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" /> VENUS Haute Aesthetics & Spa
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-7xl font-normal tracking-tight mb-6 leading-[1.1]"
          >
            Timeless Elegance, <br />
            <span className="italic font-serif text-champagne">Bespoke Beauty</span>
          </motion.h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-espresso/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Immerse yourself in a haven where Parisian artistry meets modern restorative care. Every ritual is meticulously crafted to elevate your natural radiance.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button as={Link} to="/services" variant="primary" size="lg">
              Explore Services <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button as={Link} to="/contact" variant="outline" size="lg" className="border-espresso/30 text-espresso hover:bg-espresso/5">
              Book Consultation
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}