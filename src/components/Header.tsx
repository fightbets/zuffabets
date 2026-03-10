import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = location.pathname === '/'

  return (
    <header className="bg-canvas text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-3xl">🥊</span>
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight leading-none">
              <span className="text-octagon">ZUFFA</span>
              <span className="text-gold">BETS</span>
            </h1>
            <p className="text-[10px] text-gray-400 tracking-widest uppercase hidden md:block">
              Boxing stories, business & culture
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className={`hover:text-octagon transition ${isHome ? 'text-octagon' : 'text-gray-300'}`}>
            Home
          </Link>
          <Link to="/tag/history" className="text-gray-300 hover:text-octagon transition">
            History
          </Link>
          <Link to="/tag/business" className="text-gray-300 hover:text-octagon transition">
            Business
          </Link>
          <Link to="/tag/dana-white" className="text-gray-300 hover:text-octagon transition">
            Dana White
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-octagon transition">
            About
          </Link>
          <a
            href="https://twitter.com/intent/tweet?text=Check%20out%20ZuffaBets%20🥊&url=https://zuffabets.com"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-glow-cta bg-gold text-canvas px-3 py-1.5 rounded-full text-xs font-bold hover:bg-gold-dark transition"
          >
            Share 🔥
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Gradient underline */}
      <div className="header-gradient-line" />

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-canvas border-t border-gray-800 px-4 py-4 flex flex-col gap-3 text-sm">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-octagon">Home</Link>
          <Link to="/tag/history" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-octagon">History</Link>
          <Link to="/tag/business" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-octagon">Business</Link>
          <Link to="/tag/dana-white" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-octagon">Dana White</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-octagon">About</Link>
        </nav>
      )}
    </header>
  )
}
