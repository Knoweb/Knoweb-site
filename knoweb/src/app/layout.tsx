import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Knoweb Solutions',
    template: '%s | Knoweb Solutions',
  },
  description:
    'Knoweb is a hybrid technology company offering subscription-based SaaS platforms and custom software solutions for SMEs and growing businesses.',
  keywords: ['SaaS', 'custom software', 'ERP', 'HR software', 'accounting software', 'Sri Lanka', 'Knoweb', 'Knoweb Solutions'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    siteName: 'Knoweb Solutions',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main style={{ paddingTop: '68px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
