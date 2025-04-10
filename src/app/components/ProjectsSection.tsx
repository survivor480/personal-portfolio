'use client'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../lib/motion'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../lib/constants'
import Link from 'next/link'

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 px-4 bg-white">
            <motion.div
                variants={staggerContainer(0.1, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="max-w-6xl mx-auto"
            >
                {/* Section Title */}
                <motion.h2 
                    variants={fadeIn('up', 0.2)}
                    className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
                >
                    Featured Projects
                </motion.h2>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.slice(0, 3).map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn('up', 0.3 + index * 0.1)}
                            whileHover={{ y: -5 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}