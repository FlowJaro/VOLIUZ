
import type { Metadata } from 'next';
import TransparenciaClient from '@/components/transparencia/TransparenciaClient';

export const metadata: Metadata = {
  title: 'Transparencia ambiental | VOLIUZ',
  description:
    'Conoce la metodología ambiental de VOLIUZ, explora comparaciones de CO₂e y aprende a interpretar información sobre sostenibilidad.',
};

export default function TransparenciaPage() {
  return <TransparenciaClient />;
}
