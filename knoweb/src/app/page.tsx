import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import NeedHelpSection from '@/components/sections/NeedHelpSection';
import SaaSProductsSection from '@/components/sections/SaaSProductsSection';
import PracticalERPSection from '@/components/sections/PracticalERPSection';
import IndustrySolutionsSection from '@/components/sections/IndustrySolutionsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyKnowebCard from '@/components/sections/WhyKnowebCard';
import BottomCTASection from '@/components/sections/BottomCTASection';

export const metadata: Metadata = {
  title: 'Knoweb — Practical Software & Digital Solutions',
  description:
    'Knoweb provides business software, ERP solutions, custom development and digital services. Solutions for new projects and existing systems.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NeedHelpSection />
      <SaaSProductsSection />
      <PracticalERPSection />
      <IndustrySolutionsSection />
      <ServicesSection />
      <WhyKnowebCard />
      <BottomCTASection />
    </>
  );
}
