'use client';

import React from 'react';

export interface AnimatedKnowebLogoProps {
  /**
   * Display format:
   * - 'sprite': GPU-accelerated CSS keyframe sprite sheet (Recommended: 32-bit alpha, 0 glitch, 100% reliable)
   * - 'gif': Standard animated GIF (Universal compatibility)
   */
  variant?: 'sprite' | 'gif';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  width?: number;
  height?: number;
  /**
   * Rotation duration in seconds (default: 10s)
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
  full: { width: 1200, height: 277 },
};

export default function AnimatedKnowebLogo({
  variant = 'sprite',
  size = 'md',
  width,
  height,
  speed = 10,
  className = '',
  style = {},
}: AnimatedKnowebLogoProps) {
  const finalWidth = width || SIZE_PRESETS[size]?.width || 160;
  const finalHeight = height || Math.round(finalWidth * (74 / 320));

  if (variant === 'gif') {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src="/knoweb-logo-animated.gif"
        alt="KNOWEB Animated Logo"
        width={finalWidth}
        height={finalHeight}
        className={className}
        style={{
          width: `${finalWidth}px`,
          height: `${finalHeight}px`,
          objectFit: 'contain',
          display: 'inline-block',
          verticalAlign: 'middle',
          ...style,
        }}
      />
    );
  }

  // CSS Keyframe Sprite Sheet Animation (48 frames, 10s seamless loop)
  const animKey = `knowebSprite_${finalHeight}`;
  const totalHeight = finalHeight * 48;

  return (
    <div
      className={`knoweb-animated-logo ${className}`}
      style={{
        width: `${finalWidth}px`,
        height: `${finalHeight}px`,
        backgroundImage: 'url(/knoweb-logo-spritesheet.webp), url(/knoweb-logo-spritesheet.png)',
        backgroundSize: `${finalWidth}px ${totalHeight}px`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        animation: `${animKey} ${speed}s steps(48) infinite`,
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style,
      }}
      role="img"
      aria-label="KNOWEB Animated Logo"
    >
      <style>{`
        @keyframes ${animKey} {
          from { background-position: 0 0; }
          to { background-position: 0 -${totalHeight}px; }
        }
      `}</style>
    </div>
  );
}
