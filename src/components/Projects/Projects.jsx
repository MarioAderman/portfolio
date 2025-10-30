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
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
        Major Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-project-card
            data-id={project.id}
            className="opacity-0 translate-y-8 transition-all duration-700"
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
    </section>
  )
}
