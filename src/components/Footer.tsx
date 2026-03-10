import { Link } from 'react-router-dom'
import { getAllTags } from '../content/posts'

export default function Footer() {
  const tags = getAllTags()

  return (
    <footer className="bg-canvas text-gray-400 mt-16 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div
        className="absolute top-8 right-16 w-24 h-24 border-2 border-octagon/5 rotate-45 rounded-sm animate-float-slow pointer-events-none"
        style={{ '--float-rotate': '45deg' } as React.CSSProperties}
      />
      <div
        className="absolute bottom-12 left-10 w-16 h-16 border border-gold/5 rotate-12 rounded-sm animate-float-slow pointer-events-none"
        style={{ '--float-rotate': '12deg', animationDelay: '2s' } as React.CSSProperties}
      />
      <div
        className="absolute top-1/2 right-1/3 w-8 h-8 bg-octagon/3 rotate-[30deg] rounded-sm animate-float pointer-events-none"
        style={{ '--float-rotate': '30deg', animationDelay: '1s' } as React.CSSProperties}
      />

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/zuffabets-logo.png" alt="ZuffaBets" className="h-8 w-auto" />
            </div>
            <p className="text-sm leading-relaxed">
              Hot takes, deep cuts, and degenerate history from Zuffa Boxing
              and the business of the ring.
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
