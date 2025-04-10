'use client'

import { EDUCATION, EXPERIENCE } from '../lib/constants'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../lib/motion';

export default function AboutSection() {
    return (
        <section id="about" className="py-16 px-4 bg-white">
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
                    About Me
                </motion.h2>
                
                {/* Education Section */}
                <motion.div variants={fadeIn('up', 0.3)} className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-gray-800 flex items-center">
                        <span className="w-8 h-1 bg-indigo-500 mr-4"></span>
                        Education
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {EDUCATION.map((edu, index) => (
                            <motion.div 
                                key={index}
                                variants={fadeIn('up', 0.4 + index * 0.1)}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                            >
                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-100 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                
                                <h4 className="text-xl font-bold text-gray-800 mb-2 relative z-10">
                                    {edu.degree}
                                </h4>
                                <p className="text-indigo-600 font-medium mb-1 relative z-10">
                                    {edu.institution}
                                </p>
                                <div className="flex items-center text-sm text-gray-500 mb-4 relative z-10">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {edu.duration}
                                </div>
                                <p className="text-gray-600 relative z-10">
                                    {edu.description}
                                </p>
                                <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-indigo-600 shadow-sm border border-gray-100">
                                    {index === 0 ? 'Current' : 'Completed'}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Section */}
                <motion.div variants={fadeIn('up', 0.5)}>
                    <h3 className="text-2xl font-semibold mb-8 text-gray-800 flex items-center">
                        <span className="w-8 h-1 bg-purple-500 mr-4"></span>
                        Experience
                    </h3>
                    <div className="space-y-8">
                        {EXPERIENCE.map((exp, index) => (
                            <motion.div 
                                key={index}
                                variants={fadeIn('up', 0.6 + index * 0.1)}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                            >
                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-100 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                
                                <h4 className="text-xl font-bold text-gray-800 mb-1 relative z-10">
                                    {exp.role}
                                </h4>
                                <p className="text-purple-600 font-medium mb-2 relative z-10">
                                    {exp.company}
                                </p>
                                <div className="flex items-center text-sm text-gray-500 mb-4 relative z-10">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {exp.duration}
                                </div>
                                <p className="text-gray-600 mb-4 relative z-10">
                                    {exp.description}
                                </p>
                                {exp.highlights && (
                                    <ul className="space-y-2 relative z-10">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-purple-500 mr-2 mt-1">•</span>
                                                <span className="text-gray-700">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}