import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react'
import { Experience } from '../types/types'
// import { Experience } from '../lib/constants'

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-indigo-700">{experience.role}</h3>
      <p className="text-gray-600 font-medium mt-1">{experience.company}</p>
      <p className="text-gray-500 text-sm mt-1">{experience.duration}</p>
      <p className="mt-3 text-gray-700">{experience.description}</p>
      {experience.highlights && experience.highlights.length > 0 && (
        <ul className="mt-4 space-y-2">
          {experience.highlights.map((highlight: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
            <li key={index} className="flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span className="text-gray-700">{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}