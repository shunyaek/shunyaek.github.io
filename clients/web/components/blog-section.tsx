'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { mockBlogPosts } from '@/lib/graphql/mockData';
import { BlogCard } from '@/components/blog/BlogCard';

export function BlogSection() {
    // Get the latest 3 posts
    const latestPosts = mockBlogPosts.slice(0, 3);

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
                    {latestPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
} 