"use client";

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/supabase/auth-context"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, isLoading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!isLoading && !user) {
            router.push("/login")
        }
    }, [user, isLoading, router])

    if (isLoading) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
        )
    }

    if (!user) {
        return null
    }

    return <>{children}</>
} 