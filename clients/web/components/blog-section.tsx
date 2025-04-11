'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlogCard } from '@/components/blog/BlogCard';
import { useEffect, useState } from 'react';
import { fetchBlogPosts } from '@/lib/supabase/client-blog-service';
import { BlogPost } from '@/lib/graphql/types';

export function BlogSection() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const fetchedPosts = await fetchBlogPosts();
                setPosts(fetchedPosts.slice(0, 3)); // Get the latest 3 posts
            } catch (error) {
                console.error('Error loading blog posts:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadPosts();
    }, []);

    if (isLoading) {
        return (
            <section className="py-24 bg-muted/50">
                <div className="container">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
                            <p className="text-muted-foreground max-w-2xl">
                                Stay updated with our latest insights, tutorials, and industry news.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="animate-pulse">
                                <div className="h-48 bg-muted rounded-t-lg" />
                                <div className="p-6 space-y-4">
                                    <div className="h-4 bg-muted rounded w-3/4" />
                                    <div className="h-4 bg-muted rounded w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-muted/50">
            <div className="container">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Stay updated with our latest insights, tutorials, and industry news.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                        View all posts
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
} 