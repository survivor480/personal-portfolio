export interface Education {
    degree: string
    institution: string
    duration: string
    description: string
}
  
export interface Experience {
    role: string
    company: string
    duration: string
    description: string
    highlights?: string[]
}
  
export interface Project {
    title: string
    description: string
    image: string
    tags: string[]
    links: any
}
  
export interface SocialLink {
    name: string
    url: string
    icon: React.ComponentType<{ className?: string }>
}