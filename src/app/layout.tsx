import type { Metadata } from 'next';
import { Geist, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'VOLIUZ | Tecnología sostenible',
    template: '%s | VOLIUZ',
  },
  description:
    'Tecnología para impulsar el consumo responsable, la transparencia ambiental y los negocios sostenibles.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geist.variable} ${spaceGrotesk.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
