import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VOLIUZ | Transparencia ambiental y comercio sostenible',
  description: 'Plataforma de transparencia ambiental y directorio circular para conectar consumidores y pymes sostenibles.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
