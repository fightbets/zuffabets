import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { label: 'Home', path: '/v2' },
  { label: 'History', path: '/v2/tag/history' },
  { label: 'Business', path: '/v2/tag/business' },
  { label: 'Dana White', path: '/v2/tag/dana-white' },
  { label: 'About', path: '/v2/about' },
]

export default function V2Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/v2" className="flex items-center gap-3 no-underline group">
            <img src="/zuffabets-logo.png" alt="ZuffaBets" className="h-8 w-auto" />
            <div className="hidden sm:block">
              <span className="text-[10px] text-gray-600 tracking-[0.25em] uppercase font-medium">
                V2
              </span>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navItems.map(item => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="w-px h-6 bg-white/10 mx-2" />
            <a
              href="https://fightbets.com?source=zuffabets-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-octagon hover:bg-octagon-dark text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 no-underline"
            >
              FightBets
            </a>
          </nav>

          <button
            className="md:hidden text-gray-400 hover:text-white transition p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              ) : (
                <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav aria-label="Main navigation" className="md:hidden border-t border-white/5 bg-[#0a0a0a] animate-fade-in-up">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition ${
                  location.pathname === item.path
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="v2-divider my-2" />
            <a
              href="https://fightbets.com?source=zuffabets-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-octagon hover:bg-octagon-dark text-white px-4 py-3 rounded-lg text-sm font-bold transition no-underline"
              onClick={() => setMenuOpen(false)}
            >
              FightBets — 0% Fee Betting
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
