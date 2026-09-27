import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/common/Button'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80',
    title: 'Where luxury meets serenity',
    subtitle: 'Step into a world of calm and beauty.',
  },
  {
    src: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=1200&q=80',
    title: 'Exquisite hair couture',
    subtitle: 'Personalized styling for every occasion.',
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80',
    title: 'Radiant skin therapy',
    subtitle: 'Advanced treatments for a glowing complexion.',
  },
]

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      {slides.map((slide, i) => (
        <motion.img
          key={i}
          src={slide.src}
          alt={slide.title}
          className={cn(
            'absolute inset-0 w-full h-full object-cover',
            i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.05 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      ))}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="text-ivory">
          <motion.h1
            key={slides[index].title}
            className="text-4xl md:text-6xl font-serif font-medium mb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {slides[index].title}
          </motion.h1>
          <motion.p
            key={slides[index].subtitle}
            className="text-lg md:text-xl mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {slides[index].subtitle}
          </motion.p>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Book your experience <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}