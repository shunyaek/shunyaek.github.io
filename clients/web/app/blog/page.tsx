import { BlogHeader } from '@/components/blog/BlogHeader';
import { BlogPostList } from '@/components/blog/BlogPostList';
import { getBlogPosts } from '@/lib/server-blog-service';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Blog | Shunyaek',
    description: 'Read our latest blog posts about technology, business, and more.',
};

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <div className="min-h-screen bg-background">
            <BlogHeader />
            <main className="container mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold">Latest Blog Posts</h1>
                    <Link href="/blog/new">
                        <Button variant="default">Create New Post</Button>
                    </Link>
                </div>
                <BlogPostList posts={posts} />
            </main>
        </div>
    );
} 