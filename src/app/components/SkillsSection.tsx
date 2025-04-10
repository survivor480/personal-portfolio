'use client'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../lib/motion'
import { SKILLS } from '../lib/constants'

export default function SkillsSection() {
  const skillCategories = [
    { 
      title: 'AI/Data Science',
      skills: ['Python', 'TensorFlow', 'Machine Learning', 'Data Analysis']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'IoT/Embedded',
      skills: ['ESP32', 'Raspberry Pi', 'C/C++', 'Arduino']
    }
  ]

  return (
    <section id="skills" className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
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
          My Skills
        </motion.h2>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={fadeIn('up', 0.3 + catIndex * 0.1)}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-indigo-700 mb-4 flex items-center">
                <span className="w-6 h-1 bg-indigo-500 mr-3"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.4 + (catIndex * 0.05) + (skillIndex * 0.03),
                      type: 'spring',
                      stiffness: 300,
                      damping: 20
                    }}
                    whileHover={{ 
                      y: -3,
                      scale: 1.05,
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-indigo-600 border border-indigo-100 shadow-xs hover:border-indigo-200 transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}