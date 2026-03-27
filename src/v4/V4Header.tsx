import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', path: '/v4' },
  { label: 'History', path: '/v4/tag/history' },
  { label: 'Business', path: '/v4/tag/business' },
  { label: 'Dana White', path: '/v4/tag/dana-white' },
  { label: 'About', path: '/v4/about' },
]

export default function V4Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0d0d0d]/95 backdrop-blur-sm shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/v4" className="no-underline flex-shrink-0">
              <img src="/zuffabets-logo.png" alt="ZuffaBets" className="h-7 w-auto" />
            </Link>
            <nav aria-label="Main navigation" className="hidden md:flex items-center gap-5">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition no-underline ${location.pathname === item.path ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://fightbets.com?source=zuffabets-v4" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex bg-octagon hover:bg-octagon-dark text-white px-4 py-1.5 rounded text-xs font-bold transition no-underline">
              FightBets
            </a>
            <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? (<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>) : (<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>)}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <nav aria-label="Main navigation" className="md:hidden bg-[#0d0d0d]/98 backdrop-blur-sm border-t border-white/5 animate-fade-in-up">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(item => (
              <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className={`block px-4 py-3 rounded text-sm font-medium no-underline transition ${location.pathname === item.path ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white'}`}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
