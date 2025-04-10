import EducationCard from '../../components/EducationCard'
import ExperienceCard from '../../components/ExperienceCard'
import { EDUCATION, EXPERIENCE } from '../../lib/constants'

export default function AboutPage() {
    return (
        <section className="py-12 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            
            <div className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Education</h3>
                <div className="grid md:grid-cols-2 gap-6">
                {EDUCATION.map((edu, index) => (
                    <EducationCard key={index} education={edu} />
                ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Experience</h3>
                <div className="space-y-6">
                {EXPERIENCE.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} />
                ))}
                </div>
            </div>
        </section>
    )
}