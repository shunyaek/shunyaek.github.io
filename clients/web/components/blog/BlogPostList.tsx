import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Pill } from '@/components/ui/essential/pill';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { BlogPost } from '@/lib/graphql/types';

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
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <CardHeader>
                            <div className="flex items-center space-x-2 mb-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                                </Avatar>
                                <div className="text-sm text-muted-foreground">
                                    {post.author.name} • {format(new Date(post.publishedAt), 'MMM d, yyyy')} • {post.readingTime} min read
                                </div>
                            </div>
                            <h2 className="text-xl font-semibold hover:text-primary transition-colors">
                                {post.title}
                            </h2>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {post.tags.map((tag) => (
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