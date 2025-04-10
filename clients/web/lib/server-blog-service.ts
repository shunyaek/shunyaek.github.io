import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { Database } from '@/lib/supabase/database.types';
import { SupabaseClient } from '@supabase/supabase-js';

export type BlogPost = Database['se_home']['Tables']['blog_posts']['Row'];

export async function getBlogPosts(): Promise<BlogPost[]> {
    const cookieStore = cookies();
    const supabase: SupabaseClient<Database, 'se_home'> = await createClient(cookieStore);

    const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_on', { ascending: false });

    if (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }

    return posts || [];
} 