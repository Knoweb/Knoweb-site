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
  pulsePhase: number;
  pulseSpeed: number;
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

    // Palette replicating the glowing violet/purple & cyan neural network in IFS screenshot
    const colors = [
      '#C084FC', // soft purple
      '#A855F7', // bright violet
      '#E879F9', // magenta
      '#818CF8', // indigo
      '#00E5FF', // electric cyan accent
      '#D8B4FE', // light lavender
    ];

    // Generate 3D nodes distributed in an organic spherical/ellipsoid cloud
    const nodeCount = 78;
    const nodes: Node3D[] = [];
    const baseRadius = 220;

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      // Slight randomness in radial distance for organic density
      const r = baseRadius * (0.65 + Math.random() * 0.45);

      nodes.push({
        baseX: r * Math.sin(phi) * Math.cos(theta),
        baseY: r * Math.sin(phi) * Math.sin(theta) * 0.9,
        baseZ: r * Math.cos(phi),
        x: 0,
        y: 0,
        z: 0,
        size: 1.2 + Math.random() * 1.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    let rotX = 0.2;
    let rotY = 0.4;
    let targetRotX = 0.2;
    let targetRotY = 0.4;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = 0.4 + mouseX * 0.45;
      targetRotX = 0.2 + mouseY * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Pause canvas if scrolled out of view
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    observer.observe(canvas);

    // Render loop
    const render = () => {
      if (isVisible) {
        const rect = canvas.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        ctx.clearRect(0, 0, width, height);

        // Smooth rotation drift and mouse parallax
        rotY += 0.0022;
        rotX += (targetRotX - rotX) * 0.03;
        rotY += (targetRotY - rotY) * 0.03;

        // Position cluster on center-right (responsive)
        const isMobile = width < 768;
        const centerX = isMobile ? width * 0.5 : width * 0.68;
        const centerY = isMobile ? height * 0.62 : height * 0.5;
        const fov = 420;

        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);

        // Transform all 3D nodes
        for (let i = 0; i < nodeCount; i++) {
          const n = nodes[i];
          n.pulsePhase += n.pulseSpeed;

          // Rotate around Y
          const x1 = n.baseX * cosY - n.baseZ * sinY;
          const z1 = n.baseZ * cosY + n.baseX * sinY;

          // Rotate around X
          const y1 = n.baseY * cosX - z1 * sinX;
          const z2 = z1 * cosX + n.baseY * sinX;

          // Perspective projection
          const scale = fov / (fov + z2);
          n.x = centerX + x1 * scale;
          n.y = centerY + y1 * scale;
          n.z = z2;
        }

        // Draw connecting filaments/lines between close nodes
        const maxDist = isMobile ? 85 : 125;
        for (let i = 0; i < nodeCount; i++) {
          for (let j = i + 1; j < nodeCount; j++) {
            const n1 = nodes[i];
            const n2 = nodes[j];

            const dx = n1.x - n2.x;
            const dy = n1.y - n2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
              const alpha = Math.max(0, 1 - dist / maxDist) * 0.35;
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);

              // Depth gradient line
              ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }

        // Draw nodes with glowing aura
        for (let i = 0; i < nodeCount; i++) {
          const n = nodes[i];
          const depthAlpha = Math.max(0.15, Math.min(1, (n.z + baseRadius) / (baseRadius * 2)));
          const pulse = 1 + 0.2 * Math.sin(n.pulsePhase);
          const r = n.size * pulse;

          // Outer subtle glow halo
          ctx.beginPath();
          ctx.arc(n.x, n.y, r * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(192, 132, 252, ${depthAlpha * 0.22})`;
          ctx.fill();

          // Core bright node
          ctx.beginPath();
          ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
          ctx.fillStyle = n.color;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
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
      {/* 3D Particle Network Canvas in the Center/Right */}
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

      {/* Atmospheric center-right glowing violet / magenta ambient aura */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.16) 0%, rgba(126, 34, 206, 0.08) 35%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(45px)',
          zIndex: 0,
        }}
      />

      {/* Subtle bottom-right cyan accent aura */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '25%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      {/* Edge-to-edge Content Container with Generous Left Alignment */}
      <div
        className="container-max"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: '64px',
          paddingBottom: '72px',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '680px' }}>
          {/* Main Headline (H1): Light / Thin stroke (300 weight), Pure White */}
          <h1
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
              fontWeight: 400,
              lineHeight: 1.65,
              color: '#94A3B8',
              maxWidth: '580px',
              marginBottom: '38px',
            }}
          >
            Business software, ERP, custom development and digital services. Solutions for new projects and existing systems.
          </p>

          {/* Buttons: Capsule / Pill Style */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            {/* Primary Button: Bright neon green pill */}
            <Link
              href="/solutions"
              style={{
                textDecoration: 'none',
                borderRadius: '9999px',
                background: '#00E599',
                color: '#000000',
                fontWeight: 600,
                fontSize: '0.98rem',
                padding: '12px 28px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 16px rgba(0, 229, 153, 0.32)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#15F5A8';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 229, 153, 0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#00E599';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 229, 153, 0.32)';
              }}
            >
              Explore Solutions &rarr;
            </Link>

            {/* Secondary Button: Transparent dark pill with thin border */}
            <Link
              href="/contact"
              style={{
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#FFFFFF',
                borderRadius: '9999px',
                padding: '12px 28px',
                fontWeight: 600,
                fontSize: '0.98rem',
                background: 'transparent',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
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
