import { Link } from 'react-router-dom'
import type { Post } from '../content/posts'

export default function ArticleCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const tagColors: Record<string, string> = {
    history: 'bg-octagon/10 text-octagon',
    business: 'bg-gold/20 text-gold-dark',
    'dana-white': 'bg-red-100 text-red-700',
    entertainment: 'bg-purple-100 text-purple-700',
    'top-10': 'bg-blue-100 text-blue-700',
    tuf: 'bg-green-100 text-green-700',
    fights: 'bg-orange-100 text-orange-700',
    culture: 'bg-pink-100 text-pink-700',
    politics: 'bg-indigo-100 text-indigo-700',
  }

  if (featured) {
    return (
      <Link to={`/post/${post.slug}`} className="block no-underline group">
        <article className="hero-gradient rounded-2xl p-8 md:p-12 text-white card-hover relative overflow-hidden animate-fade-in-up">
          {/* Floating decorative octagons */}
          <div
            className="absolute top-8 right-12 w-20 h-20 border-2 border-octagon/15 rotate-45 rounded-sm animate-float-slow pointer-events-none"
            style={{ '--float-rotate': '45deg' } as React.CSSProperties}
          />
          <div
            className="absolute bottom-6 right-32 w-10 h-10 border border-gold/15 rotate-12 rounded-sm animate-float-slow pointer-events-none"
            style={{ '--float-rotate': '12deg', animationDelay: '1.5s' } as React.CSSProperties}
          />
          <div
            className="absolute top-20 right-60 w-6 h-6 bg-octagon/8 rotate-45 rounded-sm animate-float pointer-events-none"
            style={{ '--float-rotate': '45deg', animationDelay: '0.8s' } as React.CSSProperties}
          />
          <div
            className="absolute bottom-16 left-8 w-14 h-14 border border-white/5 rotate-[22deg] rounded-sm animate-float-slow pointer-events-none"
            style={{ '--float-rotate': '22deg', animationDelay: '2s' } as React.CSSProperties}
          />

          {/* Featured badge with gold shimmer */}
          <div className="absolute top-4 right-4 badge-shimmer text-canvas text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Featured
          </div>

          {/* Big emoji */}
          <span className="text-6xl md:text-7xl block mb-5 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{post.emoji}</span>

          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map(tag => (
              <span key={tag} className="tag bg-white/10 text-white/80">{tag}</span>
            ))}
          </div>

          {/* Title with red glow animation */}
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-3 group-hover:text-gold transition animate-pulse-red-text">
            {post.title}
          </h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-5">{post.subtitle}</p>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link to={`/post/${post.slug}`} className="block no-underline group">
      <article className="bg-white rounded-xl p-6 md:p-7 card-hover card-accent surface-glow border border-gray-100 animate-fade-in-up">
        <div className="flex items-start gap-5">
          <span className="text-4xl md:text-5xl flex-shrink-0 mt-1 group-hover:scale-115 transition-transform duration-300">{post.emoji}</span>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {post.tags.map(tag => (
                <span key={tag} className={`tag ${tagColors[tag] || 'bg-gray-100 text-gray-600'}`}>{tag}</span>
              ))}
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-canvas group-hover:text-octagon transition leading-tight mb-2">
              {post.title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base line-clamp-2 mb-3">{post.subtitle}</p>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span>{post.readTime} read</span>
              <span>·</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              {/* READ arrow appears on hover */}
              <span className="ml-auto text-octagon font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                Read <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
