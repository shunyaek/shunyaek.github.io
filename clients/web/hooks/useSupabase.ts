import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'
import { type SupabaseClient } from '@supabase/supabase-js'

export function useSupabase() {
    const [supabase] = useState<SupabaseClient>(() => createClient())

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') {
                // Handle sign in
                console.log('Signed in:', session)
            }
            if (event === 'SIGNED_OUT') {
                // Handle sign out
                console.log('Signed out')
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [supabase])

    return { supabase }
} 