import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Article from './pages/Article'
import About from './pages/About'
import TagPage from './pages/TagPage'

declare global {
  interface Window {
    datafast?: (...args: unknown[]) => void
  }
}

export default function App() {
  // Track clicks on any link going to fightbets.com
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a')
      if (anchor?.href?.includes('fightbets.com')) {
        window.datafast?.('click_fightbets', {
          url: anchor.href,
          location: window.location.pathname,
        })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Article />} />
          <Route path="/tag/:tag" element={<TagPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
