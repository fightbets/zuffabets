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

const V3Home = lazy(() => import('./v3/V3Home'))
const V3Article = lazy(() => import('./v3/V3Article'))
const V3Tag = lazy(() => import('./v3/V3Tag'))
const V3About = lazy(() => import('./v3/V3About'))
const V3Layout = lazy(() => import('./v3/V3Layout'))

const V4Home = lazy(() => import('./v4/V4Home'))
const V4Article = lazy(() => import('./v4/V4Article'))
const V4Tag = lazy(() => import('./v4/V4Tag'))
const V4About = lazy(() => import('./v4/V4About'))
const V4Layout = lazy(() => import('./v4/V4Layout'))

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
    <Routes>
      {/* V1 — has its own header/footer wrapper */}
      <Route path="/" element={
        <div className="min-h-screen flex flex-col">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-octagon focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold">
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            <Home />
          </main>
          <Footer />
        </div>
      } />
      <Route path="/post/:slug" element={
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1"><Article /></main>
          <Footer />
        </div>
      } />
      <Route path="/tag/:tag" element={
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1"><TagPage /></main>
          <Footer />
        </div>
      } />
      <Route path="/about" element={
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1"><About /></main>
          <Footer />
        </div>
      } />

      {/* V2 — own layout */}
      <Route path="/v2" element={<Suspense fallback={null}><V2Layout /></Suspense>}>
        <Route index element={<Suspense fallback={null}><V2Home /></Suspense>} />
        <Route path="post/:slug" element={<Suspense fallback={null}><V2Article /></Suspense>} />
        <Route path="tag/:tag" element={<Suspense fallback={null}><V2Tag /></Suspense>} />
        <Route path="about" element={<Suspense fallback={null}><V2About /></Suspense>} />
      </Route>

      {/* V3 — own layout */}
      <Route path="/v3" element={<Suspense fallback={null}><V3Layout /></Suspense>}>
        <Route index element={<Suspense fallback={null}><V3Home /></Suspense>} />
        <Route path="post/:slug" element={<Suspense fallback={null}><V3Article /></Suspense>} />
        <Route path="tag/:tag" element={<Suspense fallback={null}><V3Tag /></Suspense>} />
        <Route path="about" element={<Suspense fallback={null}><V3About /></Suspense>} />
      </Route>

      {/* V4 — own layout */}
      <Route path="/v4" element={<Suspense fallback={null}><V4Layout /></Suspense>}>
        <Route index element={<Suspense fallback={null}><V4Home /></Suspense>} />
        <Route path="post/:slug" element={<Suspense fallback={null}><V4Article /></Suspense>} />
        <Route path="tag/:tag" element={<Suspense fallback={null}><V4Tag /></Suspense>} />
        <Route path="about" element={<Suspense fallback={null}><V4About /></Suspense>} />
      </Route>
    </Routes>
  )
}
