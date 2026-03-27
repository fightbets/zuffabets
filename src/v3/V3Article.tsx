import { useParams, Link, Navigate } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPost, posts } from '../content/posts'
import { useEffect, useState } from 'react'

function ShareBar({ slug, title, emoji }: { slug: string; title: string; emoji: string }) {
  const [copied, setCopied] = useState(false)
  const url = encodeURIComponent(`https://zuffabets.com/post/${slug}`)
  const text = encodeURIComponent(`${emoji} ${title} — ZuffaBets`)
  const handleCopy = () => { navigator.clipboard.writeText(`https://zuffabets.com/post/${slug}`); setCopied(true); setTimeout(() => setCopied(false), 2000) }
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Share</span>
      <a href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`} target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-tap/10 text-gray-500 hover:text-tap px-3 py-1.5 rounded text-xs font-bold transition no-underline">𝕏</a>
      <a href={`https://reddit.com/submit?url=${url}&title=${text}`} target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-orange-50 text-gray-500 hover:text-[#FF4500] px-3 py-1.5 rounded text-xs font-bold transition no-underline">Reddit</a>
      <button onClick={handleCopy} className="bg-gray-100 hover:bg-gray-200 text-gray-500 px-3 py-1.5 rounded text-xs font-bold transition">{copied ? '✓ Copied' : 'Copy'}</button>
    </div>
  )
}

export default function V3Article() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined
  useEffect(() => { window.scrollTo(0, 0); if (post) document.title = `${post.title} — ZuffaBets`; return () => { document.title = 'ZuffaBets — The Wildest MMA Blog on the Internet' } }, [slug, post])
  if (!post) return <Navigate to="/v3" replace />
  const currentIndex = posts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/v3" className="hover:text-gold-dark transition no-underline text-gray-500">Home</Link>
        <span>/</span>
        <span className="text-gray-600 truncate">{post.title}</span>
      </nav>

      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map(tag => (
            <Link key={tag} to={`/v3/tag/${tag}`} className="text-[10px] font-bold uppercase tracking-wider text-gold-dark bg-gold/10 hover:bg-gold hover:text-white px-2.5 py-1 rounded transition no-underline">{tag}</Link>
          ))}
        </div>
        <span className="text-5xl block mb-4">{post.emoji}</span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-corner leading-tight mb-3">{post.title}</h1>
        <p className="text-xl text-gray-500 mb-4">{post.subtitle}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="font-medium text-gray-600">{post.author}</span>
          <span>·</span>
          <span>{post.readTime} read</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <ShareBar slug={post.slug} title={post.title} emoji={post.emoji} />
      </header>

      <div className="h-px bg-gradient-to-r from-gold via-gold-dark to-transparent mb-8" />

      <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-corner prose-headings:uppercase prose-p:text-corner prose-a:text-tap hover:prose-a:text-gold-dark prose-strong:text-gold-dark prose-blockquote:border-l-gold prose-blockquote:bg-gold/5 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6">
        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
      </article>

      <div className="my-8 v3-card v3-gold-top rounded-lg p-6 md:p-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <img src="/fightbets-logo.png" alt="FightBets" className="w-7 h-7 rounded-lg" loading="lazy" />
          <span className="font-display text-xs uppercase tracking-[0.2em] text-gold-dark">From the ZuffaBets crew</span>
        </div>
        <h3 className="font-display text-2xl font-bold text-corner mb-2">Think You Know Fights?</h3>
        <p className="text-gray-500 mb-4">0% fees. Powered by Polymarket.</p>
        <a href="https://fightbets.com?source=zuffabets-v3" target="_blank" rel="noopener noreferrer" className="inline-block bg-gold hover:bg-gold-dark text-white px-6 py-2.5 rounded font-bold text-sm transition no-underline">Start Betting</a>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-3">Enjoyed this? Spread the word.</p>
        <ShareBar slug={post.slug} title={post.title} emoji={post.emoji} />
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {prevPost && (
          <Link to={`/v3/post/${prevPost.slug}`} className="v3-card v3-gold-bar rounded-lg p-5 no-underline group">
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Previous</span>
            <p className="v3-headline text-lg mt-1 group-hover:text-gold-dark transition">{prevPost.emoji} {prevPost.title}</p>
          </Link>
        )}
        {nextPost && (
          <Link to={`/v3/post/${nextPost.slug}`} className="v3-card v3-gold-bar rounded-lg p-5 no-underline group md:text-right">
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Next</span>
            <p className="v3-headline text-lg mt-1 group-hover:text-gold-dark transition">{nextPost.emoji} {nextPost.title}</p>
          </Link>
        )}
      </div>
    </div>
  )
}
