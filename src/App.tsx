import filmStrip from './assets/film-strip.jpg'

const panels = [
  { label: 'Psychotherapy', href: 'https://robromano.com/' },
  { label: 'Coaching', href: 'https://coaching.robromano.com' },
  { label: 'Retreats', href: 'https://retreats.robromano.com' },
  { label: 'YouTube', href: 'https://youtube.robromano.com' },
]

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 py-12 sm:py-16">
      {/* Site Name — Cormorant Garamond Light, lowercase, luminous */}
      <h1
        className="text-white text-3xl sm:text-4xl md:text-5xl tracking-[0.2em] lowercase font-light mb-10 sm:mb-14 animate-[fadeIn_1.2s_ease-out]"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          textShadow: '0 0 30px rgba(255,255,255,0.2), 0 0 60px rgba(255,255,255,0.06)',
        }}
      >
        insight.foundation
      </h1>

      {/* Filmstrip with Clickable Overlays — fade in second with glow */}
      <div
        className="relative w-full max-w-4xl mx-auto animate-[fadeIn_1.4s_ease-out_0.3s_both]"
        style={{ filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.08)) drop-shadow(0 0 60px rgba(255,255,255,0.04))' }}
      >
        <img
          src={filmStrip}
          alt="insight.foundation — Psychotherapy, Coaching, Retreats, YouTube Channel"
          className="w-full h-auto block"
        />
        {/* Bottom border: 1px black gap + 1.5px white line to mirror the image's top edge */}
        <div className="h-[1px] bg-black w-full" />
        <div className="h-[1.5px] bg-white w-full" />
        {/* Clickable overlay grid — 4 equal columns over the image */}
        <div className="absolute inset-0 grid grid-cols-4">
          {panels.map((panel) => (
            <a
              key={panel.label}
              href={panel.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={panel.label}
              className="block transition-all duration-300 hover:bg-white/10 hover:backdrop-brightness-110"
            />
          ))}
        </div>
      </div>

      {/* Tagline — Cormorant Garamond Italic, single line */}
      <p
        className="text-white/85 text-xl sm:text-2xl md:text-3xl tracking-wide font-medium mt-10 sm:mt-14 text-center animate-[fadeIn_1.2s_ease-out_0.8s_both]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        See yourself clearly. Live your life fully. Insight is foundational.
      </p>

      {/* Schedule Link — Inter, small, quiet */}
      <a
        href="https://schedule.robromano.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/35 hover:text-white/60 text-xs sm:text-sm tracking-[0.15em] mt-8 transition-colors duration-300 font-sans animate-[fadeIn_1s_ease-out_1.2s_both]"
      >
        Schedule a conversation
      </a>
    </div>
  )
}

export default App
