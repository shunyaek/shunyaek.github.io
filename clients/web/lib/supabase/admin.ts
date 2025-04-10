import { createClient } from '@supabase/supabase-js'

// This function should only be used in server-side code or admin tools
// It requires the service_role key which has admin privileges
export async function createUser(email: string, password: string) {
    // List of allowed email domains or specific emails
    const allowedEmails = [
        'shunyaek.se',
        // Add other allowed domains or specific emails here
    ]

    // Check if the email is allowed
    const isAllowed = allowedEmails.some(allowed =>
        email.endsWith(`@${allowed}`) || email === allowed
    )

    if (!isAllowed) {
        throw new Error('This email is not authorized to create an account')
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceRoleKey) {
        throw new Error('Supabase URL or service role key is missing')
    }

    // Create a Supabase client with the service role key
    const supabase = createClient(
        supabaseUrl,
        serviceRoleKey,
        {
            auth: {
                autoRefreshToken: false,
                persistSession: false
            }
        }
    )

    // Create the user
    const { data, error } = await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true, // Automatically confirm the email
    })

    if (error) {
        throw error
    }

    return data
} 