export default function GalleryPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-ivory-soft aspect-square rounded-lg" />
          <div className="bg-ivory-soft aspect-square rounded-lg" />
          <div className="bg-ivory-soft aspect-square rounded-lg" />
          <div className="bg-ivory-soft aspect-square rounded-lg" />
          <div className="bg-ivory-soft aspect-square rounded-lg" />
          <div className="bg-ivory-soft aspect-square rounded-lg" />
        </div>
      </div>
    </section>
  )
}