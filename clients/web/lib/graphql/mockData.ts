import { BlogPost, BlogPostConnection } from './types';

export const mockBlogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Getting Started with Next.js and GraphQL',
        slug: 'getting-started-with-nextjs-and-graphql',
        excerpt: 'Learn how to build modern web applications with Next.js and GraphQL',
        content: 'This is a detailed guide on how to get started with Next.js and GraphQL...',
        author: {
            name: 'John Doe',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
        },
        coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        publishedAt: '2024-03-28T10:00:00Z',
        readingTime: 5,
        tags: ['Next.js', 'GraphQL', 'Web Development'],
    },
    {
        id: '2',
        title: 'The Future of Web Development',
        slug: 'future-of-web-development',
        excerpt: 'Exploring the latest trends and technologies shaping the future of web development',
        content: 'The web development landscape is constantly evolving...',
        author: {
            name: 'Jane Smith',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
        },
        coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        publishedAt: '2024-03-27T15:30:00Z',
        readingTime: 8,
        tags: ['Web Development', 'Technology', 'Future Trends'],
    },
];

export const mockBlogPostConnection: BlogPostConnection = {
    edges: mockBlogPosts.map(post => ({
        node: post,
        cursor: post.id,
    })),
    pageInfo: {
        hasNextPage: false,
        endCursor: mockBlogPosts[mockBlogPosts.length - 1].id,
    },
}; 