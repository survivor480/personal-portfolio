'use client'

import { motion } from 'framer-motion'
import ContactForm from '../../components/ContactForm'
import { fadeIn, staggerContainer } from '../../lib/motion'
import { SOCIAL_LINKS } from '@/app/lib/constants'

export default function ContactPage() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={staggerContainer(0.1, 0.2)}
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl mx-auto">
        {/* Animated Header */}
        <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities? Drop me a message below.
          </p>
        </motion.div>

        {/* Enhanced Contact Form Container */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-100 rounded-full opacity-20 -z-10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-100 rounded-full opacity-20 -z-10"></div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-indigo-50/50 -z-20"></div>
          
          {/* Contact Form */}
          <ContactForm />
          
          {/* Social Links Alternative */}
          <motion.div 
            variants={fadeIn('up', 0.6)}
            className="mt-10 pt-6 border-t border-gray-100 text-center"
          >
            <p className="text-gray-500 mb-4">Or connect with me directly:</p>
            <div className="flex justify-center space-x-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-50 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}