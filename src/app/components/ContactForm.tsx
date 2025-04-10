'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * i,
            duration: 0.5
        }
    })
}

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        try {
        // Submit logic here
            await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
            setSubmitSuccess(true)
            reset()
        } catch (error) {
            console.error('Submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={inputVariants}
        >
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
            </label>
            <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </motion.div>

        <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={inputVariants}
        >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
            </label>
            <input
            id="email"
            type="email"
            {...register('email', { 
                required: 'Email is required',
                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
                }
            })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </motion.div>

        <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={inputVariants}
        >
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone (optional)
            </label>
            <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
        </motion.div>

        <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={inputVariants}
        >
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
            </label>
            <textarea
            id="message"
            rows={4}
            {...register('message', { required: 'Message is required' })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
        </motion.div>

        <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={inputVariants}
            className="pt-2"
        >
            <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md hover:shadow-lg transition-all disabled:opacity-70"
            >
            {isSubmitting ? (
                <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
                </span>
            ) : (
                'Send Message'
            )}
            </button>
        </motion.div>

        {submitSuccess && (
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 text-sm text-green-700 bg-green-100 rounded-md"
            >
            Thank you for your message! I'll get back to you soon.
            </motion.div>
        )}
        </form>
    )
}