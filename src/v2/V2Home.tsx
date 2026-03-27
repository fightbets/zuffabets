import { Link } from 'react-router-dom'
import { posts } from '../content/posts'

function V2ArticleCard({ post, index = 0 }: { post: typeof posts[0]; index?: number }) {
  return (
    <Link
      to={`/v2/post/${post.slug}`}
      className={`group block v2-surface rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 v2-border-glow no-underline v2-reveal v2-reveal-delay-${Math.min(index + 1, 4)}`}
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl md:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {post.emoji}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-display text-lg md:text-xl font-bold text-white group-hover:text-octagon transition-colors leading-tight mb-1.5">
            {post.title}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-2 mb-3">{post.subtitle}</p>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>{post.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            <span className="ml-auto text-octagon font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
              Read &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function V2Home() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)
  const firstBatch = rest.slice(0, 4)
  const secondBatch = rest.slice(4)

  const totalReadTime = posts.reduce((acc, p) => acc + (parseInt(p.readTime) || 5), 0)

  return (
    <div>
      {/* Hero — Featured Article */}
      {featured && (
        <Link to={`/v2/post/${featured.slug}`} className="block no-underline group">
          <section className="relative overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-octagon/5 via-transparent to-gold/5 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative">
              <div className="flex flex-wrap gap-2 mb-4 v2-reveal">
                <span className="badge-shimmer text-[#0a0a0a] text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
                  Featured
                </span>
                {featured.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 bg-white/5 px-2.5 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-6xl md:text-8xl block mb-6 group-hover:scale-105 transition-transform duration-500 v2-reveal v2-reveal-delay-1">
                {featured.emoji}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[0.95] mb-4 group-hover:text-octagon transition-colors duration-300 v2-reveal v2-reveal-delay-2">
                {featured.title}
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-6 v2-reveal v2-reveal-delay-3">
                {featured.subtitle}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600 v2-reveal v2-reveal-delay-4">
                <span className="text-gray-400 font-medium">{featured.author}</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>{featured.readTime} read</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>{new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-octagon to-gold rounded-full mt-8 group-hover:w-48 transition-all duration-500 v2-reveal v2-reveal-delay-4" />
            </div>
          </section>
        </Link>
      )}

      {/* Stats Ribbon */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-white">{posts.length}</span>
            <span className="text-gray-600 text-xs uppercase tracking-wider">Articles</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-octagon">{totalReadTime}</span>
            <span className="text-gray-600 text-xs uppercase tracking-wider">Min Reading</span>
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="hidden sm:flex items-center gap-2">
            <span className="font-display text-xl font-bold text-gold">2024</span>
            <span className="text-gray-600 text-xs uppercase tracking-wider">Est.</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-xl font-bold text-white uppercase tracking-wide">Latest</h2>
          <div className="flex-1 v2-divider" />
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {firstBatch.map((post, i) => (
            <V2ArticleCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        {/* Mid-page CTA */}
        <section className="my-12 v2-surface rounded-xl p-8 md:p-10 v2-glow-red relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-octagon/5 via-transparent to-transparent pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-center gap-6">
            <img src="/fightbets-logo.png" alt="FightBets" className="w-14 h-14 rounded-xl" loading="lazy" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                Think You Know Fights?
              </h3>
              <p className="text-gray-500">Bet on MMA with 0% fees. Powered by Polymarket. No KYC.</p>
            </div>
            <a
              href="https://fightbets.com?source=zuffabets-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-glow-cta bg-octagon hover:bg-octagon-dark text-white px-8 py-3 rounded-lg font-bold text-sm transition-all no-underline flex-shrink-0"
            >
              Start Betting
            </a>
          </div>
        </section>

        {/* More Articles */}
        {secondBatch.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display text-xl font-bold text-white uppercase tracking-wide">More Stories</h2>
              <div className="flex-1 v2-divider" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {secondBatch.map((post, i) => (
                <V2ArticleCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Bottom CTA */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-4">Presented by</p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/fightbets-logo.png" alt="" className="w-10 h-10 rounded-xl" loading="lazy" />
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
              FIGHT<span className="text-octagon">BETS</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-md mx-auto mb-8">
            Put your USDC where your mouth is. 0% fees. No middleman.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://fightbets.com?source=zuffabets-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-glow-cta bg-octagon hover:bg-octagon-dark text-white px-8 py-3.5 rounded-lg font-bold transition-all no-underline"
            >
              Start Betting — 0% Fees
            </a>
            <a
              href="https://fightbets.com?source=zuffabets-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="v2-surface-raised hover:bg-white/10 text-gray-300 px-8 py-3.5 rounded-lg font-bold transition-all no-underline"
            >
              Browse Markets
            </a>
          </div>
          <p className="text-gray-700 text-xs mt-6">Not financial advice. Just fight advice. Which is worse.</p>
        </div>
      </section>
    </div>
  )
}
