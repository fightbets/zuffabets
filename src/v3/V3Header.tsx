import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { label: 'Home', path: '/v3' },
  { label: 'History', path: '/v3/tag/history' },
  { label: 'Business', path: '/v3/tag/business' },
  { label: 'Dana White', path: '/v3/tag/dana-white' },
  { label: 'Culture', path: '/v3/tag/culture' },
  { label: 'About', path: '/v3/about' },
]

export default function V3Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="h-1 bg-gradient-to-r from-gold via-gold-dark to-gold" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link to="/v3" className="flex items-center gap-3 no-underline">
            <img src="/zuffabets-logo.png" alt="ZuffaBets" className="h-7 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <a href="https://fightbets.com?source=zuffabets-v3" target="_blank" rel="noopener noreferrer" className="bg-gold hover:bg-gold-dark text-white px-4 py-1.5 rounded text-xs font-bold transition no-underline">
              FightBets
            </a>
          </div>
          <button className="md:hidden text-gray-600 hover:text-gray-900 transition p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>) : (<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>)}
            </svg>
          </button>
        </div>
      </div>
      <nav aria-label="Main navigation" className="hidden md:block border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
          {navItems.map(item => (
            <Link key={item.path} to={item.path} className={`v3-nav-item no-underline ${location.pathname === item.path ? 'v3-nav-active text-gold-dark' : 'text-gray-600'}`}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      {menuOpen && (
        <nav aria-label="Main navigation" className="md:hidden border-t border-gray-100 bg-white animate-fade-in-up">
          <div className="px-4 py-2">
            {navItems.map(item => (
              <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className={`block px-3 py-3 text-sm font-medium border-b border-gray-50 no-underline transition ${location.pathname === item.path ? 'text-gold-dark font-bold' : 'text-gray-600 hover:text-gold-dark'}`}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
