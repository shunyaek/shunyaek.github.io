import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { BlogPost } from '@/lib/graphql/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Pill } from '@/components/ui/essential/pill';

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`}>
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
                            <Pill key={tag} variant={"gradient"}>{tag}</Pill>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
} 