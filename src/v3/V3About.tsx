import { Link } from 'react-router-dom'

export default function V3About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/v3" className="hover:text-gold-dark transition no-underline text-gray-500">Home</Link>
        <span>/</span>
        <span className="text-gray-600">About</span>
      </nav>

      <div className="text-center mb-10">
        <span className="text-6xl block mb-4">🥊</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-corner mb-3">
          ABOUT <span className="text-gold">ZUFFA</span><span className="text-gold-dark">BETS</span>
        </h1>
        <p className="text-xl text-gray-500">The Wildest MMA Blog on the Internet</p>
      </div>

      <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-corner prose-headings:uppercase prose-strong:text-gold-dark prose-blockquote:border-l-gold prose-blockquote:bg-gold/5 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-a:text-tap">
        <h2>WTF is ZuffaBets?</h2>
        <p><strong>ZuffaBets</strong> is a blog dedicated to the wild, ridiculous, and often unbelievable story of <strong>Zuffa LLC</strong> — the company that bought the UFC for $2 million in 2001 and turned it into a $4+ billion global empire.</p>
        <p>We write about the history, the business deals, the personalities, the fights, and the absolute chaos that made MMA what it is today.</p>
        <h2>Why "ZuffaBets"?</h2>
        <p>Because <em>zuffa</em> is Italian for "brawl," and the Fertittas' purchase of the UFC was the biggest bet in sports history. $2 million on a dying sport banned in 36 states. That's a <strong>bet</strong>. And it paid off 200,000%.</p>
        <h2>Who Writes This?</h2>
        <p>MMA degenerates who've been watching fights since the TUF 1 era. Not journalists. Not affiliated with UFC or TKO Group Holdings. Just fans who think this story deserves to be told in a way that's actually fun to read.</p>
        <h2>The Rules</h2>
        <ul>
          <li><strong>No boring corporate analysis.</strong> We write like we talk at a bar.</li>
          <li><strong>Facts first, hot takes second.</strong> Everything is researched.</li>
          <li><strong>No paywall.</strong> Everything is free. Always will be.</li>
          <li><strong>Share everything.</strong> That's how we grow.</li>
        </ul>
        <blockquote>"We were either the smartest guys in the room, or the dumbest. Turns out we were the smartest." — Lorenzo Fertitta</blockquote>
        <h2>Want to Write for Us?</h2>
        <p>Got a wild Zuffa/UFC story? Hit us up on Twitter.</p>
      </div>

      <div className="mt-10 bg-canvas rounded-lg p-8 text-center text-white">
        <h3 className="font-display text-2xl font-bold mb-3"><span className="text-gold">JOIN</span> THE BRAWL</h3>
        <p className="text-gray-400 mb-4">Follow us. Share us. Argue with us.</p>
        <div className="flex justify-center gap-3">
          <a href="https://twitter.com/zuffabets" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-tap text-white px-5 py-2.5 rounded font-bold text-sm transition no-underline">Twitter/X</a>
          <a href="https://instagram.com/zuffabets" target="_blank" rel="noopener noreferrer" className="bg-gold hover:bg-gold-dark text-white px-5 py-2.5 rounded font-bold text-sm transition no-underline">Instagram</a>
        </div>
      </div>
    </div>
  )
}
