import { cn } from "@/lib/utils"

interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "gradient"
    children: React.ReactNode
}

export function Pill({ variant = "default", children, className, ...props }: PillProps) {
    return (
        <div
            className={cn(
                "rounded-full px-3 py-1 text-xs font-medium font-urbanist",
                variant === "gradient" && "brand-gradient-bg text-white",
                variant === "default" && "bg-muted text-muted-foreground",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
} 