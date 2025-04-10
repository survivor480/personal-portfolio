import { FaGithub, FaLinkedin, FaTwitter, FaHackerrank } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/survivor480',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ks48/',
    icon: FaLinkedin,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/KeshavJ56468905',
    icon: FaTwitter,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/survivor_48/',
    icon: SiLeetcode,
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/survivor_48',
    icon: FaHackerrank,
  },
]

export const SKILLS = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 
  'Python', 'TensorFlow', 'Firebase', 'MongoDB',
  'PostgreSQL', 'Docker', 'Git', 'REST APIs',
  'ESP32', 'Raspberry Pi', 'IoT', 'Data Science'
]

export const EDUCATION = [
  {
    degree: 'M.Tech in AI & Data Science',
    institution: 'NIT Durgapur',
    duration: '2024 - 2026',
    description: 'Currently pursuing Masters in Technology with focus on Artificial Intelligence and Data Science'
  },
  {
    degree: 'B.Tech in Computer Science',
    institution: 'University of Engineering and Management, Kolkata',
    duration: '2018 - 2022',
    description: 'Graduated with specialization in Computer Science and Engineering'
  }
]

export const EXPERIENCE = [
  {
    role: 'Software Engineer',
    company: 'Distronix',
    duration: 'April 2022 - May 2025',
    description: 'Worked on various projects including EMIS, Boom Barrier with ANPR, and Public Information System',
    highlights: [
      'Developed backend for Employee Management System using Node.js',
      'Implemented Boom Barrier control system with ESP32',
      'Maintained Raspberry Pi based Public Information System'
    ]
  }
]

export const PROJECTS = [
  {
    title: 'Sound Classification with ESP32S3',
    description: 'A system that classifies sounds into 6 different categories using ESP32 microcontroller',
    image: '/images/sound-classification.png',
    tags: ['IoT', 'Machine Learning', 'ESP32'],
    links: [
      { type: 'view', url: '#' },
      { type: 'source', url: '#' }
    ]
  },
  {
    title: 'The Learn Project',
    description: 'An online learning platform similar to Udemy with course hosting and student analytics',
    image: '/images/learn-project.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    links: [
      { type: 'view', url: 'https://e-learning-frontend-5q3s167zd-survivor480s-projects.vercel.app/' },
      { type: 'source', url: 'https://github.com/survivor480/e-learning-frontend' }
    ]
  },
  {
    title: 'Rest Project',
    description: 'A Postman clone for testing REST APIs with additional features',
    image: '/images/rest.png',
    tags: ['React', 'TypeScript', 'REST APIs'],
    links: [
      { type: 'view', url: 'https://rest-project-xwck-3wo0boqhq-survivor480.vercel.app/' },
      { type: 'source', url: 'https://github.com/survivor480/REST-project' }
    ]
  }
]