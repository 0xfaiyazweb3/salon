import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-espresso text-ivory sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <Link to="/" className="font-serif text-2xl font-medium">VENUS Salon & Spa</Link>
        <ul className="flex items-center space-x-6">
          <li><Link to="/" className="hover:text-champagne transition-colors">Home</Link></li>
          <li><Link to="/services" className="hover:text-champagne transition-colors">Services</Link></li>
          <li><Link to="/about" className="hover:text-champagne transition-colors">About</Link></li>
          <li><Link to="/gallery" className="hover:text-champagne transition-colors">Gallery</Link></li>
          <li><Link to="/contact" className="hover:text-champagne transition-colors">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}