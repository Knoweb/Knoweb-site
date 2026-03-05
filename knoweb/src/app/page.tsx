import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsStripSection from '@/components/sections/StatsStripSection';
import WhyKnowebSection from '@/components/sections/WhyKnowebSection';
import SolutionModelsSection from '@/components/sections/SolutionModelsSection';
import TargetAudienceSection from '@/components/sections/TargetAudienceSection';
import SolutionsWeDeliverSection from '@/components/sections/SolutionsWeDeliverSection';
import CustomerSuccessSection from '@/components/sections/CustomerSuccessSection';
import BusinessBenefitsSection from '@/components/sections/BusinessBenefitsSection';
import ProblemsSection from '@/components/sections/ProblemsSection';
import HowWeWorkSection from '@/components/sections/HowWeWorkSection';
import CTASection from '@/components/sections/CTASection';
import ResourcesPreviewSection from '@/components/sections/ResourcesPreviewSection';

export const metadata: Metadata = {
  title: 'Knoweb — SaaS Platforms & Custom Software Solutions for Growing Businesses',
  description:
    'Knoweb is a hybrid technology company offering subscription-based SaaS platforms and custom software solutions for SMEs, retailers, and multi-branch organizations.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStripSection />
      <WhyKnowebSection />
      <SolutionModelsSection />
      <TargetAudienceSection />
      <SolutionsWeDeliverSection />
      <CustomerSuccessSection />
      <BusinessBenefitsSection />
      <ProblemsSection />
      <HowWeWorkSection />
      <ResourcesPreviewSection />
      <CTASection />
    </>
  );
}
