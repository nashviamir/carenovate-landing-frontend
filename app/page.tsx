import Hero from '@/components/Hero';
import ComparisonSection from '@/components/ComparisonSection';
import PortalSection from '@/components/PortalSection';
import BenefitsSection from '@/components/BenefitsSection';
import DemoSection from '@/components/DemoSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ComparisonSection />
      <PortalSection />
      <BenefitsSection />
      <DemoSection />
    </>
  );
}