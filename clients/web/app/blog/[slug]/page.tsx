import Image from 'next/image';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { fetchBlogPostBySlug } from '@/lib/supabase/blog-service';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const resolvedParams = await params;
    const post = await fetchBlogPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container mx-auto py-12">
            <div className="max-w-3xl mx-auto">
                <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex items-center space-x-2 mb-6">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm text-muted-foreground">
                        {post.author.name} • {format(new Date(post.publishedAt), 'MMMM d, yyyy')} • {post.readingTime} min read
                    </div>
                </div>

                <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

                <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="prose prose-lg max-w-none">
                    {post.content.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </article>
    );
} 