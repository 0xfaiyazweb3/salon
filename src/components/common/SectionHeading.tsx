interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'text-left'}`}>
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-widest text-champagne font-medium mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-5xl font-medium tracking-tight mb-4 ${light ? 'text-ivory' : 'text-espresso'}`}>
        {title}
      </h2>
      <div className={`divider-gold mb-4 ${align === 'center' ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`text-base md:text-lg ${light ? 'text-ivory/70' : 'text-espresso/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}