import { Link } from 'react-router-dom'
import { getAllTags } from '../content/posts'

export default function V3Footer() {
  const tags = getAllTags()
  return (
    <footer className="bg-canvas text-gray-400 mt-16">
      <div className="h-1 bg-gradient-to-r from-gold via-gold-dark to-gold" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/zuffabets-logo.png" alt="ZuffaBets" className="h-8 w-auto mb-3" loading="lazy" />
            <p className="text-sm text-gray-500 leading-relaxed">The wildest MMA blog on the internet.</p>
          </div>
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-gold mb-3">Sections</h4>
            <div className="flex flex-col gap-2">
              <Link to="/v3" className="text-sm text-gray-500 hover:text-white transition no-underline">Home</Link>
              <Link to="/v3/about" className="text-sm text-gray-500 hover:text-white transition no-underline">About</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-gold mb-3">Topics</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <Link key={tag} to={`/v3/tag/${tag}`} className="text-xs text-gray-500 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded transition no-underline">{tag}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-gold mb-3">Follow</h4>
            <div className="flex gap-2">
              <a href="https://twitter.com/zuffabets" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-tap transition no-underline">Twitter/X</a>
              <span className="text-gray-700">·</span>
              <a href="https://instagram.com/zuffabets" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition no-underline">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} ZuffaBets. Not affiliated with Zuffa LLC, UFC, or TKO Group Holdings.</p>
          <div className="flex gap-4">
            <Link to="/" className="text-gray-600 hover:text-gray-400 transition no-underline">V1</Link>
            <Link to="/v2" className="text-gray-600 hover:text-gray-400 transition no-underline">V2</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
