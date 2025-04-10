'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '../types/types'
import { Key } from 'react'
import { UrlObject } from 'url'

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span 
                            key={tag} 
                            className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-3">
                    {project.links.map((link: { type: Key | null | undefined; url: string | UrlObject }) => (
                        <Link
                            key={link.type}
                            href={link.url}
                            target="_blank"
                            className={`flex-1 text-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
                                link.type === 'view'
                                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {link.type === 'view' ? 'View Project' : 'Source Code'}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}