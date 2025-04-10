import { Metadata } from 'next';
import { CreateBlogPostForm } from '@/components/blog/CreateBlogPostForm';

export const metadata: Metadata = {
    title: 'Create New Blog Post',
    description: 'Create a new blog post for your website',
};

export default function CreateBlogPostPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
            <CreateBlogPostForm />
        </div>
    );
} 