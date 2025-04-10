"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/browser"
import { Button } from "@/components/ui/essential/button"
import { Input } from "@/components/ui/essential/input"
import { toast } from "sonner"

export function NewsletterSubscription() {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [userId, setUserId] = useState<string | null>(null)

    useEffect(() => {
        // Check if user is authenticated
        const checkUser = async () => {
            const supabase = createClient()
            const { data } = await supabase.auth.getUser()
            if (data.user) {
                setUserId(data.user.id)
            }
        }

        checkUser()
    }, [])

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const supabase = createClient()

            // Only check for existing subscription if user is authenticated
            if (userId) {
                const { data: existingSubscription, error: checkError } = await supabase
                    .schema('se_home')
                    .from("newsletter_subscriptions")
                    .select("id")
                    .eq("email", email)
                    .single()

                if (checkError && checkError.code !== "PGRST116") {
                    console.error("Error checking subscription:", checkError)
                    toast.error("Failed to check subscription status. Please try again later.")
                    return
                }

                if (existingSubscription) {
                    toast.error("You're already subscribed to our newsletter!")
                    return
                }
            }

            // Create new subscription
            const subscriptionData = {
                email,
                organization: "bae3bfb9-8675-4cdb-9809-0922ad2109c8",
                ...(userId ? { user_id: userId } : {})
            }

            const { error: insertError } = await supabase
                .schema('se_home')
                .from("newsletter_subscriptions")
                .insert([subscriptionData])

            if (insertError) {
                console.error("Subscription error:", insertError)
                if (insertError.code === '23505') { // Unique violation error code
                    toast.error("This email is already subscribed to our newsletter!")
                } else {
                    toast.error("Failed to subscribe. Please try again later.")
                }
                return
            }

            toast.success("Successfully subscribed to our newsletter!")
            setEmail("")
        } catch (error) {
            console.error("Unexpected error:", error)
            toast.error("An unexpected error occurred. Please try again later.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input
                type="email"
                placeholder="Enter your email address"
                className="w-full flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Button type="submit" className="sm:w-auto" disabled={isLoading}>
                {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
        </form>
    )
} 