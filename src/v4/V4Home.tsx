import { Link } from 'react-router-dom'
import { posts, getAllTags } from '../content/posts'

function ContentCard({ post }: { post: typeof posts[0] }) {
  return (
    <Link to={`/v4/post/${post.slug}`} className="block no-underline group w-[260px] sm:w-[280px]">
      <div className="v4-card">
        <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] aspect-[4/3] flex items-center justify-center">
          <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{post.emoji}</span>
          <div className="absolute top-2 left-2 flex gap-1">
            {post.tags.slice(0, 1).map(tag => (
              <span key={tag} className="v4-tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-display text-sm font-bold text-white leading-snug mb-1 line-clamp-2 group-hover:text-octagon transition-colors">
            {post.title}
          </h3>
          <div className="flex items-center gap-2 text-[11px] text-gray-500">
            <span>{post.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function ContentRow({ title, items }: { title: string; items: typeof posts }) {
  if (items.length === 0) return null
  return (
    <section className="mb-8">
      <h2 className="v4-row-title px-4 sm:px-8">{title}</h2>
      <div className="v4-row px-4 sm:px-8">
        {items.map(post => (
          <ContentCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}

export default function V4Home() {
  const featured = posts.find(p => p.featured)
  const allTags = getAllTags()
  const trending = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div>
      {/* Billboard Hero */}
      {featured && (
        <section className="relative h-[75vh] min-h-[500px] flex items-end overflow-hidden">
          {/* Background emoji */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[20rem] opacity-[0.07] select-none">{featured.emoji}</span>
          </div>
          {/* Gradient overlays */}
          <div className="absolute inset-0 v4-hero-gradient" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 pb-12 md:pb-16 w-full">
            <div className="max-w-xl">
              <div className="flex gap-2 mb-3 animate-fade-in-up">
                {featured.tags.map(tag => (
                  <span key={tag} className="v4-tag">{tag}</span>
                ))}
                <span className="v4-match">98% Match</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[0.95] mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                {featured.title}
              </h1>
              <p className="text-gray-300 text-base md:text-lg max-w-lg mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                {featured.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <Link to={`/v4/post/${featured.slug}`} className="bg-white hover:bg-gray-200 text-black px-6 md:px-8 py-2.5 md:py-3 rounded font-bold text-sm transition no-underline inline-flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  Read Now
                </Link>
                <a href="https://fightbets.com?source=zuffabets-v4" target="_blank" rel="noopener noreferrer" className="bg-gray-600/60 hover:bg-gray-600/80 text-white px-6 md:px-8 py-2.5 md:py-3 rounded font-bold text-sm transition no-underline backdrop-blur-sm">
                  FightBets
                </a>
              </div>
              <div className="flex items-center gap-3 mt-4 text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <span>{featured.author}</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>{featured.readTime} read</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content Rows */}
      <div className="max-w-[1400px] mx-auto py-4">
        <ContentRow title="Trending Now" items={trending} />

        {allTags.slice(0, 4).map(tag => {
          const tagPosts = posts.filter(p => p.tags.includes(tag))
          return <ContentRow key={tag} title={tag.charAt(0).toUpperCase() + tag.slice(1)} items={tagPosts} />
        })}

        {/* FightBets Banner */}
        <section className="px-4 sm:px-8 my-8">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-[#1a0000] via-[#0d0d0d] to-[#1a0000] border border-white/5 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-octagon/5 rounded-full blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <img src="/fightbets-logo.png" alt="FightBets" className="w-16 h-16 rounded-xl" loading="lazy" />
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                  FIGHT<span className="text-octagon">BETS</span>
                </h3>
                <p className="text-gray-400">Bet on MMA with 0% fees. Powered by Polymarket.</p>
              </div>
              <a href="https://fightbets.com?source=zuffabets-v4" target="_blank" rel="noopener noreferrer" className="bg-octagon hover:bg-octagon-dark text-white px-8 py-3 rounded font-bold transition no-underline flex-shrink-0">
                Start Betting
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
