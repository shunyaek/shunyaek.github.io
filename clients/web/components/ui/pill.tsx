import { cn } from "@/lib/utils"

interface PillProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "secondary" | "outline" | "gradient"
}

export function Pill({ children, className, variant = "default" }: PillProps) {
  const variants = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-input bg-background text-foreground",
    gradient: "bg-gradient-to-r from-primary to-secondary text-primary-foreground",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
} 