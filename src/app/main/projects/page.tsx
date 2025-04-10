import ProjectCard from '../../components/ProjectCard'
import { PROJECTS } from '../../lib/constants'

export default function ProjectsPage() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}