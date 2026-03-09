import { posts } from '../content/posts'
import ArticleCard from '../components/ArticleCard'

export default function Home() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero / Featured */}
      {featured && (
        <section className="mb-10">
          <ArticleCard post={featured} featured />
        </section>
      )}

      {/* Latest Articles */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="font-display text-2xl font-bold text-canvas uppercase">Latest Articles</h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="grid gap-4">
          {rest.map(post => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mt-12 bg-canvas rounded-2xl p-8 text-center text-white">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
          <span className="text-octagon">THIS IS</span>{' '}
          <span className="text-gold">ZUFFABETS</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Hot takes. Deep history. The wildest stories from the company that
          turned two drunk guys in a cage into a $12 billion empire.
        </p>
        <div className="flex justify-center gap-3">
          <a
            href="https://twitter.com/intent/tweet?text=Check%20out%20ZuffaBets%20🥊%20The%20wildest%20MMA%20blog&url=https://zuffabets.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-octagon hover:bg-octagon-dark text-white px-6 py-3 rounded-full font-bold text-sm transition no-underline"
          >
            Share on Twitter 🔥
          </a>
          <a
            href="https://reddit.com/submit?url=https://zuffabets.com&title=ZuffaBets%20-%20The%20Wildest%20MMA%20Blog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-bold text-sm transition no-underline"
          >
            Post on Reddit 📡
          </a>
        </div>
      </section>
    </div>
  )
}
