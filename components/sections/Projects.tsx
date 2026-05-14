import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <p className="section-label mb-3">PROJECTS</p>
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-[#2D2A26]">これまでの実績</h2>
        <p className="text-[13px] text-[#6B6560] mt-3">個人開発・ポートフォリオ作品</p>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl border border-[#E5DED4] overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Emoji thumbnail */}
              <div
                className="md:w-52 shrink-0 flex items-center justify-center py-10 md:py-0"
                style={{ background: index % 2 === 0 ? '#FBEAE2' : '#F1E8D9' }}
              >
                <span className="text-6xl">{project.emoji}</span>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-medium text-[17px] text-[#2D2A26] group-hover:text-[#B85C38] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-[#B85C38] mt-0.5">{project.detail}</p>
                  </div>
                  {project.status && (
                    <span className="shrink-0 text-[10px] font-medium bg-[#E8F5E9] text-[#2E7D32] px-3 py-1 rounded-full border border-[#C8E6C9]">
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="text-[13px] text-[#4A4540] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium bg-[#F1E8D9] text-[#6B5A3F] px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] text-[#B85C38] hover:underline"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] text-[#B85C38] hover:underline"
                    >
                      Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
