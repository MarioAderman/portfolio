import { useEffect, useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.id]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const cards = document.querySelectorAll('[data-project-card]')
    cards.forEach(card => observerRef.current?.observe(card))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section className="py-24 relative bg-black">
      {/* Background gradients matching Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,113,227,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.08)_0%,transparent_40%),radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.08)_0%,transparent_40%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Major Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-project-card
            data-id={project.id}
            className="opacity-0 translate-y-8 transition-all duration-700 w-full max-w-md"
            style={{
              opacity: visibleCards.has(String(project.id)) ? 1 : 0,
              transform: visibleCards.has(String(project.id)) ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: `${index * 100}ms`
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}
