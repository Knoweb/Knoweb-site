'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BLOG_POSTS,
  BLOG_CATEGORIES,
  FEATURED_PROJECTS,
  BlogPost,
} from '@/data/blogData';

const POSTS_PER_PAGE = 4;

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Filter posts based on search query and selected category
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        !selectedCategory || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleCategoryClick = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
    setCurrentPage(1);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  // 4 latest posts for sidebar
  const latestPosts = useMemo(() => {
    return [...BLOG_POSTS].slice(0, 4);
  }, []);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* ── Edge-to-edge Hero Section matching Home & other pages' Design & Typography ── */}
      <section
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 68px)',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#050811',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        {/* Right-Side Hero Image Visual (blogs.jpg) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '64%',
            backgroundImage: `url('/blogs.jpg')`,
            backgroundPosition: 'center 40%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 0.85,
            zIndex: 0,
          }}
        />

        {/* Ambient Pulsating Glow 1 (Violet / Purple) */}
        <div
          style={{
            position: 'absolute',
            top: '18%',
            right: '8%',
            width: '680px',
            height: '680px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(126, 34, 206, 0.09) 38%, transparent 72%)',
            pointerEvents: 'none',
            filter: 'blur(50px)',
            animation: 'heroAuraPulse 7s ease-in-out infinite',
            zIndex: 1,
          }}
        />

        {/* Ambient Pulsating Glow 2 (Electric Cyan / Royal Blue) */}
        <div
          style={{
            position: 'absolute',
            bottom: '12%',
            right: '24%',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0, 229, 255, 0.14) 0%, rgba(59, 130, 246, 0.08) 42%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(45px)',
            animation: 'heroAuraPulseSecondary 9s ease-in-out infinite alternate',
            zIndex: 1,
          }}
        />

        {/* Left-to-Right Dark Gradient Vignette for Guaranteed WCAG Contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, #050811 0%, #050811 38%, rgba(5, 8, 17, 0.88) 56%, rgba(5, 8, 17, 0.28) 82%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Mobile Top-to-Bottom Vignette Overlay */}
        <div
          className="block md:hidden"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, #050811 0%, #050811 40%, rgba(5, 8, 17, 0.70) 70%, rgba(5, 8, 17, 0.15) 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Edge-to-edge Content Container with Generous Left Alignment matching other Heroes */}
        <div
          className="container-max"
          style={{
            position: 'relative',
            zIndex: 3,
            paddingTop: '64px',
            paddingBottom: '72px',
            width: '100%',
          }}
        >
          <div style={{ maxWidth: '740px' }}>
            {/* Top Breadcrumb */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                marginBottom: '24px',
              }}
            >
              <Link
                href="/"
                style={{
                  color: '#00E5FF',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
              >
                Home
              </Link>
              <span style={{ color: 'rgba(255, 255, 255, 0.35)' }}>/</span>
              <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Blogs &amp; Insights</span>
            </div>

            {/* Main Headline (H1): Exact styling as other Heroes (Light 300 weight, pure white, clean Inter font) */}
            <h1
              style={{
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: 'clamp(2rem, 3.7vw, 3.35rem)',
                fontWeight: 300,
                lineHeight: 1.16,
                color: '#FFFFFF',
                letterSpacing: '-0.025em',
                marginBottom: '24px',
              }}
            >
              Engineering, ERP &amp; Digital Growth Insights
            </h1>

            {/* Description Paragraph: Exact styling as other Heroes (400 weight, #94A3B8, max-width ~620px) */}
            <p
              style={{
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
                fontWeight: 400,
                lineHeight: 1.65,
                color: '#94A3B8',
                maxWidth: '620px',
                margin: 0,
              }}
            >
              Practical knowledge for business leaders and technology teams. Deep dives into enterprise automation,
              cloud ERP implementation, SaaS platforms, and digital systems maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Two-Column Layout Section ── */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="container-max">
          <div
            className="blogs-layout-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 340px',
              gap: '40px',
              alignItems: 'start',
            }}
          >
            {/* ── Left Column: Blog Posts List ── */}
            <div>
              {/* Active Filter Notification Bar */}
              {(selectedCategory || searchQuery) && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 18px',
                    borderRadius: '8px',
                    background: 'rgba(0, 79, 235, 0.08)',
                    border: '1px solid rgba(0, 79, 235, 0.25)',
                    marginBottom: '28px',
                  }}
                >
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    Filtering by:{' '}
                    {selectedCategory && (
                      <strong style={{ color: '#004FEB', marginRight: '10px' }}>
                        Category: {selectedCategory}
                      </strong>
                    )}
                    {searchQuery && (
                      <strong style={{ color: '#004FEB' }}>Search: &ldquo;{searchQuery}&rdquo;</strong>
                    )}
                    <span style={{ color: 'var(--text-muted)', marginLeft: '12px' }}>
                      ({filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found)
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSearchQuery('');
                      setCurrentPage(1);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#DC2626',
                      fontWeight: 600,
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                  >
                    Clear Filter ✕
                  </button>
                </div>
              )}

              {/* No results state */}
              {paginatedPosts.length === 0 ? (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '80px 20px',
                    background: 'var(--bg-surface)',
                    borderRadius: '12px',
                    border: '1px dashed var(--border)',
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '14px' }}>🔍</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>No articles match your criteria</h3>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 20px' }}>
                    We couldn&apos;t find any publications matching your current search or category filter.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSearchQuery('');
                      setCurrentPage(1);
                    }}
                    style={{
                      background: '#004FEB',
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '10px 22px',
                      borderRadius: '6px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    View All Articles
                  </button>
                </div>
              ) : (
                /* Blog Posts List (Horizontal Cards matching reference design) */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {paginatedPosts.map((post: BlogPost) => (
                    <article
                      key={post.id}
                      className="blog-card-item"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateColumns: '320px 1fr',
                        transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 79, 235, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(0, 79, 235, 0.35)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                        e.currentTarget.style.borderColor = 'var(--border)';
                      }}
                    >
                      {/* Left: Thumbnail Image */}
                      <Link
                        href={`/blogs/${post.slug}`}
                        style={{
                          display: 'block',
                          position: 'relative',
                          height: '100%',
                          minHeight: '230px',
                          overflow: 'hidden',
                          background: '#0D203B',
                        }}
                      >
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          style={{
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease',
                          }}
                          className="blog-card-img"
                        />
                      </Link>

                      {/* Right: Content & Read More */}
                      <div
                        style={{
                          padding: '26px 28px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          {/* Title */}
                          <h2
                            style={{
                              fontSize: '1.25rem',
                              fontWeight: 700,
                              lineHeight: 1.35,
                              marginBottom: '12px',
                            }}
                          >
                            <Link
                              href={`/blogs/${post.slug}`}
                              style={{
                                color: 'var(--text-primary)',
                                textDecoration: 'none',
                                transition: 'color 0.18s ease',
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = '#004FEB')}
                              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                            >
                              {post.title}
                            </Link>
                          </h2>

                          {/* Meta Row: Author Avatar, Category, Date */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              marginBottom: '14px',
                              flexWrap: 'wrap',
                            }}
                          >
                            {/* Author pill with initial avatar */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span
                                style={{
                                  width: '28px',
                                  height: '28px',
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #004FEB, #38BDF8)',
                                  color: '#FFFFFF',
                                  fontSize: '0.72rem',
                                  fontWeight: 700,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                {post.author.avatar}
                              </span>
                              <span
                                style={{
                                  fontSize: '0.84rem',
                                  fontWeight: 600,
                                  color: 'var(--text-primary)',
                                }}
                              >
                                {post.category}
                              </span>
                            </div>

                            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>•</span>

                            {/* Date */}
                            <span
                              style={{
                                fontSize: '0.82rem',
                                color: 'var(--text-secondary)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                              }}
                            >
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                              </svg>
                              {post.date}
                            </span>
                          </div>

                          {/* Excerpt */}
                          <p
                            style={{
                              color: 'var(--text-secondary)',
                              fontSize: '0.92rem',
                              lineHeight: 1.6,
                              marginBottom: '20px',
                            }}
                          >
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Read More Button — Solid Knoweb Blue matching reference design */}
                        <div>
                          <Link
                            href={`/blogs/${post.slug}`}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              background: '#004FEB',
                              color: '#FFFFFF',
                              padding: '10px 22px',
                              borderRadius: '4px',
                              fontSize: '0.88rem',
                              fontWeight: 600,
                              textDecoration: 'none',
                              transition: 'all 0.2s ease',
                              boxShadow: '0 2px 6px rgba(0, 79, 235, 0.25)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#0040C8';
                              e.currentTarget.style.transform = 'translateY(-1px)';
                              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 79, 235, 0.35)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = '#004FEB';
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 79, 235, 0.25)';
                            }}
                          >
                            <span>Read More</span>
                            <span style={{ fontSize: '0.95rem' }}>→</span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* ── Pagination Buttons (Matching reference UI: 1, 2, ») ── */}
              {totalPages > 1 && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginTop: '48px',
                  }}
                >
                  {Array.from({ length: totalPages }).map((_, idx) => {
                    const pageNum = idx + 1;
                    const isActive = pageNum === currentPage;

                    return (
                      <button
                        key={pageNum}
                        onClick={() => {
                          setCurrentPage(pageNum);
                          window.scrollTo({ top: 400, behavior: 'smooth' });
                        }}
                        style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '4px',
                          fontSize: '0.92rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          border: isActive ? 'none' : '1px solid var(--border)',
                          background: isActive ? '#004FEB' : '#0D203B',
                          color: '#FFFFFF',
                          boxShadow: isActive ? '0 2px 8px rgba(0, 79, 235, 0.35)' : 'none',
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.background = '#1E3A60';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.background = '#0D203B';
                          }
                        }}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  {/* Next Arrow Button */}
                  {currentPage < totalPages && (
                    <button
                      onClick={() => {
                        setCurrentPage((prev) => prev + 1);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                      title="Next Page"
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: '1px solid var(--border)',
                        background: '#0D203B',
                        color: '#FFFFFF',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#004FEB';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#0D203B';
                      }}
                    >
                      »
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* ── Right Column: Sidebar Widgets (Matching Reference Image) ── */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {/* 1. Search Box Widget */}
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '20px',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                }}
              >
                <form
                  onSubmit={handleSearchSubmit}
                  style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      fontSize: '0.9rem',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      background: 'var(--bg-surface)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: '#004FEB',
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '10px 18px',
                      borderRadius: '4px',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#0040C8')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#004FEB')}
                  >
                    Search
                  </button>
                </form>
              </div>

              {/* 2. Categories Widget */}
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                }}
              >
                {/* Dark Navy Header Banner */}
                <div
                  style={{
                    background: '#0D203B',
                    padding: '12px 18px',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    borderLeft: '4px solid #38BDF8',
                  }}
                >
                  Categories
                </div>

                {/* Categories List */}
                <ul style={{ listStyle: 'none', padding: '12px 18px', margin: 0 }}>
                  {BLOG_CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat.name;

                    return (
                      <li
                        key={cat.slug}
                        style={{
                          borderBottom: '1px solid var(--border)',
                          padding: '11px 0',
                        }}
                      >
                        <button
                          onClick={() => handleCategoryClick(cat.name)}
                          style={{
                            background: 'none',
                            border: 'none',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            textAlign: 'left',
                            color: isSelected ? '#004FEB' : 'var(--text-primary)',
                            fontWeight: isSelected ? 700 : 500,
                            fontSize: '0.88rem',
                            transition: 'color 0.18s ease, transform 0.18s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#004FEB';
                            e.currentTarget.style.transform = 'translateX(4px)';
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.color = 'var(--text-primary)';
                            }
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: isSelected ? '#004FEB' : '#94A3B8' }}>–</span>
                            {cat.name}
                          </span>
                          <span
                            style={{
                              fontSize: '0.78rem',
                              color: isSelected ? '#004FEB' : 'var(--text-muted)',
                              background: isSelected ? 'rgba(0, 79, 235, 0.1)' : 'var(--bg-surface)',
                              padding: '2px 8px',
                              borderRadius: '10px',
                            }}
                          >
                            {cat.count}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* 3. Featured Projects / Showcase Widget (6 Grid Thumbnails) */}
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                }}
              >
                {/* Dark Navy Header Banner */}
                <div
                  style={{
                    background: '#0D203B',
                    padding: '12px 18px',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    borderLeft: '4px solid #38BDF8',
                  }}
                >
                  Projects &amp; Solutions
                </div>

                {/* 6 Grid items (2 cols x 3 rows) */}
                <div
                  style={{
                    padding: '16px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                  }}
                >
                  {FEATURED_PROJECTS.map((project, i) => (
                    <Link
                      key={i}
                      href={project.href}
                      title={`${project.title} — ${project.category}`}
                      style={{
                        position: 'relative',
                        height: '76px',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        display: 'block',
                        background: '#0D203B',
                        border: '1px solid var(--border)',
                      }}
                      className="project-thumb-link"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="100px"
                        style={{
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease, filter 0.3s ease',
                        }}
                      />
                      {/* Hover Overlay */}
                      <div
                        className="project-thumb-overlay"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'rgba(0, 79, 235, 0.75)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '4px',
                          opacity: 0,
                          transition: 'opacity 0.2s ease',
                          textAlign: 'center',
                        }}
                      >
                        <span style={{ color: '#FFFFFF', fontSize: '0.72rem', fontWeight: 700, lineHeight: 1.2 }}>
                          {project.title}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 4. Latest Posts Widget */}
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                }}
              >
                {/* Dark Navy Header Banner */}
                <div
                  style={{
                    background: '#0D203B',
                    padding: '12px 18px',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    borderLeft: '4px solid #38BDF8',
                  }}
                >
                  Latest Posts
                </div>

                {/* Latest Posts List */}
                <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {latestPosts.map((post) => (
                    <div
                      key={post.id}
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'center',
                        borderBottom: '1px solid var(--border)',
                        paddingBottom: '12px',
                      }}
                    >
                      {/* Thumbnail */}
                      <Link
                        href={`/blogs/${post.slug}`}
                        style={{
                          flexShrink: 0,
                          width: '60px',
                          height: '60px',
                          borderRadius: '4px',
                          position: 'relative',
                          overflow: 'hidden',
                          background: '#0D203B',
                          display: 'block',
                        }}
                      >
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="60px"
                          style={{ objectFit: 'cover' }}
                        />
                      </Link>

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4
                          style={{
                            fontSize: '0.86rem',
                            fontWeight: 600,
                            lineHeight: 1.3,
                            marginBottom: '4px',
                          }}
                        >
                          <Link
                            href={`/blogs/${post.slug}`}
                            style={{
                              color: 'var(--text-primary)',
                              textDecoration: 'none',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              transition: 'color 0.18s ease',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#004FEB')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                          >
                            {post.title}
                          </Link>
                        </h4>
                        <span
                          style={{
                            fontSize: '0.76rem',
                            color: 'var(--text-secondary)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          {post.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Stay Updated with Knoweb (Newsletter Widget) */}
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                }}
              >
                {/* Dark Navy Header Banner */}
                <div
                  style={{
                    background: '#0D203B',
                    padding: '12px 18px',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    borderLeft: '4px solid #38BDF8',
                  }}
                >
                  Stay Updated with Knoweb
                </div>

                <div style={{ padding: '18px' }}>
                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      marginBottom: '14px',
                    }}
                  >
                    Get the latest enterprise software trends, ERP guides, and engineering updates delivered straight to your inbox.
                  </p>

                  {newsletterSubscribed ? (
                    <div
                      style={{
                        padding: '12px',
                        borderRadius: '4px',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid #10B981',
                        color: '#059669',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        textAlign: 'center',
                      }}
                    >
                      ✓ Thank you! You&apos;re now subscribed to Knoweb insights.
                    </div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Your email address"
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          fontSize: '0.88rem',
                          border: '1px solid var(--border)',
                          borderRadius: '4px',
                          background: 'var(--bg-surface)',
                          color: 'var(--text-primary)',
                          outline: 'none',
                        }}
                      />
                      <button
                        type="submit"
                        style={{
                          width: '100%',
                          background: '#004FEB',
                          color: '#FFFFFF',
                          border: 'none',
                          padding: '10px',
                          borderRadius: '4px',
                          fontWeight: 600,
                          fontSize: '0.88rem',
                          cursor: 'pointer',
                          transition: 'background 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#0040C8')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = '#004FEB')}
                      >
                        Subscribe
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style>{`
        .project-thumb-link:hover .project-thumb-overlay {
          opacity: 1 !important;
        }
        .project-thumb-link:hover img {
          transform: scale(1.08);
        }
        .blog-card-item:hover .blog-card-img {
          transform: scale(1.04);
        }

        @media (max-width: 960px) {
          .blogs-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .blog-card-item {
            grid-template-columns: 1fr !important;
          }
          .blog-card-item a:first-child {
            height: 190px !important;
            min-height: 190px !important;
          }
        }
      `}</style>
    </main>
  );
}

