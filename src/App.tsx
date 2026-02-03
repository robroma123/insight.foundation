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
      {/* Site Name */}
      <h1 className="text-white/90 text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase font-light mb-10 sm:mb-14 font-sans">
        insight.foundation
      </h1>

      {/* Filmstrip with Clickable Overlays */}
      <div className="relative w-full max-w-4xl mx-auto">
        <img
          src={filmStrip}
          alt="insight.foundation — Psychotherapy, Coaching, Retreats, YouTube Channel"
          className="w-full h-auto"
        />
        {/* Clickable overlay grid — 4 equal columns over the image */}
        <div className="absolute inset-0 grid grid-cols-4">
          {panels.map((panel) => (
            <a
              key={panel.label}
              href={panel.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={panel.label}
              className="block opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/5"
            />
          ))}
        </div>
      </div>

      {/* Tagline */}
      <p className="text-white/70 text-base sm:text-lg md:text-xl tracking-wide mt-10 sm:mt-14 font-light text-center font-sans">
        See yourself clearly. Live your life fully.
      </p>

      {/* Schedule Link */}
      <a
        href="https://schedule.robromano.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/40 hover:text-white/70 text-xs sm:text-sm tracking-wider mt-6 transition-colors duration-300 font-sans"
      >
        Schedule a conversation
      </a>
    </div>
  )
}

export default App
