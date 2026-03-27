import { useParams, Link, Navigate } from 'react-router-dom'
import { getPostsByTag, getAllTags } from '../content/posts'

export default function V4Tag() {
  const { tag } = useParams<{ tag: string }>()
  const allTags = getAllTags()
  if (!tag || !allTags.includes(tag)) return <Navigate to="/v4" replace />
  const tagPosts = getPostsByTag(tag)

  return (
    <div className="pt-20 max-w-[1400px] mx-auto px-4 sm:px-8 py-8">
      <h1 className="font-display text-3xl md:text-5xl font-bold text-white uppercase mb-6">#{tag}</h1>
      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map(t => (
          <Link key={t} to={`/v4/tag/${t}`} className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded transition no-underline ${t === tag ? 'bg-octagon text-white' : 'bg-white/5 text-gray-500 hover:text-white hover:bg-white/10'}`}>{t}</Link>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tagPosts.map(post => (
          <Link key={post.slug} to={`/v4/post/${post.slug}`} className="block no-underline group">
            <div className="v4-card">
              <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] aspect-[4/3] flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{post.emoji}</span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-sm font-bold text-white leading-snug mb-1 group-hover:text-octagon transition">{post.title}</h3>
                <p className="text-gray-500 text-xs line-clamp-2 mb-2">{post.subtitle}</p>
                <div className="text-[11px] text-gray-600">{post.readTime} read</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
