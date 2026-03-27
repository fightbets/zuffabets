export default function V2About() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <span className="text-6xl block mb-5 v2-reveal">🥊</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3 v2-reveal v2-reveal-delay-1">
            ABOUT <span className="v2-text-gradient">ZUFFABETS</span>
          </h1>
          <p className="text-gray-400 text-xl v2-reveal v2-reveal-delay-2">The Wildest MMA Blog on the Internet</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-lg prose-invert max-w-none prose-headings:font-display prose-headings:text-white prose-headings:uppercase prose-p:text-gray-300 prose-strong:text-octagon prose-blockquote:border-l-octagon prose-blockquote:bg-white/5 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:text-gray-400 prose-li:text-gray-300 prose-a:text-tap">
          <h2>WTF is ZuffaBets?</h2>
          <p>
            <strong>ZuffaBets</strong> is a blog dedicated to the wild, ridiculous, and often unbelievable story of
            <strong> Zuffa LLC</strong> — the company that bought the UFC for $2 million in 2001 and turned it into a
            $4+ billion global empire.
          </p>
          <p>
            We write about the history, the business deals, the personalities, the fights, and the absolute chaos
            that made MMA what it is today. If you've ever wondered how a "banned sport" ended up on ESPN, you're
            in the right place.
          </p>

          <h2>Why "ZuffaBets"?</h2>
          <p>
            Because <em>zuffa</em> is Italian for "brawl," and the Fertittas' purchase of the UFC was the biggest
            bet in sports history. $2 million on a dying sport that was banned in 36 states. That's not an investment.
            That's a <strong>bet</strong>. And it paid off 200,000%.
          </p>

          <h2>Who Writes This?</h2>
          <p>
            MMA degenerates who've been watching fights since the TUF 1 era. We're not journalists. We're not
            affiliated with the UFC, Zuffa, or TKO Group Holdings. We're just fans who think the story of how
            MMA went mainstream is one of the wildest stories in sports — and it deserves to be told in a way
            that's actually fun to read.
          </p>

          <h2>The Rules</h2>
          <ul>
            <li><strong>No boring corporate analysis.</strong> We write like we talk at a bar.</li>
            <li><strong>Facts first, hot takes second.</strong> Everything is researched. The opinions are free.</li>
            <li><strong>No paywall.</strong> Everything is free. Always will be.</li>
            <li><strong>Share everything.</strong> If you like an article, share it. That's how we grow.</li>
          </ul>

          <blockquote>
            "We were either the smartest guys in the room, or the dumbest. Turns out we were the smartest."
            — Lorenzo Fertitta
          </blockquote>

          <h2>Want to Write for Us?</h2>
          <p>
            Got a wild Zuffa/UFC story you want to tell? A hot take so spicy it should come with a warning label?
            Hit us up on Twitter. If it's good enough, we'll publish it.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 v2-surface rounded-xl p-8 md:p-10 text-center v2-glow-red">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
            <span className="text-octagon">JOIN</span> <span className="text-gold">THE BRAWL</span>
          </h3>
          <p className="text-gray-500 mb-6">Follow us. Share us. Argue with us.</p>
          <div className="flex justify-center gap-3">
            <a href="https://twitter.com/zuffabets" target="_blank" rel="noopener noreferrer" className="v2-surface-raised hover:bg-tap/10 hover:border-tap/30 text-gray-300 hover:text-tap px-6 py-3 rounded-lg font-bold text-sm transition no-underline">
              Twitter/X
            </a>
            <a href="https://instagram.com/zuffabets" target="_blank" rel="noopener noreferrer" className="bg-octagon hover:bg-octagon-dark text-white px-6 py-3 rounded-lg font-bold text-sm transition no-underline">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
