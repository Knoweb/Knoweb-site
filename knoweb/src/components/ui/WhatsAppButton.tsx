'use client';

import React, { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '0711 102 102';
  const waUrl =
    'https://wa.me/94711102102?text=Hello%20Knoweb%20Solutions%2C%20I%20would%20like%20to%20inquire%20about%20your%20services';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '26px',
        right: '26px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexDirection: 'row-reverse',
      }}
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Knoweb on WhatsApp (0711 102 102)"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'relative',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          border: '2.5px solid #FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.22), 0 2px 8px rgba(37, 211, 102, 0.45)',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
          transform: isHovered ? 'scale(1.08) translateY(-2px)' : 'scale(1)',
        }}
      >
        {/* Blinking / Pulsing Radar Rings (matching user screenshot) */}
        <span className="wa-radar-ring" />
        <span className="wa-radar-ring wa-radar-ring-delayed" />

        {/* WhatsApp Official SVG Icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <path
            fill="#FFFFFF"
            d="M19.05 4.91C17.18 3.03 14.69 2 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31z"
          />
        </svg>
      </a>

      {/* Tooltip Label */}
      <div
        className="wa-tooltip"
        style={{
          background: 'rgba(10, 25, 47, 0.94)',
          color: '#FFFFFF',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          padding: '8px 16px',
          borderRadius: '24px',
          fontSize: '0.84rem',
          fontWeight: 600,
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.28)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateX(0)' : 'translateX(10px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#25D366',
            boxShadow: '0 0 6px #25D366',
          }}
        />
        <span>Chat with us on WhatsApp ({phoneNumber})</span>
      </div>

      <style>{`
        .wa-radar-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.45);
          pointer-events: none;
          z-index: 0;
          animation: wa-radar 2.4s cubic-bezier(0.1, 0.6, 0.3, 1) infinite;
        }
        .wa-radar-ring-delayed {
          animation-delay: 1.2s;
        }
        @keyframes wa-radar {
          0% {
            transform: scale(0.92);
            opacity: 0.85;
          }
          70% {
            transform: scale(1.68);
            opacity: 0.18;
          }
          100% {
            transform: scale(2.05);
            opacity: 0;
          }
        }
        @media (max-width: 600px) {
          .wa-tooltip {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
