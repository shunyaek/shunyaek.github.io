import { Database } from '@/lib/supabase/database.types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Pill } from '@/components/ui/essential/pill';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

type BlogPost = Database['se_home']['Tables']['blog_posts']['Row'];

interface BlogPostListProps {
    posts: BlogPost[];
}

export function BlogPostList({ posts }: BlogPostListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card className="overflow-hidden border bg-background hover:brand-shadow transition-all duration-300">
                        <div className="relative h-48 w-full">
                            <Image
                                src={post.featured_image || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <CardHeader>
                            <div className="flex items-center space-x-2 mb-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="Author" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="text-sm text-muted-foreground">
                                    John Doe • {format(new Date(post.published_on || post.created_on || Date.now()), 'MMM d, yyyy')} • 5 min read
                                </div>
                            </div>
                            <h2 className="text-xl font-semibold hover:text-primary transition-colors">
                                {post.title}
                            </h2>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground line-clamp-2">
                                {(post.meta as { excerpt?: string })?.excerpt || 'No excerpt available'}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {((post.meta as { tags?: string[] })?.tags || []).map((tag: string) => (
                                    <Pill key={tag} variant="gradient">{tag}</Pill>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    );
} 