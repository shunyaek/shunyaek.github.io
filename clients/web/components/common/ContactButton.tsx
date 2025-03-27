import { Mail, MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { VariantProps } from "class-variance-authority"

/**
 * Contact button props interface
 */
export interface ContactButtonProps extends Omit<React.ComponentProps<typeof Button>, 'icon'> {
    contactType: "email" | "phone" | "cta"
    value: string
}

/**
 * ContactButton Component
 * 
 * A specialized button for contact actions that shows appropriate icons
 * based on the type of contact method.
 */
export function ContactButton({ contactType, value, ...props }: ContactButtonProps) {
    let icon

    switch (contactType) {
        case "email":
            icon = <Mail className="h-5 w-5" />
            break
        case "phone":
            icon = <MessageSquare className="h-5 w-5" />
            break
        case "cta":
            icon = <ArrowRight className="h-5 w-5" />
            break
    }

    return (
        <Button
            icon={icon}
            {...props}
        >
            {value}
        </Button>
    )
} 