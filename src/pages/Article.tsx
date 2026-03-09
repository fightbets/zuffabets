import { useParams, Link, Navigate } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPost, posts } from '../content/posts'
import ShareBar from '../components/ShareBar'
import FightBetsPromo from '../components/FightBetsPromo'
import { useEffect } from 'react'

export default function Article() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
    if (post) {
      document.title = `${post.title} — ZuffaBets`
      document.querySelector('meta[name="description"]')?.setAttribute('content', post.subtitle)
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', `${post.title} — ZuffaBets`)
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', post.subtitle)
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://zuffabets.com/post/${post.slug}`)
      document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', `${post.title} — ZuffaBets`)
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', post.subtitle)
    }
    return () => {
      document.title = 'ZuffaBets — The Wildest MMA Blog on the Internet'
    }
  }, [slug, post])

  if (!post) return <Navigate to="/" replace />

  const currentIndex = posts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-octagon transition">Home</Link>
        <span>/</span>
        <span className="text-gray-600 truncate">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map(tag => (
            <Link key={tag} to={`/tag/${tag}`} className="tag bg-octagon/10 text-octagon hover:bg-octagon hover:text-white transition no-underline">
              {tag}
            </Link>
          ))}
        </div>
        <span className="text-5xl block mb-4">{post.emoji}</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-canvas leading-tight mb-3">
          {post.title}
        </h1>
        <p className="text-xl text-gray-500 mb-4">{post.subtitle}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="font-medium text-gray-600">{post.author}</span>
          <span>·</span>
          <span>{post.readTime} read</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <ShareBar post={post} />
      </header>

      <hr className="border-gray-200 mb-8" />

      {/* Content */}
      <article className="prose prose-lg max-w-none prose-headings:text-canvas prose-p:text-corner">
        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
      </article>

      {/* FightBets Promo */}
      <FightBetsPromo variant="article" />

      {/* Bottom Share */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-3 font-medium">Enjoyed this? Spread the word.</p>
        <ShareBar post={post} />
      </div>

      {/* Prev/Next Navigation */}
      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {prevPost && (
          <Link to={`/post/${prevPost.slug}`} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-octagon transition no-underline group">
            <span className="text-xs text-gray-400 uppercase tracking-wider">Previous</span>
            <p className="font-display text-lg font-bold text-canvas group-hover:text-octagon transition mt-1">
              {prevPost.emoji} {prevPost.title}
            </p>
          </Link>
        )}
        {nextPost && (
          <Link to={`/post/${nextPost.slug}`} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-octagon transition no-underline group md:text-right">
            <span className="text-xs text-gray-400 uppercase tracking-wider">Next</span>
            <p className="font-display text-lg font-bold text-canvas group-hover:text-octagon transition mt-1">
              {nextPost.emoji} {nextPost.title}
            </p>
          </Link>
        )}
      </div>
    </div>
  )
}
