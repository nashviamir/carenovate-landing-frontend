import FeatureCards from '@/components/FeatureCards';
import ComparisonMatrix from '@/components/ComparisonMatrix';

export const metadata = {
  title: 'Features',
  description:
    'CareHub Smart Dispenser hardware capabilities and feature comparison.',
};

export default function FeaturesPage() {
  return (
    <>
      <FeatureCards />
      <ComparisonMatrix />
    </>
  );
}