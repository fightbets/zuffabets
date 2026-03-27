import { useParams, Link, Navigate } from 'react-router-dom'
import { getPostsByTag, getAllTags } from '../content/posts'

export default function V2Tag() {
  const { tag } = useParams<{ tag: string }>()
  const allTags = getAllTags()

  if (!tag || !allTags.includes(tag)) return <Navigate to="/v2" replace />

  const tagPosts = getPostsByTag(tag)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link to="/v2" className="hover:text-white transition no-underline text-gray-500">Home</Link>
        <span className="text-gray-700">/</span>
        <span className="text-gray-500">Tag: {tag}</span>
      </nav>

      <div className="flex items-center gap-4 mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white uppercase">#{tag}</h1>
        <span className="bg-octagon/20 text-octagon text-sm font-bold px-3 py-1 rounded-lg">
          {tagPosts.length}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map(t => (
          <Link
            key={t}
            to={`/v2/tag/${t}`}
            className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg transition no-underline ${
              t === tag
                ? 'bg-octagon text-white'
                : 'bg-white/5 text-gray-500 hover:text-white hover:bg-white/10'
            }`}
          >
            {t}
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {tagPosts.map((post, i) => (
          <Link
            key={post.slug}
            to={`/v2/post/${post.slug}`}
            className={`group block v2-surface rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 v2-border-glow no-underline v2-reveal v2-reveal-delay-${Math.min(i + 1, 4)}`}
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{post.emoji}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-octagon transition leading-tight mb-1.5">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-2">{post.subtitle}</p>
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <span>{post.readTime}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-700" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
