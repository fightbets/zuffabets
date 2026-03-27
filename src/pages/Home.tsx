import { posts } from '../content/posts'
import ArticleCard from '../components/ArticleCard'
import FightBetsPromo from '../components/FightBetsPromo'
import TickerTape from '../components/TickerTape'

export default function Home() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)
  const firstHalf = rest.slice(0, 3)
  const secondHalf = rest.slice(3)

  const totalReadTime = posts.reduce((acc, p) => {
    const mins = parseInt(p.readTime) || 5
    return acc + mins
  }, 0)

  return (
    <>
      {/* Ticker tape banner */}
      <TickerTape />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero / Featured */}
        {featured && (
          <section className="mb-12">
            <ArticleCard post={featured} featured />
          </section>
        )}

        {/* Engagement stats bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-10 py-4 px-6 bg-white/60 rounded-xl border border-gray-100">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-display text-2xl font-bold text-canvas">{posts.length}</span>
            <span className="text-gray-500 uppercase text-xs tracking-wide font-medium">Articles</span>
          </div>
          <span className="w-px h-6 bg-gray-200" aria-hidden="true" />
          <div className="flex items-center gap-2 text-sm">
            <span className="font-display text-2xl font-bold text-octagon">{totalReadTime}</span>
            <span className="text-gray-500 uppercase text-xs tracking-wide font-medium">Min Reading</span>
          </div>
          <span className="w-px h-6 bg-gray-200 hidden md:block" aria-hidden="true" />
          <div className="hidden md:flex items-center gap-2 text-sm">
            <span className="font-display text-2xl font-bold text-gold">2024</span>
            <span className="text-gray-500 uppercase text-xs tracking-wide font-medium">Est.</span>
          </div>
        </div>

        {/* Latest Articles -- first batch */}
        <section>
          <div className="section-divider mb-8">
            <h2 className="font-display text-2xl font-bold text-canvas uppercase">Latest Articles</h2>
          </div>
          <div className="grid gap-5 stagger-children">
            {firstHalf.map(post => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* FightBets Promo -- inline between articles */}
        <section className="my-8">
          <FightBetsPromo variant="inline" />
        </section>

        {/* More Articles */}
        {secondHalf.length > 0 && (
          <section>
            <div className="grid gap-5 stagger-children">
              {secondHalf.map(post => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* FightBets Banner CTA */}
        <section className="mt-14">
          <FightBetsPromo variant="banner" />
        </section>
      </div>
    </>
  )
}
