"use client"

interface ScrollIndicatorProps {
  currentSection: number
  totalSections: number
  onSectionClick: (index: number) => void
}

const sectionLabels = [
  "about",
  "approach",
  "methodology",
  "edge",
  "services",
  "focus",
  "work",
  "pricing",
  "connect"
]

export function ScrollIndicator({ currentSection, totalSections, onSectionClick }: ScrollIndicatorProps) {
  return (
    <div className="fixed right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-50 hidden sm:flex flex-col gap-2 sm:gap-3">
      {Array.from({ length: totalSections }, (_, index) => (
        <button
          key={index}
          onClick={() => onSectionClick(index)}
          className={`group relative flex items-center transition-all duration-300 ${currentSection === index ? 'scale-110' : 'hover:scale-105'
            }`}
          aria-label={`Go to section: ${sectionLabels[index]}`}
        >
          {/* Dot indicator */}
          <div
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 transition-all duration-300 ${currentSection === index
              ? 'bg-gradient-to-r from-[#3B82F6] to-[#10B981] border-transparent scale-125'
              : 'bg-background border-muted-foreground/30 hover:border-muted-foreground/60'
              }`}
          />

          {/* Label tooltip - hidden on mobile for better UX */}
          <div
            className={`absolute right-4 sm:right-6 whitespace-nowrap bg-background/95 backdrop-blur-sm border rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium transition-all duration-300 shadow-lg hidden sm:block ${currentSection === index
              ? 'opacity-100 visible translate-x-0'
              : 'opacity-0 invisible translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0'
              }`}
          >
            {sectionLabels[index]}
          </div>
        </button>
      ))}
    </div>
  )
} 