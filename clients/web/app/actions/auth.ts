'use server'

import { createUser } from '@/lib/supabase/admin'
import { revalidatePath } from 'next/cache'

export async function createNewUser(email: string, password: string) {
    try {
        await createUser(email, password)
        revalidatePath('/dashboard')
        return { success: true, error: null }
    } catch (error) {
        console.error('Error creating user:', error)
        return {
            success: false,
            error: error instanceof Error ? error.message : 'An unknown error occurred'
        }
    }
} 