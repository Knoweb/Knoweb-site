'use client';

/**
 * animations.ts — Shared Framer Motion variants + helpers for Knoweb
 * Usage: import { fadeUp, staggerContainer, hoverLift } from '@/lib/animations';
 */

import type { Variants } from 'framer-motion';

/* ── Scroll-reveal: fade up ── */
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

/* ── Fade in (no movement) ── */
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

/* ── Slide in from left ── */
export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

/* ── Slide in from right ── */
export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

/* ── Stagger container — wraps a list and staggers children ── */
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

/* ── Stagger item (pair with staggerContainer) ── */
export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
};

/* ── Scale in ── */
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1, scale: 1,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
};

/* ──────────────────────────────────────────────────────────────
   Hover spring variants (use as whileHover prop directly)
   ────────────────────────────────────────────────────────────── */

/** Lift card up gently */
export const hoverLift = {
    y: -6,
    transition: { type: 'spring', stiffness: 300, damping: 22 },
};

/** Slight scale pulse (icons, buttons) */
export const hoverScale = {
    scale: 1.04,
    transition: { type: 'spring', stiffness: 300, damping: 22 },
};

/* ──────────────────────────────────────────────────────────────
   Viewport helper — use on motion.div to trigger on scroll
   ────────────────────────────────────────────────────────────── */

/** Standard once-only viewport option */
export const viewportOnce = { once: true, margin: '-80px' };
