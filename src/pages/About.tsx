import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-octagon transition">Home</Link>
        <span>/</span>
        <span className="text-gray-600">About</span>
      </nav>

      <div className="text-center mb-10">
        <span className="text-6xl block mb-4">🥊</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-canvas mb-3">
          ABOUT <span className="text-octagon">ZUFFA</span><span className="text-gold">BETS</span>
        </h1>
        <p className="text-xl text-gray-500">Boxing stories, business & culture</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>WTF is ZuffaBets?</h2>
        <p>
          <strong>ZuffaBets</strong> is a blog dedicated to the wild, ridiculous, and often unbelievable story of
          <strong> Zuffa LLC</strong> — the company that bought the UFC for $2 million in 2001 and turned it into a
          $4+ billion global empire.
        </p>
        <p>
          We write about the history, business deals, personalities, and fight-night chaos around
          <strong> Zuffa Boxing</strong> and modern boxing culture. If you've ever wondered how the Zuffa playbook
          is reshaping the ring, you're in the right place.
        </p>

        <h2>Why "ZuffaBets"?</h2>
        <p>
          Because <em>zuffa</em> is Italian for "brawl," and the Fertittas' purchase of the UFC was the biggest
          bet in sports history. $2 million on a dying sport that was banned in 36 states. That's not an investment.
          That's a <strong>bet</strong>. And it paid off 200,000%.
        </p>

        <h2>Who Writes This?</h2>
        <p>
          Boxing degenerates who've been watching fights forever. We're not journalists. We're not
          affiliated with the UFC, Zuffa, or TKO Group Holdings. We're just fans who think boxing's business
          and cultural story deserves to be told in a way that's actually fun to read.
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

      <div className="mt-10 bg-canvas rounded-2xl p-8 text-center text-white">
        <h3 className="font-display text-2xl font-bold mb-3">
          <span className="text-octagon">JOIN</span>{' '}
          <span className="text-gold">THE BRAWL</span>
        </h3>
        <p className="text-gray-400 mb-4">Follow us. Share us. Argue with us.</p>
        <div className="flex justify-center gap-3">
          <a href="#" className="bg-tap hover:bg-tap/80 text-white px-5 py-2.5 rounded-full font-bold text-sm transition no-underline">
            Twitter/X
          </a>
          <a href="#" className="bg-gold hover:bg-gold-dark text-canvas px-5 py-2.5 rounded-full font-bold text-sm transition no-underline">
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}
