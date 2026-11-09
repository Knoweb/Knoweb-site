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
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  autoPlayInterval = 5000,
  title = 'The 5 Connected Pillars',
  subtitle = 'Configured to your business structure so your departments operate on one single source of truth.',
}: ErpPillarsCoverflowProps) {
  // Center on Inventory & Warehouse (Index 2) by default
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const count = items.length;

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplayActive || isPaused) return;
    const timer = setInterval(() => {
      nextCard();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isAutoplayActive, isPaused, nextCard, autoPlayInterval]);

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

  // Handle Drag / Swipe gestures with natural threshold
  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 35;
    if (info.offset.x < -threshold) {
      nextCard();
    } else if (info.offset.x > threshold) {
      prevCard();
    }
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
    // Inward Y-axis perspective rotation up to 32 degrees
    const rotateY = diff * -30;
    // Horizontal spacing along the perspective arc
    const translateX = diff * 290;
    // Deep Z-axis recession bending cards into the background cylinder
    const translateZ = isCenter ? 40 : -absDiff * 125;
    // Scale down inactive cards smoothly
    const scale = isCenter ? 1.04 : Math.max(0.76, 1 - absDiff * 0.13);
    // Smooth opacity falloff
    const opacity = isCenter ? 1 : Math.max(0.48, 0.88 - absDiff * 0.22);
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
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full overflow-hidden select-none py-16 md:py-24"
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

      <div className="container-max relative z-10 mx-auto px-4">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Unified ERP Architecture
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight leading-tight mb-4"
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            {title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── 3D Cylindrical Carousel Stage ── */}
        <div
          className="relative w-full h-[520px] sm:h-[550px] flex items-center justify-center"
          style={{
            perspective: '1400px',
            perspectiveOrigin: 'center center',
          }}
        >
          {/* Framer Motion Gesture Drag Surface */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {items.map((pillar, index) => {
              const { rotateY, translateX, translateZ, scale, opacity, blur, zIndex, isCenter, diff } =
                getCardTransform(index);

              return (
                <motion.div
                  key={pillar.id}
                  onClick={() => setActiveIndex(index)}
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
                  className={`absolute top-1/2 -translate-y-1/2 w-[320px] sm:w-[360px] md:w-[385px] h-[455px] sm:h-[475px] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-shadow duration-300 ${
                    isCenter
                      ? 'cursor-default'
                      : 'cursor-pointer hover:shadow-lg'
                  }`}
                  style={{
                    zIndex,
                    transformStyle: 'preserve-3d',
                    willChange: 'transform, opacity, filter',
                    // Center card: Solid Crisp White. Side cards: Frosted paper texture
                    background: isCenter
                      ? '#FFFFFF'
                      : 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: isCenter ? 'none' : 'blur(12px)',
                    // Active center card gets a crisp 2px blue accent border (#0052FF)
                    border: isCenter
                      ? '2px solid #0052FF'
                      : '1px solid rgba(226, 232, 240, 0.9)',
                    // High-fidelity studio drop shadow with inertial pop
                    boxShadow: isCenter
                      ? '0 25px 50px -12px rgba(15, 23, 42, 0.16), 0 0 0 1px rgba(0, 82, 255, 0.12), 0 8px 24px -4px rgba(0, 82, 255, 0.10)'
                      : '0 10px 25px -6px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
                  }}
                >
                  {/* Subtle Cylindrical Shading Overlay (Simulates cylindrical curved lighting) */}
                  {!isCenter && (
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
                      style={{
                        background:
                          diff < 0
                            ? 'linear-gradient(90deg, rgba(15, 23, 42, 0.06) 0%, transparent 45%)'
                            : 'linear-gradient(270deg, rgba(15, 23, 42, 0.06) 0%, transparent 45%)',
                      }}
                    />
                  )}

                  {/* Top Card Content */}
                  <div className="relative z-10">
                    {/* Header Row: Pillar Icon & Pillar Number Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 shadow-sm"
                        style={{
                          background: isCenter ? '#EFF6FF' : pillar.lightBg,
                          border: isCenter ? '1.5px solid #BFDBFE' : '1px solid rgba(226, 232, 240, 0.8)',
                          color: isCenter ? '#0052FF' : pillar.accentColor,
                        }}
                      >
                        {pillar.icon}
                      </div>

                      <span
                        className="text-xs font-mono font-bold px-2.5 py-1 rounded-full transition-colors duration-300"
                        style={{
                          background: isCenter ? '#EFF6FF' : '#F1F5F9',
                          color: isCenter ? '#0052FF' : '#64748B',
                          border: isCenter ? '1px solid #BFDBFE' : '1px solid #E2E8F0',
                        }}
                      >
                        PILLAR {pillar.pillarNumber}
                      </span>
                    </div>

                    {/* Pillar Title (Deep Navy Typography) */}
                    <h3
                      className="text-xl sm:text-2xl font-bold text-[#0A192F] tracking-tight mb-2.5"
                      style={{
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      {pillar.title}
                    </h3>

                    {/* Summary (Fully Legible Slate Typography) */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {pillar.summary}
                    </p>

                    {/* Clean Horizontal Divider */}
                    <div
                      className="w-full h-px mb-4 transition-colors duration-300"
                      style={{
                        background: isCenter
                          ? 'linear-gradient(90deg, #0052FF 0%, rgba(0, 82, 255, 0.1) 70%, transparent 100%)'
                          : '#E2E8F0',
                      }}
                    />

                    {/* Bullet Points with Crisp Checkmark Bullets */}
                    <ul className="space-y-2.5">
                      {pillar.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                          <span
                            className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 font-bold text-[10px]"
                            style={{
                              background: isCenter ? '#EFF6FF' : '#F8FAFC',
                              color: isCenter ? '#0052FF' : '#64748B',
                              border: isCenter ? '1px solid #BFDBFE' : '1px solid #CBD5E1',
                            }}
                          >
                            ✓
                          </span>
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Active Card Bottom Connected Hub Tag */}
                  <div
                    className={`relative z-10 pt-3 border-t flex items-center justify-between text-xs font-medium transition-colors duration-300 ${
                      isCenter ? 'border-blue-100 text-slate-600' : 'border-slate-100 text-slate-400'
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[#0052FF]">
                      <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse" />
                      Active Connected Hub
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">ERP Core</span>
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
