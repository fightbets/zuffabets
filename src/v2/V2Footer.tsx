import { Link } from 'react-router-dom'
import { getAllTags } from '../content/posts'

export default function V2Footer() {
  const tags = getAllTags()

  return (
    <footer className="bg-[#080808] border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <img src="/zuffabets-logo.png" alt="ZuffaBets" className="h-9 w-auto mb-4" loading="lazy" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Hot takes, deep cuts, and degenerate history from Zuffa Boxing
              and the business of the ring. No paywall. No BS.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://twitter.com/zuffabets" target="_blank" rel="noopener noreferrer" className="v2-surface-raised hover:border-tap/30 text-gray-400 hover:text-tap px-4 py-2.5 rounded-lg text-xs font-bold transition no-underline">
                Twitter/X
              </a>
              <a href="https://instagram.com/zuffabets" target="_blank" rel="noopener noreferrer" className="v2-surface-raised hover:border-octagon/30 text-gray-400 hover:text-octagon px-4 py-2.5 rounded-lg text-xs font-bold transition no-underline">
                Instagram
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <Link
                  key={tag}
                  to={`/v2/tag/${tag}`}
                  className="text-xs text-gray-500 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md transition no-underline"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">FightBets</h3>
            <p className="text-gray-600 text-sm mb-4">Bet on MMA with 0% fees. Powered by Polymarket.</p>
            <a
              href="https://fightbets.com?source=zuffabets-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 v2-border-glow bg-transparent text-octagon hover:text-white hover:bg-octagon px-5 py-2.5 rounded-lg text-sm font-bold transition-all no-underline"
            >
              <img src="/fightbets-logo.png" alt="" className="w-5 h-5 rounded" loading="lazy" />
              Start Betting
            </a>
          </div>
        </div>

        <div className="v2-divider mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} ZuffaBets. Not affiliated with Zuffa LLC, UFC, or TKO Group Holdings.</p>
          <Link to="/" className="text-gray-600 hover:text-gray-400 transition no-underline">
            View V1 &rarr;
          </Link>
        </div>
      </div>
    </footer>
  )
}
