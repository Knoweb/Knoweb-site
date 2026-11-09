'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

export interface ErpPillarItem {
  id: string;
  pillarNumber: string;
  title: string;
  summary: string;
  points: string[];
  icon: React.ReactNode;
  accentColor: string;
  glowColor: string;
}

export const ERP_PILLARS_DATA: ErpPillarItem[] = [
  {
    id: 'sales',
    pillarNumber: '01',
    title: 'Sales & Distribution',
    summary:
      'Quotations, sales orders, delivery dispatch notes, and receivables tracking across all sales channels.',
    points: [
      'Multi-channel order capture & approvals',
      'Flexible price lists, discounts & promotions',
      'Delivery scheduling & fulfillment tracking',
      'Customer credit limits & aging analyses',
    ],
    accentColor: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.35)',
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
    title: 'Purchasing & Procurement',
    summary:
      'Standardized purchase requests, supplier quotations, purchase orders, and goods receipt verification.',
    points: [
      'Purchase requisitions & multi-level sign-offs',
      'Vendor price comparison & purchase orders',
      'Goods Receipt Notes (GRN) & 3-way matching',
      'Supplier payment tracking & credit control',
    ],
    accentColor: '#818CF8',
    glowColor: 'rgba(129, 140, 248, 0.35)',
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
    title: 'Inventory & Warehouse',
    summary:
      'Complete inventory visibility across warehouses, retail locations, and transit hubs.',
    points: [
      'Real-time multi-location stock balances',
      'Batch numbers, serial tracking & expiry dates',
      'Inter-branch stock transfers & transit records',
      'Automated re-order levels & stock valuation (FIFO/Weighted Avg)',
    ],
    accentColor: '#00E5FF',
    glowColor: 'rgba(0, 229, 255, 0.4)',
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
    title: 'Financial Management',
    summary:
      'Automated accounting entries linked directly to sales, purchases, payroll, and banking operations.',
    points: [
      'General ledger, accounts payable & receivable',
      'Bank reconciliation & cash flow tracking',
      'Real-time P&L, balance sheets & tax reports',
      'Multi-currency transactions & audit logging',
    ],
    accentColor: '#34D399',
    glowColor: 'rgba(52, 211, 153, 0.35)',
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
    title: 'Administration & Governance',
    summary:
      'Granular security roles, approval hierarchies, and executive dashboards for complete operational control.',
    points: [
      'Role-based permissions & secure audit trails',
      'Custom approval workflows for high-value actions',
      'Automated daily/weekly executive summary alerts',
      'Configurable report generator for audits',
    ],
    accentColor: '#A78BFA',
    glowColor: 'rgba(167, 139, 250, 0.35)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

interface ErpPillarsCoverflowProps {
  items?: ErpPillarItem[];
  autoPlayInterval?: number; // ms, default 5000
  title?: string;
  subtitle?: string;
}

export default function ErpPillarsCoverflow({
  items = ERP_PILLARS_DATA,
  autoPlayInterval = 5000,
  title = 'The 5 Connected Pillars',
  subtitle = 'Configured to your business structure so your departments operate on one single source of truth.',
}: ErpPillarsCoverflowProps) {
  const [activeIndex, setActiveIndex] = useState(2); // Center on Inventory by default
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

  // Handle Drag / Swipe gestures
  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 40;
    if (info.offset.x < -threshold) {
      nextCard();
    } else if (info.offset.x > threshold) {
      prevCard();
    }
  };

  /**
   * Calculate 3D transformation along the cylindrical curve
   * Offset diff represents distance from active index (-2, -1, 0, 1, 2)
   */
  const getCardTransform = (index: number) => {
    let diff = index - activeIndex;

    // Wrap around calculation for circular carousel
    if (diff > 2) diff -= count;
    if (diff < -2) diff += count;

    // Responsive spread based on offset
    const isCenter = diff === 0;

    // Cylindrical angle and coordinate calculations
    const rotateY = diff * -28; // Negative for convex cylinder facing viewer
    const translateX = diff * 280; // Distance between card centers in 3D space
    const translateZ = isCenter ? 30 : -Math.abs(diff) * 110; // Bend cards backward in depth
    const scale = isCenter ? 1.02 : Math.max(0.72, 1 - Math.abs(diff) * 0.14);
    const opacity = isCenter ? 1 : Math.max(0.38, 0.85 - Math.abs(diff) * 0.28);
    const zIndex = 30 - Math.abs(diff) * 8;

    return {
      rotateY,
      translateX,
      translateZ,
      scale,
      opacity,
      zIndex,
      isCenter,
    };
  };

  const activePillar = items[activeIndex];

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full overflow-hidden select-none py-16 md:py-24"
      style={{
        background: 'linear-gradient(180deg, #050811 0%, #080E1C 50%, #060B14 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* ── Ambient Radial Atmosphere Glows ── */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[100px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full blur-[90px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
        }}
      />

      <div className="container-max relative z-10 mx-auto px-4">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Unified ERP Architecture
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            {title}
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── 3D Cylindrical Carousel Stage ── */}
        <div
          className="relative w-full h-[520px] sm:h-[540px] flex items-center justify-center"
          style={{
            perspective: '1200px',
            perspectiveOrigin: 'center center',
          }}
        >
          {/* Framer Motion Drag Surface */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {items.map((pillar, index) => {
              const { rotateY, translateX, translateZ, scale, opacity, zIndex, isCenter } =
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
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 26,
                    mass: 0.8,
                  }}
                  className={`absolute top-1/2 -translate-y-1/2 w-[320px] sm:w-[360px] md:w-[380px] h-[450px] sm:h-[470px] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-shadow duration-300 ${
                    isCenter
                      ? 'cursor-default ring-1 ring-cyan-400/40'
                      : 'cursor-pointer hover:ring-1 hover:ring-white/20'
                  }`}
                  style={{
                    zIndex,
                    transformStyle: 'preserve-3d',
                    background: isCenter
                      ? 'linear-gradient(145deg, rgba(14, 27, 49, 0.94) 0%, rgba(9, 17, 31, 0.98) 100%)'
                      : 'linear-gradient(145deg, rgba(11, 21, 38, 0.85) 0%, rgba(7, 13, 24, 0.90) 100%)',
                    backdropFilter: 'blur(16px)',
                    border: isCenter
                      ? `1.5px solid ${pillar.accentColor}`
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: isCenter
                      ? `0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 35px ${pillar.glowColor}`
                      : '0 10px 25px -5px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  {/* Top Header Row with Icon & Pillar Number */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300"
                        style={{
                          background: isCenter
                            ? `rgba(${parseInt(pillar.accentColor.slice(1, 3), 16)}, ${parseInt(
                                pillar.accentColor.slice(3, 5),
                                16
                              )}, ${parseInt(pillar.accentColor.slice(5, 7), 16)}, 0.15)`
                            : 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid ${
                            isCenter ? pillar.accentColor : 'rgba(255, 255, 255, 0.1)'
                          }`,
                          color: isCenter ? pillar.accentColor : '#94A3B8',
                        }}
                      >
                        {pillar.icon}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span
                          className="text-xs font-mono font-bold px-2.5 py-1 rounded-md"
                          style={{
                            background: isCenter
                              ? 'rgba(0, 229, 255, 0.12)'
                              : 'rgba(255, 255, 255, 0.05)',
                            color: isCenter ? '#00E5FF' : '#64748B',
                            border: `1px solid ${
                              isCenter ? 'rgba(0, 229, 255, 0.3)' : 'rgba(255, 255, 255, 0.06)'
                            }`,
                          }}
                        >
                          PILLAR {pillar.pillarNumber}
                        </span>
                      </div>
                    </div>

                    {/* Pillar Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5">
                      {pillar.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                      {pillar.summary}
                    </p>

                    {/* Thin Separator Line */}
                    <div
                      className="w-full h-px mb-5"
                      style={{
                        background: isCenter
                          ? `linear-gradient(90deg, ${pillar.accentColor} 0%, rgba(255, 255, 255, 0.05) 100%)`
                          : 'rgba(255, 255, 255, 0.08)',
                      }}
                    />

                    {/* Bullet Points */}
                    <ul className="space-y-2.5">
                      {pillar.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-300">
                          <span
                            className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                            style={{
                              background: isCenter
                                ? 'rgba(0, 229, 255, 0.15)'
                                : 'rgba(255, 255, 255, 0.05)',
                              color: isCenter ? pillar.accentColor : '#94A3B8',
                            }}
                          >
                            ✓
                          </span>
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Active Card Glow Indicator */}
                  {isCenter && (
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-medium">
                      <span className="inline-flex items-center gap-1.5 text-cyan-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00E5FF]" />
                        Active Connected Hub
                      </span>
                      <span className="text-slate-500 font-mono text-[11px]">ERP Core</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Bottom Controls Bar (Arrows, Dots, Play/Pause) ── */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Left Arrow Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevCard}
              aria-label="Previous ERP Pillar"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-white hover:text-cyan-400 transition-all shadow-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* 5 Dot / Pill Indicators */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              {items.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Jump to ${item.title}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-8 bg-cyan-400 shadow-[0_0_10px_#00E5FF]'
                        : 'w-2 bg-slate-600 hover:bg-slate-400'
                    }`}
                  />
                );
              })}
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={nextCard}
              aria-label="Next ERP Pillar"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-white hover:text-cyan-400 transition-all shadow-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Autoplay Play/Pause Button */}
          <button
            onClick={() => setIsAutoplayActive(!isAutoplayActive)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
          >
            {isAutoplayActive ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
                <span>Autoplay On</span>
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span>Autoplay Paused</span>
              </>
            )}
          </button>
        </div>

        {/* Swipe instruction hint for mobile */}
        <p className="mt-4 text-center text-xs text-slate-500 font-medium">
          Drag horizontally or click any card to rotate the 3D pillar hub
        </p>
      </div>
    </section>
  );
}
