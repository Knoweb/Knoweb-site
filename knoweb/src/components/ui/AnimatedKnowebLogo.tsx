'use client';

import React from 'react';
import Image from 'next/image';

export interface AnimatedKnowebLogoProps {
  /**
   * Display format:
   * - 'webp': Ultra-crisp 32-bit transparent animated WebP (Recommended for modern web)
   * - 'gif': Standard transparent animated GIF (Universal email/browser compatibility)
   * - 'css': Hardware-accelerated CSS keyframe SVG rotating globe (0 KB raster frames, 60fps)
   */
  variant?: 'webp' | 'gif' | 'css';
  /**
   * Predefined size presets or specify custom width/height
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  width?: number;
  height?: number;
  /**
   * Rotation speed in seconds for CSS keyframe mode (default: 10s, 8-12s supported)
   */
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

const SIZE_PRESETS = {
  sm: { width: 140, height: 32 },
  md: { width: 160, height: 37 },
  lg: { width: 240, height: 55 },
  xl: { width: 360, height: 83 },
  full: { width: 1200, height: 275 },
};

export default function AnimatedKnowebLogo({
  variant = 'webp',
  size = 'md',
  width,
  height,
  speed = 10,
  className = '',
  style = {},
  priority = false,
}: AnimatedKnowebLogoProps) {
  const finalWidth = width || SIZE_PRESETS[size].width;
  const finalHeight = height || SIZE_PRESETS[size].height;

  if (variant === 'css') {
    return (
      <div
        className={`knoweb-animated-logo-css-wrapper ${className}`}
        style={{
          position: 'relative',
          width: `${finalWidth}px`,
          height: `${finalHeight}px`,
          display: 'inline-block',
          overflow: 'hidden',
          ...style,
        }}
      >
        <svg
          viewBox="0 0 1200 275"
          width={finalWidth}
          height={finalHeight}
          style={{ width: '100%', height: '100%', display: 'block' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Circular mask for rotating globe elements */}
            <clipPath id="knowebGlobeMask">
              <circle cx="550" cy="142" r="126" />
            </clipPath>

            {/* Atmosphere radial backdrop */}
            <radialGradient id="globeAtmosphere" cx="45%" cy="40%" r="65%">
              <stop offset="0%" stop-color="#E0F7FF" stop-opacity="0.35" />
              <stop offset="60%" stop-color="#00A8FF" stop-opacity="0.08" />
              <stop offset="100%" stop-color="#0066CC" stop-opacity="0.0" />
            </radialGradient>
          </defs>

          <style>{`
            @keyframes knowebGlobeSpin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .knoweb-globe-rotating {
              transform-origin: 550px 142px;
              animation: knowebGlobeSpin ${speed}s linear infinite;
            }
          `}</style>

          {/* LAYER 1 (BACK): Rotating Globe Elements inside Clip Path */}
          <g clipPath="url(#knowebGlobeMask)">
            <circle cx="550" cy="142" r="126" fill="url(#globeAtmosphere)" />

            {/* Parallels and Meridians */}
            <g
              transform="rotate(-22 550 142)"
              stroke="#00A8FF"
              strokeWidth="2.2"
              fill="none"
              opacity="0.9"
            >
              {/* Latitude circles */}
              <ellipse cx="550" cy="82" rx="90" ry="16" />
              <ellipse cx="550" cy="112" rx="120" ry="22" />
              <ellipse cx="550" cy="142" rx="126" ry="24" />
              <ellipse cx="550" cy="172" rx="120" ry="22" />
              <ellipse cx="550" cy="202" rx="90" ry="16" />

              {/* Rotating Longitude Meridians */}
              <g className="knoweb-globe-rotating">
                <ellipse cx="550" cy="142" rx="30" ry="126" />
                <ellipse cx="550" cy="142" rx="65" ry="126" />
                <ellipse cx="550" cy="142" rx="100" ry="126" />
                <ellipse cx="550" cy="142" rx="126" ry="126" />
                <line x1="550" y1="16" x2="550" y2="268" strokeWidth="2.4" />
              </g>
            </g>
          </g>

          {/* LAYER 2 (FOREGROUND): Stationary KN, WEB, and Foreground Swoosh Arrow */}
          <image
            href="/knoweb-logo-static-foreground.png"
            x="0"
            y="0"
            width="1200"
            height="275"
          />
        </svg>
      </div>
    );
  }

  // Choose optimal image asset based on size
  const isSmall = finalWidth <= 420;
  const src =
    variant === 'gif'
      ? isSmall
        ? '/knoweb-logo-animated-nav.gif'
        : '/knoweb-logo-animated.gif'
      : isSmall
      ? '/knoweb-logo-animated-nav.webp'
      : '/knoweb-logo-animated.webp';

  return (
    <Image
      src={src}
      alt="KNOWEB Animated Logo"
      width={finalWidth}
      height={finalHeight}
      className={className}
      style={{
        objectFit: 'contain',
        width: `${finalWidth}px`,
        height: 'auto',
        ...style,
      }}
      priority={priority}
      unoptimized // Required for Next.js to preserve WebP/GIF animation frames
    />
  );
}
