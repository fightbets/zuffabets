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
        <article className="hero-gradient rounded-2xl p-8 md:p-12 text-white card-hover relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-gold text-canvas text-xs font-bold px-3 py-1 rounded-full uppercase">
            Featured
          </div>
          <span className="text-5xl md:text-6xl block mb-4">{post.emoji}</span>
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map(tag => (
              <span key={tag} className="tag bg-white/10 text-white/80">{tag}</span>
            ))}
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-3 group-hover:text-gold transition">
            {post.title}
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-4">{post.subtitle}</p>
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
      <article className="bg-white rounded-xl p-6 card-hover border border-gray-100">
        <div className="flex items-start gap-4">
          <span className="text-4xl flex-shrink-0 mt-1">{post.emoji}</span>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {post.tags.map(tag => (
                <span key={tag} className={`tag ${tagColors[tag] || 'bg-gray-100 text-gray-600'}`}>{tag}</span>
              ))}
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-canvas group-hover:text-octagon transition leading-tight mb-1.5">
              {post.title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base line-clamp-2 mb-3">{post.subtitle}</p>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span>{post.readTime} read</span>
              <span>·</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
