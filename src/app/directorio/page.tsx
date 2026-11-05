import type { Metadata } from 'next';
import DirectoryClient from '@/components/directorio/DirectoryClient';

export const metadata: Metadata = {
  title: 'Directorio sostenible',
  description: 'Explora productos y negocios sostenibles del Valle del Cauca.',
};

export default function DirectorioPage() {
  return <DirectoryClient />;
}