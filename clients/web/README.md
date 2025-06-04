# shunyaek.se Website

> bits to magic

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Playfair Display, Urbanist

## 📁 Project Structure

```
clients/web/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   ├── sections/         # Page sections (Hero, Features, etc.)
│   ├── shared/           # Shared utility components
│   ├── ui/               # Reusable UI components
│   └── index.ts          # Barrel exports
├── hooks/                # Custom React hooks
│   ├── use-mobile.tsx    # Mobile detection hook
│   ├── use-theme-detection.ts
│   ├── use-toast.ts      # Toast notifications
│   └── index.ts          # Barrel exports
├── lib/                  # Utilities and configurations
│   ├── constants/        # App constants
│   ├── types/           # TypeScript type definitions
│   ├── utils.ts         # Utility functions
│   └── index.ts         # Barrel exports
├── public/              # Static assets
├── docs/                # Documentation
└── styles/              # Additional styles
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📋 Features

- ✅ Responsive design
- ✅ Dark/Light theme support
- ✅ Modern UI components
- ✅ Type-safe development
- ✅ Optimized performance
- ✅ SEO friendly
- ✅ Accessibility compliant

## 🎨 Design System

The project uses a consistent design system with:
- Organized component library
- Centralized constants and types
- Reusable hooks and utilities
- Clean barrel exports for easy imports

## 📝 License

This project is private and proprietary to shunyaek.se.

