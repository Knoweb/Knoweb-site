import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, BlogPost } from '@/data/blogData';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found — Knoweb Insights',
    };
  }

  return {
    title: `${post.title} — Knoweb Insights`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts (same category or others)
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* ── Article Hero Header ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #09182B 0%, #0D203B 50%, #102A4C 100%)',
          color: '#FFFFFF',
          padding: '120px 0 60px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container-max" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumbs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              color: '#94A3B8',
              marginBottom: '20px',
            }}
          >
            <Link
              href="/"
              style={{ color: '#94A3B8', textDecoration: 'none' }}
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blogs"
              style={{ color: '#94A3B8', textDecoration: 'none' }}
            >
              Blogs
            </Link>
            <span>/</span>
            <span style={{ color: '#38BDF8', fontWeight: 600 }}>{post.category}</span>
          </div>

          {/* Category Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(0, 79, 235, 0.2)',
              border: '1px solid rgba(0, 79, 235, 0.45)',
              color: '#38BDF8',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '16px',
            }}
          >
            {post.category}
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              color: '#FFFFFF',
              marginBottom: '20px',
              maxWidth: '900px',
            }}
          >
            {post.title}
          </h1>

          {/* Meta Author Info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              color: '#CBD5E1',
              fontSize: '0.9rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #004FEB, #38BDF8)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                }}
              >
                {post.author.avatar}
              </span>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block' }}>{post.author.name}</strong>
                <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>{post.author.role}</span>
              </div>
            </div>

            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>

            <span>📅 {post.date}</span>

            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>

            <span>⏱ {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── Article Content ── */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="container-max" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Back Button */}
          <div style={{ marginBottom: '32px' }}>
            <Link
              href="/blogs"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#004FEB',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
              }}
            >
              <span>← Back to all articles</span>
            </Link>
          </div>

          {/* Featured Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '420px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '40px',
              border: '1px solid var(--border)',
              background: '#0D203B',
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 900px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Key Excerpt Callout */}
          <div
            style={{
              padding: '24px 28px',
              borderRadius: '8px',
              background: 'rgba(0, 79, 235, 0.06)',
              borderLeft: '4px solid #004FEB',
              marginBottom: '36px',
            }}
          >
            <p
              style={{
                fontSize: '1.12rem',
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              &ldquo;{post.excerpt}&rdquo;
            </p>
          </div>

          {/* Body Paragraphs */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              marginBottom: '50px',
            }}
          >
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginTop: '16px',
              }}
            >
              Strategic Takeaways for Sri Lankan Enterprises
            </h3>
            <p>
              When evaluating technology upgrades, agility and usability trump theoretical feature lists.
              Systems that solve direct operational bottlenecks—such as slow billing, inventory discrepancies,
              or manual HR documentation—deliver measurable returns within weeks of launch.
            </p>

            <ul
              style={{
                paddingLeft: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <li>Always prioritize real-time data visibility over post-hoc batch processing.</li>
              <li>Ensure all digital systems include mobile-friendly interfaces for operational personnel.</li>
              <li>Protect business continuity with automated database backups and strict SSL encryption.</li>
            </ul>
          </div>

          {/* Tags */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              paddingTop: '24px',
              borderTop: '1px solid var(--border)',
              marginBottom: '48px',
            }}
          >
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginRight: '8px' }}>
              Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '5px 12px',
                  borderRadius: '16px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Bio Box */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              padding: '28px',
              borderRadius: '10px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              marginBottom: '60px',
            }}
          >
            <span
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #004FEB, #38BDF8)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {post.author.avatar}
            </span>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>
                Written by {post.author.name}
              </h4>
              <p style={{ fontSize: '0.86rem', color: '#004FEB', fontWeight: 600, marginBottom: '6px' }}>
                {post.author.role} at Knoweb Solutions
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Specializing in robust enterprise engineering, ERP architecture, and digital system modernizations
                for high-growth organizations.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div>
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  marginBottom: '24px',
                  paddingBottom: '12px',
                  borderBottom: '2px solid var(--border)',
                }}
              >
                Related Publications
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '24px',
                }}
              >
                {relatedPosts.map((rel: BlogPost) => (
                  <Link
                    key={rel.id}
                    href={`/blogs/${rel.slug}`}
                    style={{
                      textDecoration: 'none',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                  >
                    <div style={{ position: 'relative', height: '140px', background: '#0D203B' }}>
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        sizes="300px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <span style={{ fontSize: '0.76rem', color: '#004FEB', fontWeight: 700, marginBottom: '6px' }}>
                        {rel.category}
                      </span>
                      <h4
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          lineHeight: 1.35,
                          marginBottom: '8px',
                        }}
                      >
                        {rel.title}
                      </h4>
                      <span style={{ marginTop: 'auto', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                        {rel.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
