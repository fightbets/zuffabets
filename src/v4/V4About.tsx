
export default function V4About() {
  return (
    <div className="pt-20">
      <div className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[16rem] opacity-[0.06] select-none">🥊</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pb-8 w-full text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3">ABOUT <span className="text-octagon">ZUFFABETS</span></h1>
          <p className="text-gray-400 text-xl">The Wildest MMA Blog on the Internet</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-lg prose-invert max-w-none prose-headings:font-display prose-headings:text-white prose-headings:uppercase prose-p:text-gray-300 prose-strong:text-octagon prose-blockquote:border-l-octagon prose-blockquote:bg-white/5 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:text-gray-400 prose-li:text-gray-300 prose-a:text-tap">
          <h2>WTF is ZuffaBets?</h2>
          <p><strong>ZuffaBets</strong> is a blog dedicated to the wild, ridiculous, and often unbelievable story of <strong>Zuffa LLC</strong> — the company that bought the UFC for $2 million in 2001 and turned it into a $4+ billion global empire.</p>
          <p>We write about the history, the business deals, the personalities, the fights, and the absolute chaos that made MMA what it is today.</p>
          <h2>Why "ZuffaBets"?</h2>
          <p>Because <em>zuffa</em> is Italian for "brawl," and the Fertittas' purchase of the UFC was the biggest bet in sports history. $2 million on a dying sport banned in 36 states. That's a <strong>bet</strong>. And it paid off 200,000%.</p>
          <h2>Who Writes This?</h2>
          <p>MMA degenerates who've been watching fights since the TUF 1 era. Not journalists. Not affiliated with UFC or TKO Group Holdings. Just fans who think this story deserves to be told in a way that's fun to read.</p>
          <h2>The Rules</h2>
          <ul>
            <li><strong>No boring corporate analysis.</strong> We write like we talk at a bar.</li>
            <li><strong>Facts first, hot takes second.</strong> Everything is researched.</li>
            <li><strong>No paywall.</strong> Everything is free. Always will be.</li>
            <li><strong>Share everything.</strong> That's how we grow.</li>
          </ul>
          <blockquote>"We were either the smartest guys in the room, or the dumbest. Turns out we were the smartest." — Lorenzo Fertitta</blockquote>
        </div>

        <div className="mt-12 bg-[#181818] rounded-lg p-8 text-center border border-white/5">
          <h3 className="font-display text-2xl font-bold text-white mb-3"><span className="text-octagon">JOIN</span> <span className="text-gold">THE BRAWL</span></h3>
          <p className="text-gray-500 mb-6">Follow us. Share us. Argue with us.</p>
          <div className="flex justify-center gap-3">
            <a href="https://twitter.com/zuffabets" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-tap/20 text-gray-300 hover:text-tap px-6 py-3 rounded font-bold text-sm transition no-underline">Twitter/X</a>
            <a href="https://instagram.com/zuffabets" target="_blank" rel="noopener noreferrer" className="bg-octagon hover:bg-octagon-dark text-white px-6 py-3 rounded font-bold text-sm transition no-underline">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  )
}
