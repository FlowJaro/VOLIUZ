
import type { Metadata } from 'next';
import PymesClient from '@/components/pymes/PymesClient';

export const metadata: Metadata = {
  title: 'Pymes | VOLIUZ',
  description:
    'Conecta tu negocio con el ecosistema de consumo sostenible de VOLIUZ.',
};

export default function PymesPage() {
  return <PymesClient />;
}
