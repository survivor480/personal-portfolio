import { SOCIAL_LINKS } from '../lib/constants'
import { motion } from 'framer-motion'

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-3">
      {SOCIAL_LINKS.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white border border-gray-200 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
          aria-label={link.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
        >
          {/* Gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          
          {/* Animated icon */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <link.icon className="w-6 h-6 text-gray-700 group-hover:text-indigo-600 transition-colors" />
          </motion.div>
          
          {/* Tooltip */}
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-bottom-10 transition-all duration-300">
            {link.name}
          </span>
        </motion.a>
      ))}
    </div>
  )
}