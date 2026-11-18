
import type { Metadata } from 'next';
import ExtensionClient from '@/components/extension/ExtensionClient';

export const metadata: Metadata = {
  title: 'Extensión VOLIUZ | Instalación y funcionalidades',
  description:
    'Conoce la extensión de VOLIUZ y aprende cómo instalarla en tu navegador para consultar información ambiental.',
};

export default function ExtensionPage() {
  return <ExtensionClient />;
}
