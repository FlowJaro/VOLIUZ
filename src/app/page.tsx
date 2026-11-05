
import Hero from '@/components/home/Hero';
import {
  EditorialSections,
  ImpactIndicators,
  Methodology,
  BusinessCTA,
} from '@/components/home/HomeSections';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <EditorialSections />
      <ImpactIndicators />
      <Methodology />
      <BusinessCTA />
    </main>
  );
}
