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
      <a href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 text-gray-400 hover:text-tap px-3 py-1.5 rounded text-xs font-bold transition no-underline">𝕏</a>
      <a href={`https://reddit.com/submit?url=${url}&title=${text}`} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 text-gray-400 hover:text-[#FF4500] px-3 py-1.5 rounded text-xs font-bold transition no-underline">Reddit</a>
      <button onClick={handleCopy} className="bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white px-3 py-1.5 rounded text-xs font-bold transition">{copied ? '✓ Copied' : 'Copy'}</button>
    </div>
  )
}

export default function V4Article() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined
  useEffect(() => { window.scrollTo(0, 0); if (post) document.title = `${post.title} — ZuffaBets`; return () => { document.title = 'ZuffaBets' } }, [slug, post])
  if (!post) return <Navigate to="/v4" replace />
  const currentIndex = posts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null

  return (
    <div>
      {/* Hero banner */}
      <div className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[16rem] opacity-[0.06] select-none">{post.emoji}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pb-8 w-full">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map(tag => (
              <Link key={tag} to={`/v4/tag/${tag}`} className="v4-tag no-underline">{tag}</Link>
            ))}
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.05] mb-3">{post.title}</h1>
          <p className="text-gray-400 text-lg mb-4">{post.subtitle}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="text-white font-medium">{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>{post.readTime} read</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <ShareBar slug={post.slug} title={post.title} emoji={post.emoji} />
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <article className="prose prose-lg prose-invert max-w-none prose-headings:font-display prose-headings:text-white prose-headings:uppercase prose-p:text-gray-300 prose-a:text-tap prose-a:no-underline hover:prose-a:text-octagon prose-strong:text-octagon prose-blockquote:border-l-octagon prose-blockquote:bg-white/5 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:text-gray-400 prose-li:text-gray-300">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </article>

        <div className="my-10 bg-[#181818] rounded-lg p-6 md:p-8 text-center border border-white/5">
          <img src="/fightbets-logo.png" alt="FightBets" className="w-10 h-10 rounded-lg mx-auto mb-3" loading="lazy" />
          <h3 className="font-display text-2xl font-bold text-white mb-2">Think You Know Fights?</h3>
          <p className="text-gray-500 mb-4">0% fees. Powered by Polymarket.</p>
          <a href="https://fightbets.com?source=zuffabets-v4" target="_blank" rel="noopener noreferrer" className="inline-block bg-octagon hover:bg-octagon-dark text-white px-6 py-2.5 rounded font-bold text-sm transition no-underline">Start Betting</a>
        </div>

        <div className="pt-6 border-t border-white/5">
          <p className="text-sm text-gray-600 mb-3">Enjoyed this?</p>
          <ShareBar slug={post.slug} title={post.title} emoji={post.emoji} />
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {prevPost && (
            <Link to={`/v4/post/${prevPost.slug}`} className="bg-[#181818] rounded-lg p-5 border border-white/5 hover:border-octagon/30 transition no-underline group">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider">Previous</span>
              <p className="font-display text-lg font-bold text-white group-hover:text-octagon transition mt-1">{prevPost.emoji} {prevPost.title}</p>
            </Link>
          )}
          {nextPost && (
            <Link to={`/v4/post/${nextPost.slug}`} className="bg-[#181818] rounded-lg p-5 border border-white/5 hover:border-octagon/30 transition no-underline group md:text-right">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider">Next</span>
              <p className="font-display text-lg font-bold text-white group-hover:text-octagon transition mt-1">{nextPost.emoji} {nextPost.title}</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
