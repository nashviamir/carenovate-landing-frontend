import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ComparisonSection from '@/components/ComparisonSection';
import BenefitsSection from '@/components/BenefitsSection';
import FeatureCards from '@/components/FeatureCards';
import PortalSection from '@/components/PortalSection';
import DemoSection from '@/components/DemoSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ComparisonSection />
        <BenefitsSection />
        <FeatureCards />
        <PortalSection />
        <DemoSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}