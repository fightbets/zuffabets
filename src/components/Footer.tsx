import { Link } from 'react-router-dom'
import { getAllTags } from '../content/posts'

export default function Footer() {
  const tags = getAllTags()

  return (
    <footer className="bg-canvas text-gray-400 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🥊</span>
              <span className="font-display text-xl font-bold">
                <span className="text-octagon">ZUFFA</span>
                <span className="text-gold">BETS</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Hot takes, deep cuts, and degenerate history from the company that
              turned cage fighting into a $4 billion empire.
            </p>
          </div>

          {/* Tags */}
          <div>
            <h3 className="font-display text-white text-sm uppercase tracking-wider mb-3">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <Link
                  key={tag}
                  to={`/tag/${tag}`}
                  className="tag bg-gray-800 text-gray-300 hover:bg-octagon hover:text-white transition"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display text-white text-sm uppercase tracking-wider mb-3">Stay in the Fight</h3>
            <p className="text-sm mb-4">No newsletter. No spam. Just follow us and enjoy the chaos.</p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 hover:bg-tap text-white px-4 py-2 rounded-full text-xs font-bold transition">
                Twitter/X
              </a>
              <a href="#" className="bg-gray-800 hover:bg-octagon text-white px-4 py-2 rounded-full text-xs font-bold transition">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <p>&copy; {new Date().getFullYear()} ZuffaBets. Not affiliated with Zuffa LLC, UFC, or TKO Group Holdings.</p>
          <p className="text-gray-600">Made with 🥊 and questionable judgment</p>
        </div>
      </div>
    </footer>
  )
}
