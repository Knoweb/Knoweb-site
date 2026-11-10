'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, PanInfo } from 'framer-motion';

export interface ErpPillarItem {
  id: string;
  pillarNumber: string;
  shortTitle: string;
  title: string;
  summary: string;
  points: string[];
  icon: React.ReactNode;
  accentColor: string;
  lightBg: string;
  image: string;
}

export const ERP_PILLARS_DATA: ErpPillarItem[] = [
  {
    id: 'sales',
    pillarNumber: '01',
    shortTitle: 'Sales & Distrib.',
    title: 'Sales & Distribution',
    summary:
      'Quotations, sales orders, delivery dispatch notes, and receivables tracking across all sales channels.',
    points: [
      'Multi-channel order capture & approvals',
      'Flexible price lists, discounts & promotions',
      'Delivery scheduling & fulfillment tracking',
      'Customer credit limits & aging analyses',
    ],
    accentColor: '#0284C7',
    lightBg: 'rgba(2, 132, 199, 0.08)',
    image: '/card1.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
  {
    id: 'purchasing',
    pillarNumber: '02',
    shortTitle: 'Purchasing',
    title: 'Purchasing & Procurement',
    summary:
      'Standardized purchase requests, supplier quotations, purchase orders, and goods receipt verification.',
    points: [
      'Purchase requisitions & multi-level sign-offs',
      'Vendor price comparison & purchase orders',
      'Goods Receipt Notes (GRN) & 3-way matching',
      'Supplier payment tracking & credit control',
    ],
    accentColor: '#4F46E5',
    lightBg: 'rgba(79, 70, 229, 0.08)',
    image: '/card2.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 'inventory',
    pillarNumber: '03',
    shortTitle: 'Inventory',
    title: 'Inventory & Warehouse',
    summary:
      'Complete inventory visibility across warehouses, retail locations, and transit hubs.',
    points: [
      'Real-time multi-location stock balances',
      'Batch numbers, serial tracking & expiry dates',
      'Inter-branch stock transfers & transit records',
      'Automated re-order levels & stock valuation (FIFO/Weighted Avg)',
    ],
    accentColor: '#0052FF',
    lightBg: 'rgba(0, 82, 255, 0.08)',
    image: '/card3.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 'finance',
    pillarNumber: '04',
    shortTitle: 'Financial Mgmt',
    title: 'Financial Management',
    summary:
      'Automated accounting entries linked directly to sales, purchases, payroll, and banking operations.',
    points: [
      'General ledger, accounts payable & receivable',
      'Bank reconciliation & cash flow tracking',
      'Real-time P&L, balance sheets & tax reports',
      'Multi-currency transactions & audit logging',
    ],
    accentColor: '#0D9488',
    lightBg: 'rgba(13, 148, 136, 0.08)',
    image: '/card4.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    id: 'governance',
    pillarNumber: '05',
    shortTitle: 'Governance',
    title: 'Administration & Governance',
    summary:
      'Granular security roles, approval hierarchies, and executive dashboards for complete operational control.',
    points: [
      'Role-based permissions & secure audit trails',
      'Custom approval workflows for high-value actions',
      'Automated daily/weekly executive summary alerts',
      'Configurable report generator for audits',
    ],
    accentColor: '#7C3AED',
    lightBg: 'rgba(124, 58, 237, 0.08)',
    image: '/card5.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

interface ErpPillarsCoverflowProps {
  items?: ErpPillarItem[];
  autoPlayInterval?: number;
  title?: string;
  subtitle?: string;
}

export default function ErpPillarsCoverflow({
  items = ERP_PILLARS_DATA,
  autoPlayInterval = 3500,
  title = 'The 5 Connected Pillars',
  subtitle = 'Configured to your business structure so your departments operate on one single source of truth.',
}: ErpPillarsCoverflowProps) {
  // Center on Inventory & Warehouse (Index 2) by default
  const [activeIndex, setActiveIndex] = useState(2);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartY = useRef<number | null>(null);
  const dragMovedRef = useRef<boolean>(false);
  const count = items.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Robust Autoplay functionality: auto-advances every 3.5s and smoothly resets after any swipe/click
  useEffect(() => {
    if (!isAutoplayActive || isDragging) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isAutoplayActive, isDragging, activeIndex, autoPlayInterval, count]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevCard();
      } else if (e.key === 'ArrowRight') {
        nextCard();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextCard, prevCard]);

  // Framer Motion Drag handling for desktop mouse
  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 30;
    const velocityThreshold = 160;
    if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      nextCard();
    } else if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      prevCard();
    }
    setTimeout(() => {
      dragMovedRef.current = false;
      setIsDragging(false);
    }, 80);
  };

  // Native Touch Swipe Handlers for guaranteed mobile touchscreen swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragStartY.current = e.touches[0].clientY;
    dragMovedRef.current = false;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const diffX = e.touches[0].clientX - dragStartX.current;
    if (Math.abs(diffX) > 10) {
      dragMovedRef.current = true;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX.current !== null) {
      const diffX = e.changedTouches[0].clientX - dragStartX.current;
      const diffY = e.changedTouches[0].clientY - (dragStartY.current ?? 0);
      // If primarily horizontal and exceeds 30px threshold
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
        if (diffX < 0) {
          nextCard();
        } else {
          prevCard();
        }
      }
    }
    dragStartX.current = null;
    dragStartY.current = null;
    setTimeout(() => {
      dragMovedRef.current = false;
      setIsDragging(false);
    }, 80);
  };

  /**
   * Calculate 3D cylindrical transform along the curved cylindrical arc.
   * - Diff represents relative distance from active center card (-2, -1, 0, 1, 2)
   * - Center card: scale(1.04), rotateY(0deg), translateZ(40px), opacity 1, sharp focus
   * - Inactive cards: curved outward along Y-axis up to 35deg, translated back in Z-axis, with depth-of-field blur
   */
  const getCardTransform = (index: number) => {
    let diff = index - activeIndex;

    // Wrap around for seamless circular carousel
    if (diff > 2) diff -= count;
    if (diff < -2) diff += count;

    const isCenter = diff === 0;
    const absDiff = Math.abs(diff);

    // Cylindrical arc mathematics:
    // Inward Y-axis perspective rotation up to 28 degrees
    const rotateY = diff * -28;
    // Spacing along the horizontal cylindrical arc, adapted to viewport width to prevent awkward overlap
    const spacing = windowWidth < 640 ? 260 : windowWidth < 1024 ? 300 : 335;
    const translateX = diff * spacing;
    // Deep Z-axis recession bending cards into the background cylinder
    const translateZ = isCenter ? 50 : -absDiff * 130;
    // Scale down inactive cards smoothly, keeping active center card prominent
    const scale = isCenter ? 1.05 : Math.max(0.78, 1 - absDiff * 0.13);
    // Smooth opacity falloff
    const opacity = isCenter ? 1 : Math.max(0.50, 0.88 - absDiff * 0.22);
    // Depth-of-field blur distortion
    const blur = isCenter ? 0 : absDiff === 1 ? 1.5 : 3.5;
    // Z-index hierarchy
    const zIndex = 30 - absDiff * 8;

    return {
      rotateY,
      translateX,
      translateZ,
      scale,
      opacity,
      blur,
      zIndex,
      isCenter,
      diff,
    };
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden select-none py-16 md:py-20"
      style={{
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 45%, #F8FAFC 100%)',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      {/* ── Crisp Studio Light Atmosphere (Radial Soft Lighting) ── */}
      <div
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[110px] opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 82, 255, 0.08) 0%, rgba(2, 132, 199, 0.04) 40%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[260px] rounded-full blur-[90px] opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
        }}
      />

      <div
        className="relative z-10 w-full max-w-[1240px] mx-auto px-4 flex flex-col items-center"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {/* ── Section Header (Dead-centered with balanced, compact spacing) ── */}
        <div
          className="w-full flex flex-col items-center justify-center text-center mx-auto mb-10 sm:mb-12 md:mb-14"
          style={{
            maxWidth: '780px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
          }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/95 border border-blue-200/90 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3.5 shadow-xs"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Unified ERP Architecture
          </div>

          {/* Heading */}
          <h2
            className="w-full text-center text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#0A192F] tracking-tight leading-tight mb-3.5"
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {title}
          </h2>

          {/* Subtitle with compact, comfortable typography */}
          <p
            className="w-full text-slate-600 text-sm sm:text-[15px] leading-relaxed text-center mx-auto"
            style={{
              maxWidth: '620px',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* ── 3D Cylindrical Carousel Stage ── */}
        <div
          className="relative w-full h-[530px] sm:h-[555px] md:h-[580px] flex items-center justify-center pt-1"
          style={{
            perspective: '1400px',
            perspectiveOrigin: 'center center',
          }}
        >
          {/* Framer Motion Gesture Drag Surface with Dual Touch/Pointer Swipe Support */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragSnapToOrigin={true}
            onDragStart={() => {
              dragMovedRef.current = true;
              setIsDragging(true);
            }}
            onDragEnd={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {items.map((pillar, index) => {
              const { rotateY, translateX, translateZ, scale, opacity, blur, zIndex, isCenter, diff } =
                getCardTransform(index);

              return (
                <motion.div
                  key={pillar.id}
                  onClick={() => {
                    if (!dragMovedRef.current) {
                      setActiveIndex(index);
                    }
                  }}
                  animate={{
                    x: translateX,
                    z: translateZ,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: opacity,
                    filter: `blur(${blur}px)`,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 24,
                    mass: 0.85,
                  }}
                  className={`absolute top-1/2 -translate-y-1/2 w-[330px] sm:w-[360px] md:w-[385px] h-[480px] sm:h-[500px] rounded-2xl overflow-hidden flex flex-col justify-between transition-shadow duration-300 ${
                    isCenter
                      ? 'cursor-default ring-1 ring-blue-500/20'
                      : 'cursor-pointer hover:shadow-lg'
                  }`}
                  style={{
                    zIndex,
                    transformStyle: 'preserve-3d',
                    willChange: 'transform, opacity, filter',
                    // Center card: Solid Crisp White. Side cards: Frosted paper texture
                    background: isCenter
                      ? '#FFFFFF'
                      : 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: isCenter ? 'none' : 'blur(12px)',
                    // Active center card gets a crisp 2px blue accent border (#0052FF)
                    border: isCenter
                      ? '2px solid #0052FF'
                      : '1px solid rgba(226, 232, 240, 0.95)',
                    // High-fidelity studio drop shadow with inertial pop
                    boxShadow: isCenter
                      ? '0 30px 60px -12px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(0, 82, 255, 0.15), 0 12px 30px -4px rgba(0, 82, 255, 0.14)'
                      : '0 10px 25px -6px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
                  }}
                >
                  {/* Subtle Cylindrical Shading Overlay (Simulates cylindrical curved lighting) */}
                  {!isCenter && (
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-30"
                      style={{
                        background:
                          diff < 0
                            ? 'linear-gradient(90deg, rgba(15, 23, 42, 0.07) 0%, transparent 45%)'
                            : 'linear-gradient(270deg, rgba(15, 23, 42, 0.07) 0%, transparent 45%)',
                      }}
                    />
                  )}

                  {/* ── Top Visual Header with Prominent High-Resolution Card Graphic ── */}
                  <div className="relative w-full h-[170px] sm:h-[185px] overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className={`w-full h-full object-cover object-center transition-transform duration-500 ${
                        isCenter ? 'scale-100' : 'scale-105 filter brightness-95'
                      }`}
                      loading="eager"
                    />

                    {/* Gradient Overlay for Text & Badge Legibility */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(10, 25, 47, 0.35) 0%, transparent 45%, rgba(10, 25, 47, 0.50) 100%)',
                      }}
                    />

                    {/* Top Badges Row Floating Over Image */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                      {/* Frosted Glass Pillar Icon */}
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md shadow-md transition-all duration-300"
                        style={{
                          background: isCenter ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
                          border: isCenter ? `1.5px solid ${pillar.accentColor}` : '1px solid rgba(255, 255, 255, 0.8)',
                          color: isCenter ? pillar.accentColor : '#334155',
                        }}
                      >
                        {pillar.icon}
                      </div>

                      {/* Frosted Pillar Tag */}
                      <span
                        className="text-[11px] font-mono font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-md"
                        style={{
                          background: isCenter ? '#0052FF' : 'rgba(15, 23, 42, 0.80)',
                          color: '#FFFFFF',
                          border: isCenter ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        PILLAR {pillar.pillarNumber}
                      </span>
                    </div>
                  </div>

                  {/* ── Card Body Content (Vertically balanced, center-aligned title & summary, neatly aligned features) ── */}
                  <div className="px-6 sm:px-7 py-5 sm:py-6 flex-1 flex flex-col justify-center items-center text-center relative z-10">
                    <div className="w-full flex flex-col items-center">
                      {/* Pillar Title with Hero Inter font - Centered */}
                      <h3
                        className="text-xl sm:text-[22px] font-extrabold text-[#0A192F] tracking-tight leading-snug mb-2 text-center"
                        style={{
                          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                          letterSpacing: '-0.025em',
                        }}
                      >
                        {pillar.title}
                      </h3>

                      {/* Summary with high legibility - Centered */}
                      <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed mb-3 text-center max-w-[320px] mx-auto">
                        {pillar.summary}
                      </p>

                      {/* Clean Centered Accent Divider */}
                      <div
                        className="h-[2px] w-16 mb-3.5 mx-auto rounded-full transition-all duration-300"
                        style={{
                          background: isCenter
                            ? 'linear-gradient(90deg, rgba(0, 82, 255, 0.15) 0%, #0052FF 50%, rgba(0, 82, 255, 0.15) 100%)'
                            : '#E2E8F0',
                        }}
                      />

                      {/* Bullet Points with Crisp Vector SVG Checkmark Icons - Neatly aligned block */}
                      <ul className="w-full max-w-[315px] sm:max-w-[325px] mx-auto space-y-2.5 text-left">
                        {pillar.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-slate-800 font-medium"
                          >
                            <span
                              className={`mt-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 transition-colors shadow-2xs ${
                                isCenter
                                  ? 'bg-[#0052FF] text-white shadow-xs'
                                  : 'bg-slate-100 text-slate-500 border border-slate-200'
                              }`}
                            >
                              <svg
                                width="11"
                                height="11"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            <span className="leading-snug">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Segmented Bottom Pill Indicator & Controls Dock ── */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-sm backdrop-blur-md">
            {/* Previous Card Button */}
            <button
              onClick={prevCard}
              aria-label="Previous Pillar"
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:text-[#0052FF] hover:bg-slate-100 active:scale-95 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Segmented Pill Tabs for all 5 Pillars */}
            <div className="flex items-center gap-1">
              {items.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Jump to ${item.title}`}
                    className="relative px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSegmentedPill"
                        className="absolute inset-0 bg-[#0052FF] rounded-full shadow-sm"
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 28,
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors duration-200 flex items-center gap-1.5 ${
                        isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span className="font-mono text-[11px] opacity-80">{item.pillarNumber}</span>
                      <span className="hidden sm:inline">{item.shortTitle}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Next Card Button */}
            <button
              onClick={nextCard}
              aria-label="Next Pillar"
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:text-[#0052FF] hover:bg-slate-100 active:scale-95 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Autoplay Pause / Resume Status Toggle Pill */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoplayActive(!isAutoplayActive)}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/80 hover:bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-2xs"
            >
              {isAutoplayActive ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Autoplay Active</span>
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Autoplay Paused</span>
                </>
              )}
            </button>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-xs text-slate-500">
              Swipe or use keyboard arrow keys (<kbd className="font-mono bg-slate-100 px-1 py-0.5 rounded text-[10px] text-slate-700">←</kbd> <kbd className="font-mono bg-slate-100 px-1 py-0.5 rounded text-[10px] text-slate-700">→</kbd>)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
