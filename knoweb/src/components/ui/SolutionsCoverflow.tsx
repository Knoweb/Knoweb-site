'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, PanInfo } from 'framer-motion';

export interface SolutionItem {
  id: string;
  solutionNumber: string;
  shortTitle: string;
  title: string;
  tagline: string;
  summary: string;
  points: string[];
  icon: React.ReactNode;
  accentColor: string;
  lightBg: string;
  image: string;
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'wewili',
    solutionNumber: '01',
    shortTitle: 'Plantation',
    title: 'Wewili Plantation Platform',
    tagline: 'Plantation Operations & Estate Intelligence',
    summary:
      'Aggregates field harvesting logs, worker productivity, crop yield, and factory dispatch into real-time executive dashboards.',
    points: [
      'Field plucking / harvesting logs & daily weight tracking',
      'Division-wise worker attendance & muster roll tracking',
      'Fertilizer, chemical & nursery input utilization records',
      'Factory dispatch, green leaf intake & outturn calculations',
    ],
    accentColor: '#16A34A',
    lightBg: 'rgba(22, 163, 74, 0.08)',
    image: '/sol-wavili.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    id: 'inspection',
    solutionNumber: '02',
    shortTitle: 'Inspection',
    title: 'Inspection & Audit System',
    tagline: 'Field Audits & Compliance Verification',
    summary:
      'Standardize quality, safety, and compliance audits across multiple facilities with mobile digital forms and instant discrepancy resolution.',
    points: [
      'Configurable digital audit checklists by facility type',
      'On-site photo capture, annotations & GPS timestamping',
      'Automated issue scoring, severity ranking & CAPA logs',
      'Instant PDF report generation & compliance dashboards',
    ],
    accentColor: '#0052FF',
    lightBg: 'rgba(0, 82, 255, 0.08)',
    image: '/sol-inspection.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    id: 'greenhouse',
    solutionNumber: '03',
    shortTitle: 'Greenhouse',
    title: 'Greenhouse Automation',
    tagline: 'Agri-Tech Environmental Telemetry',
    summary:
      'Continuous telemetry monitoring of critical micro-climates in commercial poly-tunnels with early warning alerts and automated control.',
    points: [
      'Real-time temperature, humidity & VPD telemetry',
      'Soil moisture, EC electrical conductivity & pH tracking',
      'Automated instant alerts via SMS, WhatsApp & email',
      'Automated irrigation and ventilation control triggers',
    ],
    accentColor: '#0D9488',
    lightBg: 'rgba(13, 148, 136, 0.08)',
    image: '/sol-greenhouse.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
  },
  {
    id: 'atm',
    solutionNumber: '04',
    shortTitle: 'Central Alarm',
    title: 'Centralized Alarm & Security',
    tagline: 'Financial Infrastructure & Physical Security Monitoring',
    summary:
      'Mission-critical physical security and telemetry monitoring for remote ATM kiosks and bank branch vaults with rapid command dispatch.',
    points: [
      'Multi-sensor inputs (vibration, thermal, door open, smoke)',
      'Immediate alert dispatch to central command centers',
      'UPS power failure & heartbeat telemetry monitoring',
      'False-alarm mitigation logic & camera snapshot triggers',
    ],
    accentColor: '#DC2626',
    lightBg: 'rgba(220, 38, 38, 0.08)',
    image: '/sol-alarm.png',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

interface SolutionsCoverflowProps {
  items?: SolutionItem[];
  autoPlayInterval?: number;
  title?: string;
  subtitle?: string;
}

export default function SolutionsCoverflow({
  items = SOLUTIONS_DATA,
  autoPlayInterval = 3500,
  title = 'Specialized Operational Solutions',
  subtitle = 'Purpose-built applications and monitoring platforms engineered for high reliability in demanding environments.',
}: SolutionsCoverflowProps) {
  // Center on Inspection Dashboard (Index 1) by default
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
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

  // Continuous auto swipe functionality:
  // Automatically advances every 3.5s, pauses smoothly when mouse hovers over cards, and resumes when mouse leaves.
  useEffect(() => {
    if (isHovered || isDragging) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isHovered, isDragging, activeIndex, autoPlayInterval, count]);

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
   * Calculate 3D cylindrical transform along the curved cylindrical arc for 4 items.
   */
  const getCardTransform = (index: number) => {
    let diff = index - activeIndex;

    // Wrap around for seamless circular carousel (4 items)
    if (diff > 2) diff -= count;
    if (diff < -1) diff += count;

    const isCenter = diff === 0;
    const absDiff = Math.abs(diff);

    // Cylindrical arc mathematics:
    const rotateY = diff * -28;
    // Spacing along the horizontal cylindrical arc, adapted to viewport width
    const spacing = windowWidth < 640 ? 260 : windowWidth < 1024 ? 300 : 335;
    const translateX = diff * spacing;
    // Deep Z-axis recession bending cards into the background cylinder
    const translateZ = isCenter ? 50 : -absDiff * 130;
    // Scale down inactive cards smoothly, keeping active center card prominent
    const scale = isCenter ? 1.05 : Math.max(0.76, 1 - absDiff * 0.14);
    // Smooth opacity falloff
    const opacity = isCenter ? 1 : Math.max(0.45, 0.88 - absDiff * 0.25);
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
            Specialized Industry Platforms
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
              maxWidth: '640px',
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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full h-[495px] sm:h-[515px] md:h-[535px] flex items-center justify-center pt-1"
          style={{
            perspective: '1400px',
            perspectiveOrigin: 'center center',
          }}
        >
          {/* Floating Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevCard();
            }}
            aria-label="Previous Solution"
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white border border-slate-200/90 shadow-md flex items-center justify-center text-slate-700 hover:text-[#0052FF] hover:border-blue-400 active:scale-95 transition-all backdrop-blur-sm cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Floating Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextCard();
            }}
            aria-label="Next Solution"
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white border border-slate-200/90 shadow-md flex items-center justify-center text-slate-700 hover:text-[#0052FF] hover:border-blue-400 active:scale-95 transition-all backdrop-blur-sm cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

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
            {items.map((solution, index) => {
              const { rotateY, translateX, translateZ, scale, opacity, blur, zIndex, isCenter, diff } =
                getCardTransform(index);

              return (
                <motion.div
                  key={solution.id}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
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
                  className={`absolute top-1/2 -translate-y-1/2 w-[325px] sm:w-[355px] md:w-[380px] h-[435px] sm:h-[450px] rounded-2xl overflow-hidden flex flex-col justify-between transition-shadow duration-300 ${
                    isCenter
                      ? 'cursor-default ring-1 ring-blue-500/20'
                      : 'cursor-pointer hover:shadow-lg'
                  }`}
                  style={{
                    zIndex,
                    transformStyle: 'preserve-3d',
                    willChange: 'transform, opacity, filter',
                    background: isCenter
                      ? '#FFFFFF'
                      : 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: isCenter ? 'none' : 'blur(12px)',
                    border: isCenter
                      ? '2px solid #0052FF'
                      : '1px solid rgba(226, 232, 240, 0.95)',
                    boxShadow: isCenter
                      ? '0 30px 60px -12px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(0, 82, 255, 0.15), 0 12px 30px -4px rgba(0, 82, 255, 0.14)'
                      : '0 10px 25px -6px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
                  }}
                >
                  {/* Subtle Cylindrical Shading Overlay */}
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

                  {/* ── Top Visual Header with High-Resolution Solution Graphic ── */}
                  <div className="relative w-full h-[155px] sm:h-[165px] overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={solution.image}
                      alt={solution.title}
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
                      {/* Frosted Glass Solution Icon */}
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md shadow-md transition-all duration-300"
                        style={{
                          background: isCenter ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
                          border: isCenter ? `1.5px solid ${solution.accentColor}` : '1px solid rgba(255, 255, 255, 0.8)',
                          color: isCenter ? solution.accentColor : '#334155',
                        }}
                      >
                        {solution.icon}
                      </div>

                      {/* Frosted Solution Tag */}
                      <span
                        className="text-[11px] font-mono font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-md"
                        style={{
                          background: isCenter ? '#0052FF' : 'rgba(15, 23, 42, 0.80)',
                          color: '#FFFFFF',
                          border: isCenter ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        SOLUTION {solution.solutionNumber}
                      </span>
                    </div>
                  </div>

                  {/* ── Card Body Content (Vertically centered, balanced py-6 padding, zero empty bottom space) ── */}
                  <div className="px-6 sm:px-7 py-6 flex-1 flex flex-col justify-center items-center text-center relative z-10">
                    <div className="w-full flex flex-col items-center">
                      {/* Solution Title with Hero Inter font - Centered with top spacing */}
                      <h3
                        className="text-xl sm:text-[22px] font-extrabold text-[#0A192F] tracking-tight leading-snug mt-1.5 sm:mt-2 mb-2 text-center"
                        style={{
                          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                          letterSpacing: '-0.025em',
                        }}
                      >
                        {solution.title}
                      </h3>

                      {/* Summary with high legibility - Centered */}
                      <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-3 text-center max-w-[320px] mx-auto">
                        {solution.summary}
                      </p>

                      {/* Clean Centered Accent Divider */}
                      <div
                        className="h-[2px] w-16 mb-4 mx-auto rounded-full transition-all duration-300"
                        style={{
                          background: isCenter
                            ? 'linear-gradient(90deg, rgba(0, 82, 255, 0.15) 0%, #0052FF 50%, rgba(0, 82, 255, 0.15) 100%)'
                            : '#E2E8F0',
                        }}
                      />

                      {/* Bullet Points with Crisp Vector SVG Checkmark Icons & space-y-3 */}
                      <ul className="w-full max-w-[315px] sm:max-w-[325px] mx-auto space-y-3 text-left">
                        {solution.points.map((point, idx) => (
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
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mt-8 flex flex-col items-center justify-center"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-sm backdrop-blur-md">
            {/* Previous Card Button */}
            <button
              onClick={prevCard}
              aria-label="Previous Solution"
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:text-[#0052FF] hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Segmented Pill Tabs for all 4 Solutions */}
            <div className="flex items-center gap-1">
              {items.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Jump to ${item.title}`}
                    className="relative px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSegmentedPillSolutions"
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
                      <span className="font-mono text-[11px] opacity-80">{item.solutionNumber}</span>
                      <span className="hidden sm:inline">{item.shortTitle}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Next Card Button */}
            <button
              onClick={nextCard}
              aria-label="Next Solution"
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:text-[#0052FF] hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
