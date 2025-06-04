// Breakpoints
export const MOBILE_BREAKPOINT = 768
export const TABLET_BREAKPOINT = 1024
export const DESKTOP_BREAKPOINT = 1280

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const

// Toast configuration
export const TOAST_CONFIG = {
  LIMIT: 1,
  REMOVE_DELAY: 1000000, // Very long delay for manual dismissal
} as const

// API endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
} as const

// External links
export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com',
  LINKEDIN: 'https://linkedin.com',
  TWITTER: 'https://twitter.com',
} as const

// Company information
export const COMPANY_INFO = {
  NAME: 'shunyaek.se',
  TAGLINE: 'bits to magic',
  EMAIL: 'hello@shunyaek.se',
  PHONE: '+1 (555) 123-4567',
  ADDRESS: {
    STREET: '123 Innovation Drive',
    CITY: 'Tech City',
    STATE: 'CA',
    ZIP: '90210',
    COUNTRY: 'USA',
  },
} as const

// SEO defaults
export const SEO_DEFAULTS = {
  TITLE: 'shunyaek.se | bits to magic',
  DESCRIPTION: 'Empowering businesses with innovative digital solutions to thrive in today\'s competitive landscape.',
  KEYWORDS: ['technology consulting', 'software development', 'digital transformation', 'innovation'],
  OG_IMAGE: '/og-image.jpg',
} as const

// Navigation items
export const NAVIGATION_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Connect', href: '/connect' },
] as const 