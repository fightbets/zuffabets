import { Link } from 'react-router-dom'
import { posts } from '../content/posts'

function TopStoryCard({ post }: { post: typeof posts[0] }) {
  return (
    <Link to={`/v3/post/${post.slug}`} className="block no-underline group">
      <article className="v3-card v3-gold-top rounded-lg overflow-hidden h-full">
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-2 py-0.5 rounded">{tag}</span>
            ))}
          </div>
          <span className="text-5xl md:text-6xl block mb-4 group-hover:scale-105 transition-transform duration-300">{post.emoji}</span>
          <h2 className="v3-headline text-2xl md:text-3xl mb-3 group-hover:text-gold-dark transition-colors">{post.title}</h2>
          <p className="text-gray-500 text-base md:text-lg mb-4 leading-relaxed">{post.subtitle}</p>
          <div className="v3-meta">
            <span className="font-medium text-gray-700">{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{post.readTime} read</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

function SideStoryCard({ post }: { post: typeof posts[0] }) {
  return (
    <Link to={`/v3/post/${post.slug}`} className="block no-underline group">
      <article className="v3-card v3-gold-bar rounded-lg p-4 h-full">
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">{post.emoji}</span>
          <div className="min-w-0">
            <h3 className="v3-headline text-sm leading-snug mb-1 group-hover:text-gold-dark transition-colors">{post.title}</h3>
            <div className="v3-meta">
              <span>{post.readTime}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

function ArticleRow({ post, index }: { post: typeof posts[0]; index: number }) {
  return (
    <Link to={`/v3/post/${post.slug}`} className="block no-underline group">
      <article className={`flex items-start gap-4 py-4 ${index > 0 ? 'border-t border-gray-100' : ''}`}>
        <span className="text-3xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">{post.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-1.5 mb-1">
            {post.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-gold-dark">{tag}</span>
            ))}
          </div>
          <h3 className="v3-headline text-base md:text-lg mb-1 group-hover:text-gold-dark transition-colors">{post.title}</h3>
          <p className="text-gray-500 text-sm line-clamp-1 mb-1">{post.subtitle}</p>
          <div className="v3-meta">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default function V3Home() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)
  const sideStories = rest.slice(0, 3)
  const mainFeed = rest.slice(3)
  const trending = [...posts].sort((a, b) => (parseInt(b.readTime) || 0) - (parseInt(a.readTime) || 0)).slice(0, 5)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Top Stories */}
      <section className="mb-8">
        <div className="mb-4"><span className="v3-section-label">Top Stories</span></div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            {featured && <TopStoryCard post={featured} />}
          </div>
          <div className="flex flex-col gap-4">
            {sideStories.map(post => <SideStoryCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      {/* Main + Sidebar */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="mb-4"><span className="v3-section-label">Latest</span></div>
          <div className="v3-card rounded-lg px-5">
            {(mainFeed.length > 0 ? mainFeed : rest).map((post, i) => (
              <ArticleRow key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="mb-4"><span className="v3-section-label">Trending</span></div>
            <div className="v3-card rounded-lg divide-y divide-gray-100">
              {trending.map((post, i) => (
                <Link key={post.slug} to={`/v3/post/${post.slug}`} className="flex items-start gap-3 p-4 no-underline group">
                  <span className="font-display text-2xl font-bold text-gold/40 flex-shrink-0 leading-none mt-0.5">{i + 1}</span>
                  <div className="min-w-0">
                    <h4 className="v3-headline text-sm leading-snug group-hover:text-gold-dark transition-colors">{post.title}</h4>
                    <span className="text-[11px] text-gray-400 mt-1 block">{post.readTime} read</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="v3-card v3-gold-top rounded-lg p-5 text-center">
            <img src="/fightbets-logo.png" alt="FightBets" className="w-10 h-10 rounded-lg mx-auto mb-3" loading="lazy" />
            <h3 className="font-display text-lg font-bold text-corner mb-1">FightBets</h3>
            <p className="text-gray-500 text-sm mb-4">Bet on MMA with 0% fees. Powered by Polymarket.</p>
            <a href="https://fightbets.com?source=zuffabets-v3" target="_blank" rel="noopener noreferrer" className="block bg-gold hover:bg-gold-dark text-white py-2.5 rounded font-bold text-sm transition no-underline">
              Start Betting
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <section className="mt-12 bg-canvas rounded-lg p-8 md:p-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <img src="/fightbets-logo.png" alt="" className="w-8 h-8 rounded-lg" loading="lazy" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">FIGHT<span className="text-gold">BETS</span></h2>
        </div>
        <p className="text-gray-400 max-w-md mx-auto mb-6">Put your USDC where your mouth is. 0% fees. No middleman.</p>
        <a href="https://fightbets.com?source=zuffabets-v3" target="_blank" rel="noopener noreferrer" className="inline-block bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded font-bold transition no-underline">
          Start Betting — 0% Fees
        </a>
      </section>
    </div>
  )
}
