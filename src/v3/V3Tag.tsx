import { useParams, Link, Navigate } from 'react-router-dom'
import { getPostsByTag, getAllTags } from '../content/posts'

export default function V3Tag() {
  const { tag } = useParams<{ tag: string }>()
  const allTags = getAllTags()
  if (!tag || !allTags.includes(tag)) return <Navigate to="/v3" replace />
  const tagPosts = getPostsByTag(tag)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/v3" className="hover:text-gold-dark transition no-underline text-gray-500">Home</Link>
        <span>/</span>
        <span className="text-gray-600">Tag: {tag}</span>
      </nav>

      <div className="flex items-center gap-4 mb-6">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-corner uppercase">#{tag}</h1>
        <span className="bg-gold/15 text-gold-dark text-sm font-bold px-3 py-1 rounded">{tagPosts.length}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map(t => (
          <Link key={t} to={`/v3/tag/${t}`} className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded transition no-underline ${t === tag ? 'bg-gold text-white' : 'bg-gray-200 text-gray-600 hover:text-gold-dark hover:bg-gold/10'}`}>{t}</Link>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {tagPosts.map(post => (
          <Link key={post.slug} to={`/v3/post/${post.slug}`} className="block no-underline group">
            <article className="v3-card v3-gold-bar rounded-lg p-5 h-full">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{post.emoji}</span>
                <div className="min-w-0">
                  <h3 className="v3-headline text-lg mb-1 group-hover:text-gold-dark transition">{post.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-2">{post.subtitle}</p>
                  <div className="v3-meta">
                    <span>{post.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
