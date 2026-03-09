import type { Post } from '../content/posts'

export default function ShareBar({ post }: { post: Post }) {
  const url = encodeURIComponent(`https://zuffabets.com/post/${post.slug}`)
  const text = encodeURIComponent(`${post.emoji} ${post.title} — ZuffaBets`)

  const shares = [
    {
      name: 'Twitter',
      color: 'bg-[#1DA1F2] hover:bg-[#0d8ed9]',
      href: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      icon: '𝕏',
    },
    {
      name: 'Reddit',
      color: 'bg-[#FF4500] hover:bg-[#e03d00]',
      href: `https://reddit.com/submit?url=${url}&title=${text}`,
      icon: '📡',
    },
    {
      name: 'Copy',
      color: 'bg-gray-700 hover:bg-gray-600',
      href: '#',
      icon: '📋',
      onClick: () => {
        navigator.clipboard.writeText(`https://zuffabets.com/post/${post.slug}`)
        alert('Link copied!')
      },
    },
  ]

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Share:</span>
      {shares.map(s => (
        <a
          key={s.name}
          href={s.href}
          target={s.onClick ? undefined : '_blank'}
          rel={s.onClick ? undefined : 'noopener noreferrer'}
          onClick={s.onClick ? (e) => { e.preventDefault(); s.onClick() } : undefined}
          className={`${s.color} text-white px-3 py-1.5 rounded-full text-xs font-bold transition inline-flex items-center gap-1 no-underline`}
        >
          {s.icon} {s.name}
        </a>
      ))}
    </div>
  )
}
