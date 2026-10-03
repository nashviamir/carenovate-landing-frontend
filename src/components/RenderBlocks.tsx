import Hero from './Hero';
import ComparisonSection from './ComparisonSection';
import PortalSection from './PortalSection';
import BenefitsSection from './BenefitsSection';
import DemoSection from './DemoSection';
import FeatureCards from './FeatureCards';
import ComparisonMatrix from './ComparisonMatrix';
import FaqSection from './FaqSection';
import type { Page, SiteSettings } from '@/payload-types';

interface RenderBlocksProps {
  blocks: Page['layout'];
  contact: SiteSettings['contact'];
}

/** Renders a page's sections in the order the editor arranged them. */
export default function RenderBlocks({ blocks, contact }: RenderBlocksProps) {
  return (
    <>
      {blocks.map((block, i) => {
        const key = block.id ?? i;
        switch (block.blockType) {
          case 'hero':
            return <Hero key={key} data={block} />;
          case 'beforeAfter':
            return <ComparisonSection key={key} data={block} />;
          case 'portal':
            return <PortalSection key={key} data={block} />;
          case 'benefits':
            return <BenefitsSection key={key} data={block} />;
          case 'bookDemo':
            return <DemoSection key={key} data={block} contact={contact} />;
          case 'hardware':
            return <FeatureCards key={key} data={block} phoneLabel={contact.phoneLabel} />;
          case 'comparisonTable':
            return <ComparisonMatrix key={key} data={block} />;
          case 'faq':
            return <FaqSection key={key} data={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
