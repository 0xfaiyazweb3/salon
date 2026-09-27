export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory py-8">
      <div className="max-w-7xl mx-auto text-center px-4 md:px-8">
        <p className="text-sm">© {new Date().getFullYear()} VENUS Salon and Spa. All rights reserved.</p>
        <ul className="mt-4 flex justify-center space-x-4">
          <li><a href="https://instagram.com/venus.salon" target="_blank" rel="noopener" className="hover:text-champagne transition-colors" aria-label="Instagram">IG</a></li>
          <li><a href="https://facebook.com/venus.salon" target="_blank" rel="noopener" className="hover:text-champagne transition-colors" aria-label="Facebook">FB</a></li>
          <li><a href="https://twitter.com/venus.salon" target="_blank" rel="noopener" className="hover:text-champagne transition-colors" aria-label="Twitter">TW</a></li>
        </ul>
      </div>
    </footer>
  )
}