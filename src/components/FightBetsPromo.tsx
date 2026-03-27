import { useState } from 'react'

const FIGHTBETS_URL = 'https://fightbets.com?source=zuffabets'

const taglines = [
  "Back your take or stay quiet.",
  "Talk is cheap. Bets aren't. (Well, ours are — 0% fees.)",
  "Your couch commentary means nothing without skin in the game.",
  "Everyone's a fight expert until money's on the line.",
  "Put your USDC where your mouth is.",
  "0% fees. 100% degeneracy.",
  "If you're not betting, you're just watching TV.",
  "Armchair analysts don't get paid. Bettors do.",
]

function FBLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'w-6 h-6', md: 'w-8 h-8', lg: 'w-10 h-10' }
  return <img src="/fightbets-logo.png" alt="FightBets" loading="lazy" className={`${sizes[size]} rounded-lg`} />
}

export default function FightBetsPromo({ variant = 'banner' }: { variant?: 'banner' | 'inline' | 'article' }) {
  const [tagline] = useState(() => taglines[Math.floor(Math.random() * taglines.length)])

  if (variant === 'article') {
    return (
      <div className="my-8 bg-gradient-to-r from-canvas via-[#1a1a2e] to-canvas rounded-xl p-6 text-center border border-gray-800">
        <div className="flex items-center justify-center gap-2 mb-2">
          <FBLogo size="md" />
          <p className="text-gold font-display text-sm uppercase tracking-widest">From the ZuffaBets crew</p>
        </div>
        <h3 className="text-white font-display text-2xl md:text-3xl font-bold mb-2">
          Think You Know Fights?
        </h3>
        <p className="text-gray-400 text-lg mb-1 italic">"{tagline}"</p>
        <p className="text-gray-500 text-sm mb-4">
          Bet on MMA with <span className="text-octagon font-bold">0% fees</span> on FightBets. Powered by Polymarket. No middleman. No BS.
        </p>
        <a
          href={FIGHTBETS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-octagon hover:bg-octagon-dark text-white px-6 py-2.5 rounded-full font-bold text-sm transition no-underline"
        >
          <FBLogo size="sm" />
          Start Betting — It's Free
        </a>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className="bg-white rounded-xl p-5 border-2 border-dashed border-octagon/30 animate-pulse-border">
        <div className="flex items-center gap-4">
          <FBLogo size="lg" />
          <div className="flex-1">
            <p className="font-display text-lg font-bold text-canvas mb-0.5">
              Done reading? Start betting.
            </p>
            <p className="text-gray-500 text-sm mb-2">{tagline}</p>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href={FIGHTBETS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-octagon hover:bg-octagon-dark text-white px-4 py-1.5 rounded-full font-bold text-xs transition no-underline"
              >
                <FBLogo size="sm" />
                Bet on FightBets
              </a>
              <span className="text-xs text-gray-400">0% fees · Polymarket · USDC</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // banner (default) — big CTA for homepage
  return (
    <div className="relative overflow-hidden bg-canvas rounded-2xl p-8 md:p-10 text-center animate-pulse-red">
      {/* Floating decorative octagons */}
      <div
        className="absolute -top-10 -right-10 w-40 h-40 border-4 border-octagon/10 rotate-45 rounded-lg animate-float-slow pointer-events-none"
        style={{ '--float-rotate': '45deg' } as React.CSSProperties}
      />
      <div
        className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-gold/10 rotate-12 rounded-lg animate-float-slow pointer-events-none"
        style={{ '--float-rotate': '12deg', animationDelay: '1s' } as React.CSSProperties}
      />
      <div className="relative z-10">
        <p className="text-gold font-display text-xs uppercase tracking-[0.2em] mb-2">Presented by</p>
        <div className="flex items-center justify-center gap-3 mb-3">
          <FBLogo size="lg" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            FIGHT<span className="text-octagon">BETS</span>
          </h2>
        </div>
        <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto mb-2">
          {tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-6">
          <span className="flex items-center gap-1">
            <span className="text-green-400">&#10003;</span> 0% Fees
          </span>
          <span className="flex items-center gap-1">
            <span className="text-green-400">&#10003;</span> Powered by Polymarket
          </span>
          <span className="flex items-center gap-1">
            <span className="text-green-400">&#10003;</span> Bet with USDC
          </span>
          <span className="flex items-center gap-1">
            <span className="text-green-400">&#10003;</span> No KYC Hassle
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={FIGHTBETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 animate-glow-cta bg-octagon hover:bg-octagon-dark text-white px-8 py-3 rounded-full font-bold text-sm transition no-underline"
          >
            <FBLogo size="sm" />
            Start Betting — 0% Fees
          </a>
          <a
            href={FIGHTBETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-bold text-sm transition no-underline"
          >
            Browse MMA Markets
          </a>
        </div>
        <p className="text-gray-600 text-xs mt-4">
          Not financial advice. Just fight advice. Which is worse. 🥊
        </p>
      </div>
    </div>
  )
}
