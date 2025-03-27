import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                custom: "custom-button", // For backward compatibility
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    href?: string;
    external?: boolean;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

/**
 * Button Component
 * 
 * A unified button component that can render as either a button or link
 * with various styling options and icon support.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, href, external = false, icon, children, ...props }, ref) => {
        // If href is provided, render as a link
        if (href) {
            // External link handling
            const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {}

            return (
                <Link
                    href={href}
                    className={cn(buttonVariants({ variant, size, className }))}
                    {...linkProps}
                >
                    {icon && <span className="mr-2">{icon}</span>}
                    {children}
                </Link>
            )
        }

        // Otherwise render as a button or custom component via Slot
        const Comp = asChild ? Slot : "button"

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {icon && <span className="mr-2">{icon}</span>}
                {children}
            </Comp>
        )
    }
)

Button.displayName = "Button"

export { Button, buttonVariants } 