import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/common/Button'
import SectionHeading from '@/components/common/SectionHeading'
import { cn } from '@/utils/cn'

export default function BrandStory() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Our Story"
          title="A haven of timeless elegance"
          subtitle="Founded by Parisian artisans, VENUS blends classic refinement with modern indulgence."
          light
        />
        <p className="text-ivory/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          From the first soft brushstroke on a bride’s veil to the gentle caress of a scalp massage, we craft each moment with meticulous care.
        </p>
        <Link to="/about">
          <Button variant="ghost" className="text-ivory border-ivory/30 hover:bg-ivory/10">
            Learn more about us <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}