import { useParams, Link, Navigate } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPost, posts } from '../content/posts'
import { useEffect, useState } from 'react'

function V2ShareBar({ slug, title, emoji }: { slug: string; title: string; emoji: string }) {
  const [copied, setCopied] = useState(false)
  const url = encodeURIComponent(`https://zuffabets.com/post/${slug}`)
  const text = encodeURIComponent(`${emoji} ${title} — ZuffaBets`)

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://zuffabets.com/post/${slug}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-600 font-medium uppercase tracking-wider">Share</span>
      <a href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-tap/20 text-gray-400 hover:text-tap px-3 py-1.5 rounded-lg text-xs font-bold transition no-underline">
        𝕏
      </a>
      <a href={`https://reddit.com/submit?url=${url}&title=${text}`} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-[#FF4500]/20 text-gray-400 hover:text-[#FF4500] px-3 py-1.5 rounded-lg text-xs font-bold transition no-underline">
        Reddit
      </a>
      <button onClick={handleCopy} className="bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition">
        {copied ? '✓ Copied' : 'Copy'}
      </button>
    </div>
  )
}

export default function V2Article() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
    if (post) {
      document.title = `${post.title} — ZuffaBets`
    }
    return () => { document.title = 'ZuffaBets — The Wildest MMA Blog on the Internet' }
  }, [slug, post])

  if (!post) return <Navigate to="/v2" replace />

  const currentIndex = posts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null

  return (
    <div>
      {/* Article Header — Full width dark */}
      <section className="border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-12">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-600 mb-8 v2-reveal">
            <Link to="/v2" className="hover:text-white transition no-underline text-gray-500">Home</Link>
            <span className="text-gray-700">/</span>
            <span className="text-gray-500 truncate">{post.title}</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4 v2-reveal">
            {post.tags.map(tag => (
              <Link key={tag} to={`/v2/tag/${tag}`} className="text-[10px] font-semibold uppercase tracking-wider text-octagon bg-octagon/10 hover:bg-octagon hover:text-white px-2.5 py-1 rounded transition no-underline">
                {tag}
              </Link>
            ))}
          </div>

          <span className="text-5xl md:text-6xl block mb-5 v2-reveal v2-reveal-delay-1">{post.emoji}</span>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.05] mb-4 v2-reveal v2-reveal-delay-2">
            {post.title}
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-6 v2-reveal v2-reveal-delay-3">{post.subtitle}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm v2-reveal v2-reveal-delay-4">
            <span className="text-white font-medium">{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span className="text-gray-500">{post.readTime} read</span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span className="text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>

          <div className="mt-6 v2-reveal v2-reveal-delay-4">
            <V2ShareBar slug={post.slug} title={post.title} emoji={post.emoji} />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <article className="prose prose-lg prose-invert max-w-none prose-headings:font-display prose-headings:text-white prose-headings:uppercase prose-p:text-gray-300 prose-a:text-tap prose-a:no-underline hover:prose-a:text-octagon prose-strong:text-octagon prose-blockquote:border-l-octagon prose-blockquote:bg-white/5 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:text-gray-400 prose-li:text-gray-300 prose-hr:border-white/10">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </article>

        {/* FightBets CTA */}
        <div className="my-10 v2-surface rounded-xl p-6 md:p-8 text-center v2-border-glow">
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src="/fightbets-logo.png" alt="FightBets" className="w-7 h-7 rounded-lg" loading="lazy" />
            <span className="font-display text-xs uppercase tracking-[0.2em] text-gold">From the ZuffaBets crew</span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">Think You Know Fights?</h3>
          <p className="text-gray-500 mb-5">0% fees. Powered by Polymarket. No middleman.</p>
          <a
            href="https://fightbets.com?source=zuffabets-v2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-octagon hover:bg-octagon-dark text-white px-6 py-2.5 rounded-lg font-bold text-sm transition no-underline"
          >
            Start Betting
          </a>
        </div>

        {/* Bottom Share */}
        <div className="pt-6 border-t border-white/5">
          <p className="text-sm text-gray-600 mb-3">Enjoyed this? Spread the word.</p>
          <V2ShareBar slug={post.slug} title={post.title} emoji={post.emoji} />
        </div>

        {/* Prev/Next */}
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {prevPost && (
            <Link to={`/v2/post/${prevPost.slug}`} className="v2-surface rounded-xl p-5 v2-border-glow no-underline group">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider">Previous</span>
              <p className="font-display text-lg font-bold text-white group-hover:text-octagon transition mt-1">
                {prevPost.emoji} {prevPost.title}
              </p>
            </Link>
          )}
          {nextPost && (
            <Link to={`/v2/post/${nextPost.slug}`} className="v2-surface rounded-xl p-5 v2-border-glow no-underline group md:text-right">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider">Next</span>
              <p className="font-display text-lg font-bold text-white group-hover:text-octagon transition mt-1">
                {nextPost.emoji} {nextPost.title}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
