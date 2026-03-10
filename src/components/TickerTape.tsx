const headlines = [
  '🥊 ZUFFA BOXING IS HERE',
  'CANELO VS CRAWFORD',
  'THE $4B EMPIRE KEEPS GROWING',
  'DANA WHITE MEANS BUSINESS',
  '0% FEES ON FIGHTBETS',
  'BOXING PREDICTIONS ARE LIVE',
  'BET WITH YOUR BRAIN NOT YOUR HEART',
]

export default function TickerTape() {
  const separator = ' · '
  const fullText = headlines.join(separator) + separator

  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-track">
        {/* Two copies for seamless loop */}
        {[0, 1].map(i => (
          <span
            key={i}
            className="inline-block font-display text-xs tracking-widest uppercase py-1.5 px-2 text-gray-500"
          >
            {fullText}
          </span>
        ))}
      </div>
    </div>
  )
}
