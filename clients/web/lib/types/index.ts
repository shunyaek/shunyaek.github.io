// Common Types
export interface BaseComponent {
  children?: React.ReactNode
  className?: string
}

// API Response Types
export interface ApiResponse<T = any> {
  data: T
  success: boolean
  message?: string
  error?: string
}

// Contact Form Types
export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
  subject?: string
}

// Theme Types
export type Theme = 'light' | 'dark' | 'system'

// Navigation Types
export interface NavItem {
  label: string
  href: string
  external?: boolean
  disabled?: boolean
}

// SEO Types
export interface SeoData {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
}

// Project/Case Study Types
export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  featured?: boolean
}

// Service Types
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features?: string[]
  pricing?: {
    base: number
    currency: string
  }
}

// Testimonial Types
export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  rating?: number
  avatar?: string
} 