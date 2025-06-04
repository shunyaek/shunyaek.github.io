import { Mail, MessageSquare } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"

interface ContactButtonProps {
  type: "email" | "phone"
  value: string
  href: string
}

export function ContactButton({ type, value, href }: ContactButtonProps) {
  const icon = type === "email" ? <Mail className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />

  return (
    <CustomButton href={href} icon={icon}>
      {value}
    </CustomButton>
  )
}

