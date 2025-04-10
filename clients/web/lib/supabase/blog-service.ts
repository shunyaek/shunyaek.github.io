import { createClient } from './browser';
import { BlogPost, BlogPostConnection } from '../graphql/types';

// Map Supabase blog post to our BlogPost type
const mapBlogPost = (post: any, author: any, tags: any[]): BlogPost => {
    return {
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.content.substring(0, 150) + '...',
        content: post.content,
        author: {
            name: author.name,
            avatar: author.picture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${author.name}`,
        },
        coverImage: post.featured_image || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        publishedAt: post.published_on || post.created_on || new Date().toISOString(),
        readingTime: Math.ceil(post.content.split(' ').length / 200), // Rough estimate: 200 words per minute
        tags: tags.map(tag => tag.name),
    };
};

// Fetch all blog posts
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
    const supabase = createClient();

    // Fetch blog posts
    const { data: posts, error: postsError } = await supabase
        .schema('se_home')
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_on', { ascending: false });

    if (postsError) {
        console.error('Error fetching blog posts:', postsError);
        return [];
    }

    // Fetch authors and tags for each post
    const blogPosts: BlogPost[] = [];

    for (const post of posts) {
        // Fetch author
        const { data: author, error: authorError } = await supabase
            .schema('se_home')
            .from('authors')
            .select('*')
            .eq('id', post.author)
            .single();

        if (authorError) {
            console.error(`Error fetching author for post ${post.id}:`, authorError);
            continue;
        }

        // Fetch tags
        const { data: tagAssociations, error: tagAssocError } = await supabase
            .schema('se_home')
            .from('blog_posts_tags_associations')
            .select('tag')
            .eq('blog_post', post.id);

        if (tagAssocError) {
            console.error(`Error fetching tag associations for post ${post.id}:`, tagAssocError);
            continue;
        }

        // Fetch tag details
        const tagIds = tagAssociations.map(assoc => assoc.tag);
        const { data: tags, error: tagsError } = await supabase
            .schema('se_home')
            .from('tags')
            .select('*')
            .in('id', tagIds);

        if (tagsError) {
            console.error(`Error fetching tags for post ${post.id}:`, tagsError);
            continue;
        }

        // Map to our BlogPost type
        blogPosts.push(mapBlogPost(post, author, tags));
    }

    return blogPosts;
};

// Fetch a single blog post by slug
export const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
    const supabase = createClient();

    // Fetch blog post
    const { data: post, error: postError } = await supabase
        .schema('se_home')
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

    if (postError || !post) {
        console.error('Error fetching blog post:', postError);
        return null;
    }

    // Fetch author
    const { data: author, error: authorError } = await supabase
        .schema('se_home')
        .from('authors')
        .select('*')
        .eq('id', post.author)
        .single();

    if (authorError) {
        console.error(`Error fetching author for post ${post.id}:`, authorError);
        return null;
    }

    // Fetch tags
    const { data: tagAssociations, error: tagAssocError } = await supabase
        .schema('se_home')
        .from('blog_posts_tags_associations')
        .select('tag')
        .eq('blog_post', post.id);

    if (tagAssocError) {
        console.error(`Error fetching tag associations for post ${post.id}:`, tagAssocError);
        return null;
    }

    // Fetch tag details
    const tagIds = tagAssociations.map(assoc => assoc.tag);
    const { data: tags, error: tagsError } = await supabase
        .schema('se_home')
        .from('tags')
        .select('*')
        .in('id', tagIds);

    if (tagsError) {
        console.error(`Error fetching tags for post ${post.id}:`, tagsError);
        return null;
    }

    // Map to our BlogPost type
    return mapBlogPost(post, author, tags);
};

// Fetch blog posts with pagination
export const fetchBlogPostConnection = async (
    limit: number = 10,
    cursor?: string
): Promise<BlogPostConnection> => {
    const blogPosts = await fetchBlogPosts();

    // Apply pagination
    const startIndex = cursor ? blogPosts.findIndex(post => post.id === cursor) + 1 : 0;
    const endIndex = startIndex + limit;
    const paginatedPosts = blogPosts.slice(startIndex, endIndex);

    return {
        edges: paginatedPosts.map(post => ({
            node: post,
            cursor: post.id,
        })),
        pageInfo: {
            hasNextPage: endIndex < blogPosts.length,
            endCursor: paginatedPosts.length > 0 ? paginatedPosts[paginatedPosts.length - 1].id : '',
        },
    };
}; 