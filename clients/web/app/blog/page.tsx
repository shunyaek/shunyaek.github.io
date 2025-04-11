'use client';

import { useEffect, useState } from 'react';
import { BlogPostList } from '@/components/blog/BlogPostList';
import { fetchBlogPosts } from '@/lib/supabase/client-blog-service';
import { BlogPost } from '@/lib/graphql/types';

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const fetchedPosts = await fetchBlogPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.error('Error loading blog posts:', error);
            } finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    return (
        <main className="container mx-auto px-4 py-24">
            <div className="flex flex-col items-center text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Latest from Our Blog</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Explore our latest insights, updates, and stories from the world of technology and business.
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <BlogPostList posts={posts} />
                </div>
            )}
        </main>
    );
} 