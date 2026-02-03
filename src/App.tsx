import filmStrip from './assets/film-strip.jpg'

const panels = [
  { label: 'Psychotherapy', href: 'https://robromano.com/' },
  { label: 'Coaching', href: 'https://schedule.robromano.com' },
  { label: 'Retreats', href: 'https://retreats.robromano.com' },
  { label: 'YouTube', href: 'https://youtube.robromano.com' },
]

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-start pt-[12vh] sm:justify-center px-6 pb-8 sm:pt-16 sm:pb-16">
      {/* Site Name — Cormorant Garamond Light, lowercase, luminous */}
      <h1
        className="text-white tracking-[0.12em] sm:tracking-[0.2em] lowercase font-light mb-8 sm:mb-10 max-w-full text-center animate-[fadeIn_1.2s_ease-out]"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.6rem, 7vw, 3rem)',
          textShadow: '0 0 30px rgba(255,255,255,0.2), 0 0 60px rgba(255,255,255,0.06)',
        }}
      >
        insight.foundation
      </h1>

      {/* Subtitle — staggered phrase reveal above filmstrip */}
      <p className="text-white/80 text-xs sm:text-sm tracking-normal sm:tracking-[0.15em] mb-3 sm:mb-4 font-sans text-center whitespace-nowrap">
        <span className="animate-[fadeIn_1s_ease-out_1s_both]">four paths,</span>{' '}
        <span className="animate-[fadeIn_1s_ease-out_2s_both]">one foundation,</span>{' '}
        <span className="animate-[fadeIn_1s_ease-out_3s_both]">nurture your curiosity ...</span>
      </p>

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
              className="cursor-pointer transition-all duration-300 hover:bg-black/25"
            />
          ))}
        </div>
      </div>

      {/* Tagline — Cormorant Garamond, staggered reveal */}
      <p
        className="text-white/85 text-lg sm:text-2xl md:text-3xl tracking-wide font-medium mt-6 sm:mt-8 text-center max-w-[90vw]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        <span className="animate-[fadeIn_1s_ease-out_4s_both]">Clarity emerges.</span>{' '}
        <span className="animate-[fadeIn_1s_ease-out_5s_both]">Life deepens.</span>{' '}
        <span className="animate-[fadeIn_1s_ease-out_6s_both]">Insight sustains.</span>
      </p>

      {/* Schedule Link — symmetrical with caption above */}
      <a
        href="https://schedule.robromano.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white text-xs sm:text-sm tracking-[0.15em] mt-18 sm:mt-20 transition-colors duration-300 font-sans underline underline-offset-4 decoration-white/30 hover:decoration-white/70 decoration-[0.5px]"
      >
        <span className="animate-[fadeIn_1.2s_ease-out_8s_both]">let's talk</span>
      </a>
    </div>
  )
}

export default App
