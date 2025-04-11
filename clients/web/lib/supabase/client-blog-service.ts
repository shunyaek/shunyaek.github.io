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
        coverImage: post.featured_image,
        publishedAt: post.published_on || post.created_on,
        author: {
            name: author.name,
            avatar: author.avatar || '',
        },
        readingTime: Math.ceil(post.content.split(' ').length / 200), // Estimate reading time
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

    // Fetch authors for all posts
    const authorIds = [...new Set(posts.map(post => post.author))];
    const { data: authors, error: authorsError } = await supabase
        .schema('se_home')
        .from('authors')
        .select('*')
        .in('id', authorIds);

    if (authorsError) {
        console.error('Error fetching authors:', authorsError);
        return [];
    }

    // Create a map of author IDs to author objects
    const authorMap = authors.reduce((map, author) => {
        map[author.id] = author;
        return map;
    }, {} as Record<string, any>);

    // Map to our BlogPost type
    return posts.map(post => mapBlogPost(post, authorMap[post.author], []));
};

// Fetch a single blog post by slug
export const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
    const supabase = createClient();

    // Fetch the blog post
    const { data: post, error: postError } = await supabase
        .schema('se_home')
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single();

    if (postError || !post) {
        console.error('Error fetching blog post:', postError);
        return null;
    }

    // Fetch the author
    const { data: author, error: authorError } = await supabase
        .schema('se_home')
        .from('authors')
        .select('*')
        .eq('id', post.author)
        .single();

    if (authorError) {
        console.error('Error fetching author:', authorError);
        return null;
    }

    // Fetch tags for the post
    const { data: tags, error: tagsError } = await supabase
        .schema('se_home')
        .from('blog_posts_tags_associations')
        .select('tag:tags(*)')
        .eq('post', post.id);

    if (tagsError) {
        console.error('Error fetching tags:', tagsError);
        return null;
    }

    // Map to our BlogPost type
    return mapBlogPost(post, author, tags.map(t => t.tag));
};

// Create a new blog post
export const createBlogPost = async (
    title: string,
    content: string,
    slug: string,
    authorId: string,
    blogId: string,
    featuredImage?: string,
    status: string = 'draft'
): Promise<BlogPost | null> => {
    const supabase = createClient();

    // Create the blog post
    const { data: post, error: postError } = await supabase
        .schema('se_home')
        .from('blog_posts')
        .insert({
            title,
            content,
            slug,
            author: authorId,
            blog: blogId,
            featured_image: featuredImage,
            status,
            created_on: new Date().toISOString(),
            updated_on: new Date().toISOString(),
        })
        .select()
        .single();

    if (postError || !post) {
        console.error('Error creating blog post:', postError);
        return null;
    }

    // Fetch author
    const { data: author, error: authorError } = await supabase
        .schema('se_home')
        .from('authors')
        .select('*')
        .eq('id', authorId)
        .single();

    if (authorError) {
        console.error(`Error fetching author for post ${post.id}:`, authorError);
        return null;
    }

    // Map to our BlogPost type
    return mapBlogPost(post, author, []);
}; 