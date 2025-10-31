import { useEffect, useState } from 'react'
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
    opacity: 1 - scrollY / 500,
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-8 relative bg-black">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,113,227,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.1)_0%,transparent_50%)]" />
      </div>

      <div
        className="max-w-3xl text-center z-10 animate-[fadeInUp_1s_ease-out]"
        style={parallaxStyle}
      >
        {/* Profile Image */}
        <div className="w-56 h-64 rounded-[50%] bg-gradient-to-br from-[#0071e3] to-[#5e5ce6] mx-auto mb-8 flex items-center justify-center shadow-[0_20px_60px_rgba(0,113,227,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_80px_rgba(0,113,227,0.4)] overflow-hidden p-1">
          <img src="/src/assets/profile_2.JPG" alt="Profile" className="w-full h-full object-cover rounded-[50%]" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-b from-[#f5f5f7] to-[#a1a1a6] bg-clip-text text-transparent">
          Mario Aderman
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#a1a1a6] leading-relaxed max-w-2xl mx-auto">
          I'm a AI Engineer in the making, looking to breaking into tech.
          I contribute to open-source projects of topics I'm really into to gain real-world experience
          while learning teamwork and state-of-the-art technologies.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <a
            href="https://linkedin.com/in/mario-aderman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1a6] hover:text-[#0071e3] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          <a
            href="https://github.com/MarioAderman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1a6] hover:text-[#0071e3] transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          <a
            href="https://twitter.com/marioaderman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1a6] hover:text-[#0071e3] transition-colors duration-300"
            aria-label="Twitter"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          <a
            href="https://kaggle.com/marioaderman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1a6] hover:text-[#0071e3] transition-colors duration-300"
            aria-label="Kaggle"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
            </svg>
          </a>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
