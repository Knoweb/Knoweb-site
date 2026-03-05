import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Knoweb (Pvt.) Ltd — SaaS Platforms & Custom Software Solutions',
    template: '%s | Knoweb',
  },
  description:
    'Knoweb is a hybrid technology company offering subscription-based SaaS platforms and custom software solutions for SMEs and growing businesses.',
  keywords: ['SaaS', 'custom software', 'ERP', 'HR software', 'accounting software', 'Sri Lanka', 'Knoweb'],
  openGraph: {
    siteName: 'Knoweb',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main style={{ paddingTop: '102px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
