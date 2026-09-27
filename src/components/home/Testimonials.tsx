export default function Testimonials() {
  const reviews = [
    {
      quote: "An absolute sanctuary. The attention to detail and care is unmatched.",
      author: "Sophia R.",
      service: "Signature Hair Couture",
    },
    {
      quote: "My skin has never felt more radiant. VENUS is my weekly escape.",
      author: "Claire M.",
      service: "Radiance Facial",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {reviews.map((rev, i) => (
        <div key={i} className="bg-ivory-soft p-8 rounded-lg border border-espresso/10">
          <p className="font-serif italic text-lg mb-4 text-espresso">"{rev.quote}"</p>
          <p className="font-medium text-espresso">{rev.author}</p>
          <p className="text-xs uppercase tracking-wider text-champagne">{rev.service}</p>
        </div>
      ))}
    </div>
  )
}