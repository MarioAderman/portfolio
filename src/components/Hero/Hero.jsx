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
        <div className="w-44 h-44 rounded-full bg-gradient-to-br from-[#0071e3] to-[#5e5ce6] mx-auto mb-8 flex items-center justify-center text-6xl shadow-[0_20px_60px_rgba(0,113,227,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_80px_rgba(0,113,227,0.4)]">
          👤
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-b from-[#f5f5f7] to-[#a1a1a6] bg-clip-text text-transparent">
          Lorem Ipsum Dolor
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#a1a1a6] leading-relaxed max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <ScrollIndicator />
    </section>
  )
}
