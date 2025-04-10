export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    coverImage: string;
    publishedAt: string;
    readingTime: number;
    tags: string[];
}

export interface BlogPostConnection {
    edges: {
        node: BlogPost;
        cursor: string;
    }[];
    pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
    };
} 