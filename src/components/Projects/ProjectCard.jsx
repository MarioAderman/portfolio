export default function ProjectCard({ project }) {
  return (
    <article className="bg-[#1a1a1a] rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] shadow-[0_10px_40px_rgba(0,0,0,0.3)] cursor-pointer flex flex-col h-full">
      {/* Project Image */}
      <div className={`w-full h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
        <span className="opacity-30">🖼️</span>
      </div>

      {/* Project Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-[#f5f5f7]">
          {project.title}
        </h3>
        <p className="text-[#a1a1a6] mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Project Links */}
        <div className="flex gap-4 flex-wrap">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                link.primary
                  ? 'bg-[#0071e3] hover:bg-[#0077ed] text-white'
                  : 'bg-white/10 hover:bg-white/15 text-white backdrop-blur-sm'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
