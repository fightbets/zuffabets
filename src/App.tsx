import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Article from './pages/Article'
import About from './pages/About'
import TagPage from './pages/TagPage'

const V2Home = lazy(() => import('./v2/V2Home'))
const V2Article = lazy(() => import('./v2/V2Article'))
const V2Tag = lazy(() => import('./v2/V2Tag'))
const V2About = lazy(() => import('./v2/V2About'))
const V2Layout = lazy(() => import('./v2/V2Layout'))

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
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-octagon focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Article />} />
          <Route path="/tag/:tag" element={<TagPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/v2" element={<Suspense fallback={null}><V2Layout /></Suspense>}>
            <Route index element={<Suspense fallback={null}><V2Home /></Suspense>} />
            <Route path="post/:slug" element={<Suspense fallback={null}><V2Article /></Suspense>} />
            <Route path="tag/:tag" element={<Suspense fallback={null}><V2Tag /></Suspense>} />
            <Route path="about" element={<Suspense fallback={null}><V2About /></Suspense>} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
