import { BLOG_POSTS, BlogPost } from '@/data/blogData';

export const STRAPI_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

/**
 * Normalizes an image path from Strapi or local public asset.
 */
export function getStrapiMediaUrl(url: string | null | undefined): string {
  if (!url) return '/blog-1.jpg';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `${STRAPI_BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
}

export interface StrapiBlogItem {
  id: number | string;
  documentId?: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string | string[];
  readTime?: string;
  featured?: boolean;
  publishedAt?: string;
  createdAt?: string;
  coverImage?: {
    url?: string;
  };
  category?: {
    name?: string;
    slug?: string;
  };
  author?: {
    name?: string;
    role?: string;
    avatar?: {
      url?: string;
    };
  };
  tags?: string[] | { name?: string }[];
  // Backwards compatibility for Strapi v4 nested attributes
  attributes?: Record<string, any>;
}

/**
 * Normalizes a Strapi v4 or v5 payload into the frontend BlogPost interface.
 */
export function normalizeStrapiPost(raw: StrapiBlogItem): BlogPost {
  const item: any = raw.attributes ? { ...raw.attributes, id: raw.id } : raw;

  const categoryName =
    typeof item.category === 'object' && item.category !== null
      ? item.category.name || item.category.data?.attributes?.name || 'Enterprise'
      : typeof item.category === 'string'
      ? item.category
      : 'Enterprise';

  const authorData = item.author?.data?.attributes || item.author || {};
  const authorAvatarUrl =
    authorData.avatar?.data?.attributes?.url ||
    authorData.avatar?.url ||
    '/favicon.ico';

  const coverImageUrl =
    item.coverImage?.data?.attributes?.url ||
    item.coverImage?.url ||
    item.image ||
    '/blog-1.jpg';

  let rawContent: string[] = [];
  if (Array.isArray(item.content)) {
    rawContent = item.content.map((p: any) =>
      typeof p === 'string' ? p : p.children?.[0]?.text || ''
    );
  } else if (typeof item.content === 'string') {
    rawContent = item.content.split('\n\n').filter(Boolean);
  }

  const rawTags = Array.isArray(item.tags)
    ? item.tags.map((t: any) => (typeof t === 'string' ? t : t.name || ''))
    : [];

  return {
    id: String(item.id || item.documentId || Math.random()),
    slug: item.slug,
    title: item.title,
    category: categoryName,
    author: {
      name: authorData.name || 'Knoweb Team',
      role: authorData.role || 'Enterprise Solutions Specialist',
      avatar: getStrapiMediaUrl(authorAvatarUrl),
    },
    date: item.publishedAt
      ? new Date(item.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : 'Nov 2026',
    readTime: item.readTime || '5 min read',
    excerpt: item.excerpt || '',
    content: rawContent.length > 0 ? rawContent : ['Content pending publication.'],
    image: getStrapiMediaUrl(coverImageUrl),
    tags: rawTags.length > 0 ? rawTags : ['Technology', 'Cloud ERP'],
    featured: Boolean(item.featured),
  };
}

/**
 * Fetches all blog posts from Strapi with fallback to local static data if unreachable.
 */
export async function fetchStrapiBlogs(options?: {
  categorySlug?: string;
  searchQuery?: string;
}): Promise<BlogPost[]> {
  try {
    const params = new URLSearchParams();
    params.set('populate', '*');
    params.set('sort', 'publishedAt:desc');

    if (options?.categorySlug) {
      params.set('filters[category][slug][$eq]', options.categorySlug);
    }

    const res = await fetch(`${STRAPI_BASE_URL}/api/blogs?${params.toString()}`, {
      next: { revalidate: 60 }, // ISR cache for 60 seconds
    });

    if (!res.ok) {
      console.warn(`[Strapi] Fetch failed with status ${res.status}. Using fallback.`);
      return BLOG_POSTS;
    }

    const json = await res.json();
    if (!json.data || !Array.isArray(json.data) || json.data.length === 0) {
      return BLOG_POSTS;
    }

    return json.data.map(normalizeStrapiPost);
  } catch (error) {
    console.warn('[Strapi] Failed to connect to Strapi server. Using local fallback.', error);
    return BLOG_POSTS;
  }
}

/**
 * Fetches a single blog post by its slug.
 */
export async function fetchStrapiBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `${STRAPI_BASE_URL}/api/blogs?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      return BLOG_POSTS.find((p) => p.slug === slug) || null;
    }

    const json = await res.json();
    if (!json.data || json.data.length === 0) {
      return BLOG_POSTS.find((p) => p.slug === slug) || null;
    }

    return normalizeStrapiPost(json.data[0]);
  } catch (error) {
    return BLOG_POSTS.find((p) => p.slug === slug) || null;
  }
}

export interface LeadSubmissionPayload {
  name: string;
  email: string;
  company?: string;
  role?: string;
  inquiry: string;
  message: string;
}

/**
 * Submits a contact inquiry / lead to Strapi API.
 */
export async function submitLeadToStrapi(
  payload: LeadSubmissionPayload
): Promise<{ success: boolean; message?: string }> {
  try {
    const res = await fetch(`${STRAPI_BASE_URL}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name: payload.name,
          email: payload.email,
          company: payload.company || '',
          role: payload.role || '',
          inquiryType: payload.inquiry,
          message: payload.message,
          status: 'New',
        },
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData?.error?.message || 'Failed to submit inquiry');
    }

    return { success: true };
  } catch (error: any) {
    console.error('[Strapi Lead Submission Error]:', error);
    return {
      success: false,
      message: error?.message || 'Connection error. Please try again or reach out via email.',
    };
  }
}
