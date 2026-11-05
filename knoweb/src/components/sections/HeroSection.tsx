'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface Node3D {
  baseX: number;
  baseY: number;
  baseZ: number;
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  glowColor: string;
  pulsePhase: number;
  pulseSpeed: number;
  isSatellite: boolean;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let startTime = performance.now();

    // Check device type for performance optimization
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // Color palette matching brand purple, royal blue, and electric cyan
    const palette = [
      { color: '#A855F7', glow: '168, 85, 247' }, // vivid purple
      { color: '#00E5FF', glow: '0, 229, 255' },   // electric cyan
      { color: '#3B82F6', glow: '59, 130, 246' },  // royal blue
      { color: '#E879F9', glow: '232, 121, 249' }, // neon magenta
      { color: '#C084FC', glow: '192, 132, 252' }, // soft purple
      { color: '#818CF8', glow: '129, 140, 248' }, // indigo
    ];

    let nodes: Node3D[] = [];
    let baseRadius = 220;
    let nodeCount = 84;
    let satelliteCount = 26;

    const buildNodes = () => {
      const width = window.innerWidth;
      const isMobile = width < 768;

      // Automatically simplify node count on mobile for smooth 60fps
      nodeCount = isMobile ? 36 : 84;
      satelliteCount = isMobile ? 10 : 26;
      baseRadius = isMobile ? 155 : 225;
      nodes = [];

      // 1. Primary constellation cluster (Fibonacci sphere distribution)
      for (let i = 0; i < nodeCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / nodeCount);
        const theta = Math.sqrt(nodeCount * Math.PI) * phi;
        // Organic volume variation
        const r = baseRadius * (0.68 + (i % 9) * 0.05 + Math.random() * 0.12);

        const col = palette[i % palette.length];
        nodes.push({
          baseX: r * Math.sin(phi) * Math.cos(theta),
          baseY: r * Math.sin(phi) * Math.sin(theta) * 0.92,
          baseZ: r * Math.cos(phi),
          x: 0,
          y: 0,
          z: 0,
          size: isMobile ? 1.4 : 1.3 + Math.random() * 1.7,
          color: col.color,
          glowColor: col.glow,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          isSatellite: false,
        });
      }

      // 2. Outer ambient stardust / satellite micro-particles
      for (let i = 0; i < satelliteCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const r = baseRadius * (1.25 + Math.random() * 0.55);

        const col = palette[Math.floor(Math.random() * palette.length)];
        nodes.push({
          baseX: r * Math.sin(phi) * Math.cos(theta),
          baseY: r * Math.sin(phi) * Math.sin(theta),
          baseZ: r * Math.cos(phi),
          x: 0,
          y: 0,
          z: 0,
          size: 0.8 + Math.random() * 0.9,
          color: col.color,
          glowColor: col.glow,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.015 + Math.random() * 0.02,
          isSatellite: true,
        });
      }
    };

    buildNodes();

    // Mouse tracking & smooth parallax lerp
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let mousePixelX = -9999;
    let mousePixelY = -9999;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left) / rect.width - 0.5;
      targetMouseY = (e.clientY - rect.top) / rect.height - 0.5;
      mousePixelX = e.clientX - rect.left;
      mousePixelY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetMouseX = 0;
      targetMouseY = 0;
      mousePixelX = -9999;
      mousePixelY = -9999;
    };

    // Disable mouse listeners on touch devices to conserve power
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      buildNodes();
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // IntersectionObserver to pause rendering when scrolled out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Continuous rotation angle accumulators (16-20 seconds per idle cycle)
    let idleRotY = 0.35;
    let idleRotX = 0.18;

    const render = (now: number) => {
      if (isVisible) {
        const elapsed = (now - startTime) * 0.001;
        const rect = canvas.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        ctx.clearRect(0, 0, width, height);

        // 1. Continuous smooth idle 3D rotation (approx 18s per full cycle)
        idleRotY += 0.0035;
        idleRotX += 0.0009;

        // 2. Smooth parallax tilt damped by mouse position (desktop only)
        if (!isTouchDevice) {
          currentMouseX += (targetMouseX - currentMouseX) * 0.045;
          currentMouseY += (targetMouseY - currentMouseY) * 0.045;
        }

        const rotY = idleRotY + currentMouseX * 0.65;
        const rotX = 0.22 + Math.sin(idleRotX) * 0.08 + currentMouseY * 0.45;

        // 3. Floating breathing motion
        const floatY = Math.sin(elapsed * 0.95) * 11;

        // 4. Center-right positioning (keeping typography on the left unobstructed)
        const isMobile = width < 768;
        const isTablet = width >= 768 && width < 1024;
        const centerX = isMobile
          ? width * 0.5
          : isTablet
          ? width * 0.68
          : width * 0.73;
        const centerY = isMobile
          ? height * 0.66 + floatY
          : height * 0.48 + floatY;
        const fov = 430;

        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);

        const totalNodes = nodes.length;

        // 5. Transform all 3D nodes
        for (let i = 0; i < totalNodes; i++) {
          const n = nodes[i];
          n.pulsePhase += n.pulseSpeed;

          // Rotate around Y-axis
          const x1 = n.baseX * cosY - n.baseZ * sinY;
          const z1 = n.baseZ * cosY + n.baseX * sinY;

          // Rotate around X-axis
          const y1 = n.baseY * cosX - z1 * sinX;
          const z2 = z1 * cosX + n.baseY * sinX;

          // Perspective projection
          const scale = fov / (fov + z2);
          let px = centerX + x1 * scale;
          let py = centerY + y1 * scale;

          // Subtle magnetic pull near mouse cursor on desktop
          if (!isTouchDevice && mousePixelX > 0 && !n.isSatellite) {
            const mdx = px - mousePixelX;
            const mdy = py - mousePixelY;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mDist < 160 && mDist > 0) {
              const pullFactor = (1 - mDist / 160) * 12;
              px += (mdx / mDist) * pullFactor;
              py += (mdy / mDist) * pullFactor;
            }
          }

          n.x = px;
          n.y = py;
          n.z = z2;
        }

        // 6. Draw connecting filaments between close primary nodes
        const maxDist = isMobile ? 65 : 124;
        const maxDistSq = maxDist * maxDist;

        for (let i = 0; i < nodeCount; i++) {
          const n1 = nodes[i];
          for (let j = i + 1; j < nodeCount; j++) {
            const n2 = nodes[j];

            const dx = n1.x - n2.x;
            const dy = n1.y - n2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < maxDistSq) {
              const dist = Math.sqrt(distSq);
              const distAlpha = 1 - dist / maxDist;
              // Depth calculation: average Z of the two nodes
              const avgZ = (n1.z + n2.z) * 0.5;
              const depthFactor = Math.max(
                0.15,
                Math.min(1, (avgZ + baseRadius) / (baseRadius * 2))
              );
              const alpha = distAlpha * depthFactor * 0.38;

              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
              ctx.lineWidth = Math.max(0.4, 0.85 * depthFactor);
              ctx.stroke();
            }
          }
        }

        // 7. Draw nodes with ambient glow halos
        for (let i = 0; i < totalNodes; i++) {
          const n = nodes[i];
          const depthAlpha = Math.max(
            0.15,
            Math.min(1, (n.z + baseRadius) / (baseRadius * 2))
          );
          const pulse = 1 + 0.22 * Math.sin(n.pulsePhase);
          const r = n.size * pulse;

          // Outer glowing aura for primary nodes
          if (!n.isSatellite && depthAlpha > 0.3) {
            ctx.beginPath();
            ctx.arc(n.x, n.y, r * 2.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${n.glowColor}, ${depthAlpha * 0.22})`;
            ctx.fill();
          }

          // Core bright node
          ctx.beginPath();
          ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
          ctx.fillStyle = n.color;
          ctx.globalAlpha = depthAlpha;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame((t) => {
      startTime = t;
      render(t);
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, []);

  return (
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
      {/* ── 3D Particle Network Canvas in the Center/Right ── */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* ── Soft Pulsating Radial Ambient Glow 1 (Violet / Purple) ── */}
      <div
        style={{
          position: 'absolute',
          top: '18%',
          right: '8%',
          width: '680px',
          height: '680px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(168, 85, 247, 0.20) 0%, rgba(126, 34, 206, 0.09) 38%, transparent 72%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
          animation: 'heroAuraPulse 7s ease-in-out infinite',
          zIndex: 0,
        }}
      />

      {/* ── Soft Pulsating Radial Ambient Glow 2 (Electric Cyan / Royal Blue) ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '12%',
          right: '22%',
          width: '460px',
          height: '460px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, rgba(59, 130, 246, 0.08) 42%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(45px)',
          animation: 'heroAuraPulseSecondary 9s ease-in-out infinite alternate',
          zIndex: 0,
        }}
      />

      {/* ── Left-to-Right Dark Gradient Vignette for Guaranteed WCAG Contrast ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '100%',
          background:
            'linear-gradient(90deg, #050811 0%, #050811 36%, rgba(5, 8, 17, 0.88) 55%, rgba(5, 8, 17, 0.25) 80%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Mobile Top-to-Bottom Vignette Overlay */}
      <div
        className="block md:hidden"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(180deg, #050811 0%, #050811 40%, rgba(5, 8, 17, 0.70) 70%, rgba(5, 8, 17, 0.15) 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* ── Edge-to-edge Content Container with Left Alignment ── */}
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
        <div style={{ maxWidth: '680px' }}>
          {/* Main Headline (H1): Light / Thin stroke (300 weight), Pure White */}
          <h1
            style={{
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: 'clamp(2.75rem, 5.8vw, 5.25rem)',
              fontWeight: 300,
              lineHeight: 1.12,
              color: '#FFFFFF',
              letterSpacing: '-0.025em',
              marginBottom: '24px',
            }}
          >
            Practical Software &amp; Digital Solutions
          </h1>

          {/* Description Paragraph: 400 weight, muted slate/grey (#94A3B8), max-width ~600px */}
          <p
            style={{
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
              fontWeight: 400,
              lineHeight: 1.65,
              color: '#94A3B8',
              maxWidth: '580px',
              marginBottom: '38px',
            }}
          >
            Business software, ERP, custom development and digital services.
            Solutions for new projects and existing systems.
          </p>

          {/* Buttons: Styling matching reference blue and dark aesthetic */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            {/* Primary Button: Vibrant Royal Blue */}
            <Link
              href="/solutions"
              style={{
                textDecoration: 'none',
                borderRadius: '10px',
                background: '#0066FF',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.98rem',
                padding: '13px 30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 20px rgba(0, 102, 255, 0.45)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0052CC';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 8px 30px rgba(0, 102, 255, 0.65)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0066FF';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 4px 20px rgba(0, 102, 255, 0.45)';
              }}
            >
              Explore Solutions &rarr;
            </Link>

            {/* Secondary Button: Dark translucent with subtle border */}
            <Link
              href="/contact"
              style={{
                textDecoration: 'none',
                border: '1.5px solid rgba(255, 255, 255, 0.28)',
                color: '#FFFFFF',
                borderRadius: '10px',
                padding: '12px 28px',
                fontWeight: 600,
                fontSize: '0.98rem',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.55)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Knoweb
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
