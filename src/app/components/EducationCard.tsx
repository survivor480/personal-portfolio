import { Education } from '../types/types';

export default function EducationCard({ education }: { education: Education }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-indigo-700">{education.degree}</h3>
      <p className="text-gray-600 font-medium mt-1">{education.institution}</p>
      <p className="text-gray-500 text-sm mt-1">{education.duration}</p>
      <p className="mt-3 text-gray-700">{education.description}</p>
    </div>
  )
}