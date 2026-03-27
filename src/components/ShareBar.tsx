import { useState } from 'react'
import type { Post } from '../content/posts'

export default function ShareBar({ post }: { post: Post }) {
  const [copied, setCopied] = useState(false)
  const url = encodeURIComponent(`https://zuffabets.com/post/${post.slug}`)
  const text = encodeURIComponent(`${post.emoji} ${post.title} — ZuffaBets`)

  const shares = [
    {
      name: 'Twitter',
      color: 'bg-tap hover:bg-tap/80',
      href: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      icon: '𝕏',
    },
    {
      name: 'Reddit',
      color: 'bg-[#FF4500] hover:bg-[#e03d00]',
      href: `https://reddit.com/submit?url=${url}&title=${text}`,
      icon: '📡',
    },
  ]

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(`https://zuffabets.com/post/${post.slug}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Share:</span>
      {shares.map(s => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.color} text-white px-3 py-1.5 rounded-full text-xs font-bold transition inline-flex items-center gap-1 no-underline`}
        >
          {s.icon} {s.name}
        </a>
      ))}
      <button
        onClick={handleCopy}
        className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded-full text-xs font-bold transition inline-flex items-center gap-1"
      >
        {copied ? '✓ Copied!' : '📋 Copy'}
      </button>
    </div>
  )
}
